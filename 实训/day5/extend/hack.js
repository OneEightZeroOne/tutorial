//图灵机器人的公式
/*function loadXMLDoc(url) {
	var xmlhttp;
	// code for IE7+, Firefox, Chrome, Opera, Safari
	xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			//xmlhttp.responseText文件返回的内容
			console.log(JSON.parse(xmlhttp.responseText).text);
			document.querySelector("p").innerHTML = xmlhttp.responseText).text;
		}
	}
	//打开这个方法
	xmlhttp.open("GET", url, true);
	//发送请求
	xmlhttp.send();
}
//触发公式
loadXMLDoc("http://www.tuling123.com/openapi/api?key=c75ba576f50ddaa5fd2a87615d144ecf&info=" + input)*/
//创建canvas标签
var canvas = document.createElement("canvas");
canvas.id = "myCanvas";
canvas.width = "2000";
canvas.height = "1000";
canvas.style.position = "absolute"
canvas.style.top = "0"
canvas.style.left = "0"

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);
//取出画笔
var context = canvas.getContext("2d");

function makeCicle(x, y) {
	this.x = x;
	this.y = y;
	this.yVal = -5;
	this.gravity = 0.1;
	this.xVal = Math.random() * 4 - 2;
	this.update = function() {
		this.x = this.x + this.xVal;
		this.y = this.y + this.yVal;
		this.yVal = this.yVal + this.gravity;
		context.beginPath();
		//告诉画笔，要画一个圆 圆心、半径、起始角度、最终角度、正/反向
		context.arc(this.x, this.y, 5, 0, Math.PI * 2, false);
		//结束路径
		context.closePath();
		context.fillStyle = "#" + Math.floor(Math.random() * 16777215).toString(16);
		//填充颜色
		context.fill();
	}
}
var cicles = [];
setInterval(function() {
	//每次清空画布
	context.clearRect(0, 0, canvas.width, canvas.height);
	var part = new makeCicle(xx, yy);
	cicles.push(part);
	for(var i = 0; i < cicles.length; i++) {
		//更新粒子的位置
		cicles[i].update();
	}
}, 30)

var xx = window.innerWidth / 2;
var yy = window.innerHeight / 2;
canvas.onmousemove = function(ev) {
	xx = ev.clientX;
	yy = ev.clientY;
}