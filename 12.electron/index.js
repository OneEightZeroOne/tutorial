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
		width: 1000,
		height: 800
	})

	ipcMain.on("answer", function(event, data) {
		console.log(data)
	});
	mainWindow.loadURL("https://www.baidu.com");
	/*mainWindow.loadURL(url.format({
		//pathname: path.join(__dirname, 'index.html'),
		pathname: "https://www.baidu.com",
		protocol: 'https:',
		slashes: true
	}))*/
	mainWindow.webContents.executeJavaScript(`
		console.log("123")
		console.log(location)
		require("electron").ipcRenderer.send("answer","123");
	`);
	mainWindow.webContents.openDevTools();
	mainWindow.on('dom-ready', function() {
		mainWindow.webContents.executeJavaScript(`
		console.log("did-finish-load")
		console.log(location)
		require("electron").ipcRenderer.send("answer","123");
	`)
	})
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