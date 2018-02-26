// electron
window.electron = require('electron');
window.remote = electron.remote;
window.BrowserWindow = remote.BrowserWindow;

const localmodules = remote.getGlobal('localmodules');
window.appman = require(localmodules.appman);
window.Bridge = require(localmodules.bridge);
window.mouseevent = require(localmodules.mouseevent);

window.localdocument = remote.getGlobal('localdocument');
window.initConfig = remote.getGlobal('config');