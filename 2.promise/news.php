<?php
	$arr = array(
		array(
			"id"=>1,
			"title"=>"第一条新闻",
			"description"=>"安徽省道具卡山东航空"
		),
		array(
			"id"=>2,
			"title"=>"第二条新闻",
			"description"=>"回调啊阿斯达"
		),
		array(
			"id"=>3,
			"title"=>"第三条新闻",
			"description"=>"按时打卡上的本基金"
		)
	);
	echo json_encode($arr);
?>