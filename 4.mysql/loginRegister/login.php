<?php
//连接数据库
require("connect.php");
$username = $_POST['username'];
$password = $_POST['password'];

$sql = "SELECT * FROM `stu` WHERE username = '$username'";

//执行sql语句,查询结果
$result = $conn -> query($sql);
$row = $result -> fetch_all(MYSQLI_ASSOC);

if($row[0]['password']===$password){
	echo "登录成功";
}else{
	echo "用户名和密码错误";
}
$conn -> close();
// 关闭数据库，避免资源浪费

?>