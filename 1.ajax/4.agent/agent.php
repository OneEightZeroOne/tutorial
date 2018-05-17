<?php
//我先自己写服务器访问别人的服务器(代理别人的服务器)，然后自己再访问自己写的服务器，从而完成跨域
$url = "https://www.baidu.com";
//反向代理
$res = file_get_contents($url);
echo $res;
?>