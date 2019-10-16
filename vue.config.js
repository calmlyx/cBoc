module.exports = {
    devServer:{
        proxy: {
            "/api":{
                target:"http://v.juhe.cn/joke/content/list.php",
                changeOrigin: true,
                pathRewrite:{
                    "/api":""
                }
            },
            "/api/history":{
                target:"http://api.juheapi.com/japi/toh",
                changeOrigin: true,
                pathRewrite:{
                    "/api/history":""
                }
            },
        }
    }
};
