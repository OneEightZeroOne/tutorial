<?php
	require("connect.php");
	$wd = $_GET['wd'];
	$sort = $_GET['sort']==='0'?'DESC':'ASC';
	$sql = "SELECT * FROM `question` WHERE quiz LIKE '%$wd%' ORDER BY id $sort";
	$result=$conn->query($sql);
	$row = $result -> fetch_all(MYSQLI_ASSOC);
	echo json_encode($row);
	$result -> close();
	$conn -> close();
?>