# 制作网页

> 显示后缀

1. 文件夹上面的工具栏里面的（工具）选项
2. 文件夹选项查看
3. 隐藏已知文件夹后缀，不选它，确定

新建一个`xxx.html`页面，在html文档第一句写上这一句话
```
<!DOCTYPE html>
```
> ctrl+s 保存

表示该文件为html类型的代码文件，写上这一句之后，后面紧跟着html代码

# 常用的标签

所有的网页，在浏览器看到的，都是由html标签组合而成的

## hx标签

语义化标签<aaa>xxx</aaa>
```html
<h1>xxxxxx</h1>
<h2>xxxxxx</h2>
<h3>xxxxxx</h3>
<h4>xxxxxx</h4>
<h5>xxxxxx</h5>
```

## head body

```html
<!DOCTYPE html>
<head>
	<title>这是一个展示老姚的页面</title>	
</head>
<body>
	<h1>老姚很帅</h1>
	<h2>老姚很帅</h2>
	<h3>老姚很帅</h3>
	<h4>老姚很帅</h4>
	<h5>老姚很帅</h5>
</body>
```

## p

输入文字的标签，是可以并列多个
```html
<p>文字</p>
<p>文字</p>
<p>文字</p>
```html

## hr

分割文档的下划线

自闭合
```html
<p>文字</p>
<hr />
<p>文字</p>
```

# meta

放在头部
```html
<!--设置页面显示的编码格式-->
<meta charset="utf-8" />
```

# 注释

```html
<!-- xxxxx注释的内容 -->
```

# br

换行标签
```html
<br />
```

# img

显示图片的标签 是用一个src
img公式
src参数
img + src = 页面图片效果
```html
<img src="图片的地址" />
```

# a

跳转地址
```html
<a href="链接的地址"></a>
```

# b,u,i,s

```
<p>文字</p>
<b>加粗</b>
<u>下划线</u>
<i>斜体</i>
<s>删除线</s>
```

# video audio

```html
<video src="chrome插件开发.wmv"></video>
<audio controls="controls" src="大千世界.mp3"></audio>
```

# ul li

li是嵌套在ul里面的,li允许有多列
```html
<ul>
<li>每一列</li>
<li>每一列</li>
<li>每一列</li>
</ul>
```

# table tr th

```html
<table>
	<tr>
		<th>姓名</th>
		<th>属性</th>
	</tr>
</table>
```

# div

块级标签
```html
<div>一块</div>
```

# header footer