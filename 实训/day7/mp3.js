var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
request('http://www.kugou.com/yy/singer/home/3060.html', function(error, response, body) {
	//console.log(body)
	var $ = cheerio.load(body);
	var arr = $('.song_hid');
	//console.log(arr);
	var music = [];
	for(var num = 0; num < arr.length; num = num + 1) {
		music.push($(arr[num]).attr("value"))
	}
	console.log(music);
	var offset = 0;
	download(music, offset)

	/*for(var num = 0; num < arr.length; num = num + 1) {
		console.log($(arr[num]).attr("value"));
		//计算字符串的长度
		console.log($(arr[num]).attr("value").length);
		var length = $(arr[num]).attr("value").length;
		//找出第一个|的位置在哪里
		console.log($(arr[num]).attr("value").indexOf("|"));
		var index = $(arr[num]).attr("value").indexOf("|");
		console.log($(arr[num]).attr("value").substring(index + 1, length - 7))
		var hash = $(arr[num]).attr("value").substring(index + 1, length - 7);
		request('http://www.kugou.com/yy/index.php?r=play/getdata&hash=' + hash, function(error, response, body) {
			console.log(JSON.parse(body).data.play_url);
			var mp3 = JSON.parse(body).data.play_url;
			var audio_name = JSON.parse(body).data.audio_name;
			request(mp3).pipe(fs.createWriteStream(audio_name + '.mp3'));
		});
	}*/
})

function download(music, offset) {
	if(music.length > offset) {
		var length = music[offset].length;
		console.log(length);
		var index = music[offset].indexOf("|");
		console.log(index);
		//var hash = music[offset].substring(index + 1, length - 7);
		var hash = music[offset].split("|")[1];
		request('http://www.kugou.com/yy/index.php?r=play/getdata&hash=' + hash, function(error, response, body) {
			console.log(JSON.parse(body).data.play_url);
			var mp3 = JSON.parse(body).data.play_url;
			var audio_name = JSON.parse(body).data.audio_name;
			request(mp3).pipe(fs.createWriteStream(audio_name + '.mp3'));
			download(music, offset+1);
		});
	}else{
		return 1;
	}
}