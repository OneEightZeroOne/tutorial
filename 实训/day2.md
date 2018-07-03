# css

帮助修饰页面的一种解析语言

```html
<div style="属性:属性值">内容</div>
```


## 背景

background-color:背景色;
```css
background-color:red;
background-color:blue;
background-color:yellow;
background-color:green;
background-color:#f3eaea

background-image:url(xxxx.jpg);
background-size:xxx
```

## 颜色

```css
color:xxx
```

## 字体

```css
font-size: 20px;font-family: '微软雅黑';
```

## 长和宽

用**px**单位来表示
```
width:xxxpx;//100px,100%
height:xxxpx;//100px,100%
line-height:xxxpx;//垂直居中
text-align: center//水平居中
```

## 内边距 外边距

```
margin:xxxpx;//外边距
border:xxxpx;//边框
padding:xxxpx//内边距
```


# 样式的引入

1.利用style属性值
```html
<div style="属性:属性值">内容</div>
```

2.利用link引入外部文件
```css
<link rel="stylesheet" href="index.css" />
```

3.利用style标签
```
<style>
	.textStyle {
		color: red;
		background-color: blue;
		width: 100px;
		height: 100px;
	}
</style>
```


# 引入样式

|作用|技术|
|-|-|
|引入人家写好的样式（weui.css,animate.css），我们自己可以在原基础上更改|css|
|搬运html标签过来|html|
|动作 动画 页面的效果|js|