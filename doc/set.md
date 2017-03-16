# 发布模块


## 设置
```
npm config set registry http://registry.cnpmjs.org
```

## 命令
添加用户
````
npm adduser
````

登录
```
# 登录
npm login

# 校验登录
npm who an i
yanxxit
```

提交到npm
```
npm publish
```

## 出现问题
```
npm ERR! publish Failed PUT 403
no_perms Private mode enable, only admin can publish this module: reskit
you do not have permission to publish "reskit". Are you logged in as the correct user? : reskit
```
解决方案：
```
npm config set registry http://registry.cnpmjs.org
```