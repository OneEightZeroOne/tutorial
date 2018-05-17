<?php
	$_POST['username'];
	$_POST['password'];
	if($_POST['username']=='a'&&$_POST['password']=='123'){
		echo "登录成功";
	}else{
		echo "登录失败";
	}
?>