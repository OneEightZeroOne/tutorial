/*console.log("abc");
console.log(location);

window.onload = function () {
    var webview = document.getElementById("foo");
    webview.addEventListener("dom-ready", function () {
        require("electron").ipcRenderer.send("answer","456");
        webview.openDevTools();
        //console.log(webview.getURL())
        webview.executeJavaScript(`
        	console.log(location);
            console.log(11111)
            //console.log(document.getElementById("js-pjax-loader-bar"))
            //window.postMessage("message")
            //var ipcRenderer = require('electron').ipcRenderer
            //ipcRenderer.on('ping', function(){
            //  ipcRenderer.sendToHost('pong')
            //})
        `)
        webview.insertCSS(`
            #js-flash-container{background-color: green}
        `)
        // 返回和这个webview相关的WebContents
        //console.log(webview.getWebContents())
    });
    webview.addEventListener('will-navigate', function (e) {
        console.log("重定向")
    });
    // webview.addEventListener('ipc-message', (event) => {
    //   console.log(event.channel)
    //   // Prints "pong"
    // })
    // webview.send('ping')
}
// window.addEventListener("message", function(data){
//     console.log(data)
// }, false);*/