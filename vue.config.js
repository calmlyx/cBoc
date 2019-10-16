module.exports = {
    publicPath:"/" ,
    devServer: {
        proxy: {
            "/api/history": {
                target: "http://api.juheapi.com/japi/toh",
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    "/api/history": ""
                },
                logLevel: 'debug',
            },
            "/api":{
                target:"http://v.juhe.cn/joke/content/list.php",
                changeOrigin: true,
                pathRewrite:{
                    "/api":""
                },
                logLevel: 'debug',
            },
        }
    }
};
