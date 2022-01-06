import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Text from '../../../atoms/text/Text';
import RawIcon from '../../../atoms/system-icons/RawIcon';
import VolumeFullIC from '../../../../../public/res/ic/outlined/volume-full.svg';
import ChevronBottomIC from '../../../../../public/res/ic/outlined/chevron-bottom.svg';
import ArrowIC from '../../../../../public/res/ic/outlined/leave-arrow.svg';
import PauseIC from '../../../../../public/res/ic/outlined/pause.svg';
import PlayIC from '../../../../../public/res/ic/outlined/play.svg';
import IconButton from '../../../atoms/button/IconButton';
import './VoiceMailRecorder.scss';
import Timer from '../../../../util/Timer';

let timer;

let _stream;
let _mediaRecorder;
const audioChunks = [];

async function init() {
  if (_mediaRecorder) return;

  timer = new Timer();
  _stream = null;
  _mediaRecorder = null;
  audioChunks.length = 0;

  _stream = await navigator.mediaDevices.getUserMedia({ audio: true });

  _mediaRecorder = new MediaRecorder(_stream);

  // Remove previous recording
  audioChunks.length = 0;

  _mediaRecorder.ondataavailable = (event) => {
    audioChunks.push(event.data);
  };
  _mediaRecorder.onerror = (error) => {
    console.log(error);
    _mediaRecorder.stop();
  };
}

function pauseRec() {
  if (_mediaRecorder.state === 'recording') {
    _mediaRecorder.pause();
    timer.pause();
  }
}

function startOrResumeRec() {
  if (!_mediaRecorder) return;

  if (_mediaRecorder.state === 'paused') {
    _mediaRecorder.resume();
  } else if (_mediaRecorder.state === 'inactive') {
    audioChunks.length = 0;
    _mediaRecorder.start();
  }
  timer.resume();
}

function restartRec() {
  // TODO: BUG: If recording is paused before restarting
  // it will cause the "Recording paused" not to be edited
  if (_mediaRecorder.state !== 'recording') _mediaRecorder.pause();
  if (_mediaRecorder.state !== 'inactive') _mediaRecorder.stop();

  _mediaRecorder = null;
  timer = new Timer();
  init()
    .then(startOrResumeRec);
}

function VoiceMailRecorder({ fnHowToSubmit }) {
  const [state, setState] = React.useState('Recording');
  const [timeRecording, setTimeRecording] = React.useState('00:00');
  const [browserHasNoSupport, setBrowserHasNoSupport] = React.useState(!navigator.mediaDevices
    ? 'It seems like your browser is unsupported' : null);

  async function initiateInitiation() {
    if (!_mediaRecorder) {
      await init().catch((err) => {
        console.warn('Recording is disallowed', err);
        setBrowserHasNoSupport('It seems like you have disallowed Cinny to record your voice ༼ つ ◕_◕ ༽つ');
      });

      if (browserHasNoSupport) return;
      startOrResumeRec();
    }

    _mediaRecorder.onstart = () => setState('Recording...');
    _mediaRecorder.onpause = () => setState('Recording paused');
    _mediaRecorder.onresume = () => setState('Recording...');
  }

  function stopAndSubmit(skipSubmission) {
    if (_mediaRecorder && _mediaRecorder.state !== 'inactive') _mediaRecorder.stop();

    _stream.getTracks().forEach((track) => track.stop());

    if (!skipSubmission) {
      setTimeout(() => {
        _mediaRecorder = null;
        _stream = null;

        const opts = { type: 'audio/webm' };
        const audioBlob = new Blob(audioChunks, opts);

        const audioFile = new File([audioBlob], 'voicemail.webm', opts);
        fnHowToSubmit(audioFile);
      // BUG: This will cause the recorder to add the file although it was to be cancelled
      }, 300); // TODO: Fix this hack, stop does not mean dataavailable but its going to happen soon
    }
  }

  useEffect(() => {
    const timerUpdater = setInterval(() => {
      setTimeRecording(timer.getTimeStr);
    }, 500); // .5 seconds

    // Cleanup after components unmount
    return () => {
      clearInterval(timerUpdater);
      if (_mediaRecorder) {
        _mediaRecorder = null;
      }
      if (_stream) {
        // To remove the browser's recording indicator
        _stream.getTracks().forEach((track) => track.stop());
        _stream = null;
      }
    };
  }, []);

  // fnRequestResult(stopAndSubmit);
  initiateInitiation();

  const ui = (
    <div className="room-attachment">
      <div className="room-attachment__preview">
        <RawIcon src={VolumeFullIC} />
      </div>
      <div className="room-attachment__info room-attachment-ui-recorder">
        <div>
          <Text variant="b1">
            {state}
          </Text>
          <Text variant="b3">{`for ${timeRecording}`}</Text>
        </div>
        {(_mediaRecorder && _mediaRecorder.state === 'recording')
          ? (<IconButton onClick={pauseRec} src={PauseIC}>Pause</IconButton>)
          : (<IconButton onClick={startOrResumeRec} src={PlayIC}>Start</IconButton>)}
        <IconButton onClick={restartRec} src={ArrowIC} tooltip="Start over">Reset</IconButton>
        <IconButton onClick={() => stopAndSubmit()} src={ChevronBottomIC} tooltip="Add as attachment" type="submit">Submit</IconButton>
      </div>
    </div>
  );

  return browserHasNoSupport
    ? <Text variant="b1" className="room-attachment unsupported-info">{browserHasNoSupport}</Text>
    : ui;
}

VoiceMailRecorder.propTypes = {
  // // Might be useful in the future if
  // // components should be requested to submit their result content when the message gets sent
  // // so the user does not need this UI to attach its result here but can just sent it
  // fnRequestResult: PropTypes.func.isRequired,
  fnHowToSubmit: PropTypes.func.isRequired,
};

export default VoiceMailRecorder;
