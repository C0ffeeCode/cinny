const cons = {
  version: '1.6.1',
  secretKey: {
    ACCESS_TOKEN: 'cinny_access_token',
    DEVICE_ID: 'cinny_device_id',
    USER_ID: 'cinny_user_id',
    BASE_URL: 'cinny_hs_base_url',
  },
  DEVICE_DISPLAY_NAME: 'Cinny Web',
  'in.cinny.spaces': 'in.cinny.spaces',
  tabs: {
    HOME: 'home',
    DIRECTS: 'dm',
  },
  supportEventTypes: ['m.room.create', 'm.room.message', 'm.room.encrypted', 'm.room.member', 'm.sticker'],
  notifs: {
    DEFAULT: 'default',
    ALL_MESSAGES: 'all_messages',
    MENTIONS_AND_KEYWORDS: 'mentions_and_keywords',
    MUTE: 'mute',
  },
  status: {
    PRE_FLIGHT: 'pre-flight',
    IN_FLIGHT: 'in-flight',
    SUCCESS: 'success',
    ERROR: 'error',
  },
  actions: {
    navigation: {
      SELECT_TAB: 'SELECT_TAB',
      SELECT_SPACE: 'SELECT_SPACE',
      SELECT_ROOM: 'SELECT_ROOM',
      TOGGLE_ROOM_SETTINGS: 'TOGGLE_ROOM_SETTINGS',
      OPEN_INVITE_LIST: 'OPEN_INVITE_LIST',
      OPEN_PUBLIC_ROOMS: 'OPEN_PUBLIC_ROOMS',
      OPEN_CREATE_ROOM: 'OPEN_CREATE_ROOM',
      OPEN_INVITE_USER: 'OPEN_INVITE_USER',
      OPEN_PROFILE_VIEWER: 'OPEN_PROFILE_VIEWER',
      OPEN_SETTINGS: 'OPEN_SETTINGS',
      OPEN_EMOJIBOARD: 'OPEN_EMOJIBOARD',
      OPEN_READRECEIPTS: 'OPEN_READRECEIPTS',
      CLICK_REPLY_TO: 'CLICK_REPLY_TO',
      OPEN_SEARCH: 'OPEN_SEARCH',
      OPEN_ATTACHMENT_TYPE_SELECTOR: 'OPEN_ATTACHMENT_TYPE_SELECTOR',
      OPEN_REUSABLE_CONTEXT_MENU: 'OPEN_REUSABLE_CONTEXT_MENU',
      OPEN_NAVIGATION: 'OPEN_NAVIGATION',
    },
    room: {
      JOIN: 'JOIN',
      LEAVE: 'LEAVE',
      CREATE: 'CREATE',
      CREATE_SPACE_SHORTCUT: 'CREATE_SPACE_SHORTCUT',
      DELETE_SPACE_SHORTCUT: 'DELETE_SPACE_SHORTCUT',
      error: {
        CREATE: 'ERROR_CREATE',
      },
    },
    settings: {
      TOGGLE_SYSTEM_THEME: 'TOGGLE_SYSTEM_THEME',
      TOGGLE_MARKDOWN: 'TOGGLE_MARKDOWN',
      TOGGLE_PEOPLE_DRAWER: 'TOGGLE_PEOPLE_DRAWER',
      TOGGLE_MEMBERSHIP_EVENT: 'TOGGLE_MEMBERSHIP_EVENT',
      TOGGLE_NICKAVATAR_EVENT: 'TOGGLE_NICKAVATAR_EVENT',
    },
  },
  events: {
    navigation: {
      TAB_SELECTED: 'TAB_SELECTED',
      SPACE_SELECTED: 'SPACE_SELECTED',
      ROOM_SELECTED: 'ROOM_SELECTED',
      ROOM_SETTINGS_TOGGLED: 'ROOM_SETTINGS_TOGGLED',
      INVITE_LIST_OPENED: 'INVITE_LIST_OPENED',
      PUBLIC_ROOMS_OPENED: 'PUBLIC_ROOMS_OPENED',
      CREATE_ROOM_OPENED: 'CREATE_ROOM_OPENED',
      INVITE_USER_OPENED: 'INVITE_USER_OPENED',
      SETTINGS_OPENED: 'SETTINGS_OPENED',
      PROFILE_VIEWER_OPENED: 'PROFILE_VIEWER_OPENED',
      EMOJIBOARD_OPENED: 'EMOJIBOARD_OPENED',
      READRECEIPTS_OPENED: 'READRECEIPTS_OPENED',
      REPLY_TO_CLICKED: 'REPLY_TO_CLICKED',
      OPEN_ATTACHMENT_TYPE_SELECTOR: 'OPEN_ATTACHMENT_TYPE_SELECTOR',
      SEARCH_OPENED: 'SEARCH_OPENED',
      REUSABLE_CONTEXT_MENU_OPENED: 'REUSABLE_CONTEXT_MENU_OPENED',
      OPEN_NAVIGATION: 'OPEN_NAVIGATION',
    },
    roomList: {
      ROOMLIST_UPDATED: 'ROOMLIST_UPDATED',
      INVITELIST_UPDATED: 'INVITELIST_UPDATED',
      ROOM_JOINED: 'ROOM_JOINED',
      ROOM_LEAVED: 'ROOM_LEAVED',
      ROOM_CREATED: 'ROOM_CREATED',
      SPACE_SHORTCUT_UPDATED: 'SPACE_SHORTCUT_UPDATED',
      ROOM_PROFILE_UPDATED: 'ROOM_PROFILE_UPDATED',
    },
    notifications: {
      NOTI_CHANGED: 'NOTI_CHANGED',
      FULL_READ: 'FULL_READ',
    },
    roomTimeline: {
      READY: 'READY',
      EVENT: 'EVENT',
      PAGINATED: 'PAGINATED',
      TYPING_MEMBERS_UPDATED: 'TYPING_MEMBERS_UPDATED',
      LIVE_RECEIPT: 'LIVE_RECEIPT',
      MARKED_AS_READ: 'MARKED_AS_READ',
      EVENT_REDACTED: 'EVENT_REDACTED',
      AT_BOTTOM: 'AT_BOTTOM',
      SCROLL_TO_LIVE: 'SCROLL_TO_LIVE',
    },
    roomsInput: {
      MESSAGE_SENT: 'MESSAGE_SENT',
      FILE_UPLOADED: 'FILE_UPLOADED',
      UPLOAD_PROGRESS_CHANGES: 'UPLOAD_PROGRESS_CHANGES',
      FILE_UPLOAD_CANCELED: 'FILE_UPLOAD_CANCELED',
      ATTACHMENT_CANCELED: 'ATTACHMENT_CANCELED',
    },
    settings: {
      SYSTEM_THEME_TOGGLED: 'SYSTEM_THEME_TOGGLED',
      MARKDOWN_TOGGLED: 'MARKDOWN_TOGGLED',
      PEOPLE_DRAWER_TOGGLED: 'PEOPLE_DRAWER_TOGGLED',
      MEMBERSHIP_EVENTS_TOGGLED: 'MEMBERSHIP_EVENTS_TOGGLED',
      NICKAVATAR_EVENTS_TOGGLED: 'NICKAVATAR_EVENTS_TOGGLED',
    },
  },
};

Object.freeze(cons);

export default cons;
