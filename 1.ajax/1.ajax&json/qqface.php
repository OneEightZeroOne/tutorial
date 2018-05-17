<?php
	
	$url = "https://v.qq.com/json/barragelist/qqface.json";
	//反向代理
	$res = file_get_contents($url);
	echo $res;
?>