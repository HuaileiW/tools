'use strict';

const path = require('path')
const menubar = require('menubar');
const ipcMain = require('electron').ipcMain;

var opts = {
    dir: __dirname,
    icon: path.join(__dirname, 'assets', 'icon-2.png'),
    tooltip: 'Screenshot & OCR',
    // showDockIcon: true,
    width: 300,
    resizable: true,
    movable: false,
    y: 20,
};

var mb = menubar(opts);

mb.once('ready-to-show', function ready () {
    mb.on('ready-to-show', function show () {
        mb.window.webContents.send("show");
    });

    mb.on('after-hide', function show () {
        mb.window.webContents.send("after_hide");
    });

    ipcMain.on('quit', function() {
        mb.app.quit();
    });
});

mb.on('after-create-window', function() {
    if (process.env.NODE_ENV === 'production') {
        mb.window.openDevTools();
        mb.window.setResizable(false);
    }
});

