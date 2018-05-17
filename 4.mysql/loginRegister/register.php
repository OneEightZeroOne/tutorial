<?php
//连接数据库
require("connect.php");
$username = $_POST['username'];
$password = $_POST['password'];

$sql = "SELECT * FROM `stu` WHERE username = '$username'";

//执行sql语句,查询结果
$result = $conn -> query($sql);
$row = $result -> fetch_all(MYSQLI_ASSOC);
if($row){
	echo "此用户已存在";
}else{
	$sql = "INSERT INTO `stu`(`username`, `password`) VALUES ('$username','$password')";
	$conn -> query($sql);
	echo "注册成功";
}
$conn -> close();
// 关闭数据库，避免资源浪费

?>