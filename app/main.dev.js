'use strict';

const path = require('path')
const menubar = require('menubar');
const ipcMain = require('electron').ipcMain;

var opts = {
    dir: __dirname,
    icon: path.join(__dirname, 'assets', 'icon-2.png'),
    tooltip: 'Screenshot & OCR',
    showDockIcon: true,
    width: 300,
};

var mb = menubar(opts);

mb.on('ready', function ready () {
    mb.on('show', function show () {
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

