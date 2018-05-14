// electron
window.electron = require('electron');
window.remote = electron.remote;
window.BrowserWindow = remote.BrowserWindow;

const localmodules = remote.getGlobal('localmodules');
window.appman = require(localmodules.appman);