const proxy=require('http-proxy-middleware')
module.exports = function(app) {
    app.use(
        proxy('/api1',{//遇见/api1前缀的触发改配置代理
            target:'http://localhost:5000',//请求发送给端口
            changeOrigin:true,//控制服务器请求头中Host的值
            pathRewrite:{'^/api1':''}//重写请求路径(必须（将向服务器请求的路径中的/api1改为空）)
        }),
        proxy('/api2',{
            target:'http://localhost:5001',
            changeOrigin:true,
            pathRewrite:{'^/api2':''}
        })
    )
}