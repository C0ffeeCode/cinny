import React from 'react';
import ReactDom from 'react-dom';
import './font';
import './index.scss';

import settings from './client/state/settings';

import App from './app/pages/App';

settings.setTheme(settings.getThemeIndex());

if (navigator.serviceWorker) {
  navigator.serviceWorker.register(new URL('./serviceWorker.js', import.meta.url), { scope: '/' })
    .then((reg) => reg.update());
}

ReactDom.render(
  <App />,
  document.getElementById('root'),
);
