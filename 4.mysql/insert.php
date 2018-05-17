<?php
require ("connect.php");
$id = $_GET["id"];
$name = $_GET["name"];
$age = $_GET["age"];
$school = $_GET["school"];

$sql = "INSERT INTO `gz1802`(`id`, `name`, `age`, `school`) VALUES ($id,'$name','$age','$school')";
//执行sql语句,查询结果
$conn -> query($sql);

// 关闭数据库，避免资源浪费
$conn -> close();
?>