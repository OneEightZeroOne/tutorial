<?php
	$arr = array(
		"name"=>"laoxie",
		"skill"=>array("ps","css","js"),
		"age"=>18
	);
	echo 'json_cb('.json_encode($arr).')';
?>