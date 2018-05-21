<?php
$servername = "qdm171689243.my3w.com";
$username = "qdm171689243";
$password = "81886035";
//要操作的数据库

$con = mysql_connect($servername, $username, $password);
$db_selected = mysql_select_db("qdm171689243_db", $con);
$sql = "SELECT * FROM stu";
$result = mysql_query($sql, $con);
print_r(mysql_fetch_array($result));

if (!$con) {
	die('Could not connect: ' . mysql_error());
} else {
	echo "success";
}

// 一些代码...

mysql_close($con);
?>