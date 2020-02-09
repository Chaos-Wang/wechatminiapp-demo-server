# 采用Wafer2快速开发组件（基于Vue.js）的小程序后端
## 部署过程
1、安装反向代理软件（如nginx,apache）
2、将/weapp移动到服务器/www或者/wwwroot下
3、cd 到/weapp下
3、执行
	node install vue
	node install
4、修改./config.js为数据库服务器
5、执行 node ./tools/initdb.js，完成链接和初始化后执行下一步
6、执行 node ./app.js
7、报错排查，不报错访问https://你的域名/weapp/login若为{"code":0,"data":{}}则部署成功
8、安装进程守护 node forever
9、forever start ./app.js即可开启服务端

文档结构
-weapp 
--controllers   api控制器，api控制函数在这里写
--image  保存在服务端的小程序图片资源，如需要加速亦可以放在cdn
--middlewares Vue.js响应中间件
--routers  路由分配
--tools tools
--app.js 程序入口