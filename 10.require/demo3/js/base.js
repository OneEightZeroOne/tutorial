require.config({
	baseUrl: "js",
	paths: {
		'jquery': 'jquery-3.3.1',
		//帮助你引入css和html
		'text': 'text',
		//一个组件 一个模块
		'bsheader': '../extends/bsheader/bsheader',
		'bsmain': '../extends/bsmain/bsmain',
		'bsfooter': '../extends/bsfooter/bsfooter'
	}
})

require(['jquery', 'text', 'bsheader', 'bsmain', 'bsfooter'], function($, text, bsheader, bsmain, bsfooter) {
	$("bsheader").bsheader();
	console.log($("bsmain"));
	$("bsmain").bsmain();
	$("bsfooter").bsfooter();
})