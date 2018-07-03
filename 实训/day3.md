# JS

html就是一张脸

css就是化妆

js就是脸能动作

# 变量

关键词  variable变量
```
var  变量的名字(自己取的) = 你需要给变量提供的数值 
```
var number1 = 1//让1赋值给number1

# 数值

```js
var number1 = 1
```

# 字符串

```js
var str1 = "你好"
var str2 = '你好'
```

# 布尔值

```js
var bool1 = true
var bool2 = false
```

# 数组

矩阵
```js
var array = [1,2,3,'a',true]
var array = [[1,2,3,'a',true],2,3,'a',true]
array[1]//获取数组的值，下标值是以0作为开始
array[0][0]//二维数组
```


# 对象

```js
var obj = {
    name: 'ly',
    age: 18
}
obj.name
```

# 选择器

document-->html文档
```
document.querySelector("标签的名字/类的名字/id的名字")
//更改标签之间的值
document.querySelector().innerHTML = "需要更改的值"
document.querySelector().style.color = ""
```
id选择器 用#
class选择器 用.
属性选择器

```js
<!-- docuemnt.querySelector("#div1") -->
<div id="div1" style="color:red">你好</div>
<!-- docuemnt.querySelector("#div2") -->
<div id="div2" style="color:red">你好</div>
<!-- docuemnt.querySelector(".inputClass") -->
<input class="inputClass" />
docuemnt.querySelector("[属性=属性值]")
document.querySelector("父").querySelector("子").querySelector("子")
```

选择完节点之后
```js
docuemnt.querySelector("").style.xxx = "改样式"
docuemnt.querySelector("").click()//触发按钮的点击
docuemnt.querySelector("").value = "xxx"//获取输入框的值，或者更改输入框的值
docuemnt.querySelector("").innerHTML = "xxx"//更改标签之间的值
//监听
document.querySelector("").onclick = function(){
	console.log(1)
}
//触发
docuemnt.querySelector("").click()
···

# 运行JS脚本

1.用script标签把JS代码包起来，放到html页面的<body>标签里面
```
<script>
	var a = 1;
	var b = 2;
	var c = 3;
</script>
```
2. 打开浏览器控制台

然后在控制台里面运行这个代码

# 定时器和延时器

setTimeout触发无数次
setTimeout触发一次
```js
setInterval(function(){},1000)
setTimeout(function(){},1000)
```