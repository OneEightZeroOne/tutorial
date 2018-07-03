const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const ipcMain = electron.ipcMain

const path = require('path')
const url = require('url')
const querystring = require('querystring')
const http = require('http')

let mainWindow;

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600
	})

	ipcMain.on("answer", function(event, data) {});

	mainWindow.loadURL("https://wx2.qq.com");
	mainWindow.webContents.executeJavaScript(`
		require("electron").ipcRenderer.send("answer","123");
	`);
	//mainWindow.webContents.openDevTools()
	mainWindow.on('closed', function() {
		mainWindow = null
	})
}
app.on('ready', createWindow)
app.on('window-all-closed', function() {
	if(process.platform !== 'darwin') {
		app.quit()
	}
})
app.on('activate', function() {
	if(mainWindow === null) {
		createWindow()
	}
})