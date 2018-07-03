var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
//利用request应用，来请求http://www.umei.cc/tags/shaonv.htm的信息
request('http://www.umei.cc/tags/shaonv.htm', function(error, response, body) {
	//console.log('error:', error); // Print the error if one occurred
	//console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	//console.log('body:', body); // Print the HTML for the Google homepage.
	//就是把网页交给cheerio的$模块处理  const->constant
	var $ = cheerio.load(body);
	//var arr = $("img");
	var arr = $(".ListTit")
	//console.log(arr);
	for(var num = 0; num < arr.length; num = num + 1) {
		//attribute属性
		console.log($(arr[num]).text());
		//request($(arr[num]).attr("src")).pipe(fs.createWriteStream(num + '.jpg'))
	}
});