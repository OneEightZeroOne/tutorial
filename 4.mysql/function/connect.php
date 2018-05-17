<?php
$con = mysql_connect("localhost", "lemon", "123");
mysql_select_db("gz1802", $con);
$sql = "SELECT * FROM stu";
$result = mysql_query($sql, $con);
$arr = mysql_fetch_array($result);
var_dump($arr);
?>