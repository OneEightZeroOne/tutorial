<?php
require ("connect.php");
$page = $_GET["page"] - 1;
$length = $_GET["length"];
$index = $page*$length;
//10*1 10
//10*2 10
//10*3 10
$sql = "SELECT * FROM `question` LIMIT $index,$length";
$result = $conn -> query($sql);
$row = $result -> fetch_all(MYSQLI_ASSOC);
echo json_encode($row);
$result -> close();
$conn -> close();
?>