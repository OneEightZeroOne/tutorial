//入口的配置文件
requirejs.config({
	baseUrl: "js",
	paths: {
		//A同学
		"jquery": "jquery-3.3.1",
		//B同学
		"tool":"../lib/tool"
	}
});

//全局环境
require(["jquery","tool"],function($,tool){
	console.log($);
	console.log(tool.plus(9,8));
	//alert(123);
})
