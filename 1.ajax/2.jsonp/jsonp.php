<?php
	$arr = array(
		"name"=>"laoxie",
		"skill"=>array("ps","css","js"),
		"age"=>18,
		"name2"=>$_GET["name"],
		"skill2"=>$_GET["skill"]
	);
	echo "callback(".json_encode($arr).")";
?>