# 上传代码

1. 让本地仓库转git仓库  如果有.git后缀的隐藏文件，那就已经是git仓库，那就不需要执行git init
```
git init
```

2. 本地增删查改


3. 把文件添加到缓存区

```
git add [xxx文件名字]
```
全部添加到缓存区
```
git add .
```

4. 查看文件的状态

```
git status
```
清除缓存区指定文件
```
git rm --cached [xxx文件名]
```

5. 提交文字描述，描述本次操作的内容

```
git commit -m "提交的内容"
```

6. 建立本地跟远程端的连接（ssh和https）

```
git remote add origin [xxx远程服务器的连接]
```

7. 把缓存区的代码上传到服务器上

```
git push origin master
```


# 下载代码

```
git clone [远程服务器端的地址]
```

# 更新代码

```
git pull origin master
```