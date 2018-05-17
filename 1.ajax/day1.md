# ajax

# 服务端和客户端

|前端|后端|数据库|
|-|-|-|
|JS HTML CSS|PHP|SQL|
|客户端|服务端|数据库|
|浏览器|服务器||
|Chrome浏览器|Wamp|Mysql|


# 同步和异步

|同步|异步|
|-|-|
|页面整体刷新|页面局部刷新|
|腾讯新闻|今日头条|

# 状态码

|状态码|结果|
|-|-|
|1xx|准备就绪|
|2xx|成功|
|3xx|重定向|
|4xx|客户端错误|
|5xx|服务端错误|

# get和post

|get|post|
|-|-|
|相对不安全|相对安全|
|参数在url上|参数在请求体内|
|有长度限制|没有长度限制|
|相对快|相对慢|
|文本传输|音频图片传输|

# 跨域

|出现的情况||
|-|-|
|协议|http  https  ftp(file://)|
|域名|localhost v.qq.com  x.qq.com|
|端口|80 88|


- xhr的四个步骤  1.new xhr 2.xhr.onreadystatechange(){} 3.open(x,x,x) 4.send()

- readyState的五个状态

- status状态码  1xx 2xx成功 3xx重定向 4xx客户端错误 5xx服务端的错误

- 同域和跨域  协议，域名，端口

- 跨域解决方案 jsonp，cors和反向代理  必须跟后端协调

- json和xml的区别   <id>1111</id>

- json的数据处理

- 反向代理的原理