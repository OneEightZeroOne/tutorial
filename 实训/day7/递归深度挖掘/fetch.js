var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
//第一个页面
request('http://www.kugou.com/yy/html/singer.html', function(error, response, body) {
	var $ = cheerio.load(body);
	//console.log(body);
	var arr = $(".pic");
	var href = [];
	for(var num = 0; num < arr.length; num = num + 1) {
		href.push($(arr[num]).attr("href"));
	}
	console.log(href);
	var offset1 = 0;
	getSinger(href, offset1);
})

function getSinger(href, offset1) {
	var length = href.length;
	if(length > offset1) {
		//第二个页面
		request(href[offset1], function(error, response, body) {
			//console.log(body)
			var $ = cheerio.load(body);
			var arr = $('.song_hid');
			//console.log(arr);
			var music = [];
			for(var num = 0; num < arr.length; num = num + 1) {
				music.push($(arr[num]).attr("value"))
			}
			console.log(music);
			var offset2 = 0;
			download(music, offset2)
		})

	} else {
		//结束
		return 1;
	}
}

function download(music, offset2) {
	if(music.length > offset2) {
		var hash = music[offset2].split("|")[1];
		console.log(music, offset2, hash);
		request('http://www.kugou.com/yy/index.php?r=play/getdata&hash=' + hash, function(error, response, body) {
			console.log(JSON.parse(body).data.play_url);
			var mp3 = JSON.parse(body).data.play_url;
			if(mp3.length != 0) {
				var audio_name = JSON.parse(body).data.audio_name;
				request(mp3).pipe(fs.createWriteStream(audio_name + '.mp3'));
			}
			download(music, offset2 + 1);
		});
	} else {
		return 1;
	}
}