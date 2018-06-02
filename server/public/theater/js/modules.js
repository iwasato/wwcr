// electron
window.electron = require('electron');
window.remote = electron.remote;
window.BrowserWindow = remote.BrowserWindow;
window._eprocess = process;

const localmodules = remote.getGlobal('localmodules');
window.appman = require(localmodules.appman);
window.Bridge = require(localmodules.bridge);
window.mouseevent = require(localmodules.mouseevent);
window.keyevent = require(localmodules.keyevent);

window.localdocument = remote.getGlobal('localdocument');
window.initConfig = remote.getGlobal('config');