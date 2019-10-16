<template>
    <div class="home">
        <!--swipe module-->
        <mt-swipe :auto="0">
            <mt-swipe-item>
                <div class="container">
                    <div class="row">
                        <ul>
                            <li>
                                <router-link to="/text">
                                    <i class="swipeIco">&#xe77b;</i>
                                </router-link>
                                <p>笑话</p>
                            </li>
                            <li>
                                <router-link to="/oneiromancy">
                                    <i class="swipeIco">&#xe606;</i>
                                </router-link>
                                <p>周公解梦</p>
                            </li>
                            <li>
                                <router-link to="/switch">
                                    <i class="swipeIco">&#xe621;</i>
                                </router-link>
                                <p>简/繁 转换</p>
                            </li>
                            <li>
                                <router-link to="/lookup">
                                    <i class="swipeIco">&#xe61f;</i>
                                </router-link>
                                <p>号码查询</p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <router-link to="/historytoday">
                                    <i class="swipeIco">&#xe61e;</i>
                                </router-link>
                                <p>历史今天</p>
                            </li>
                            <li>
                                <router-link to="">
                                    <i class="swipeIco">&#xe61c;</i>
                                </router-link>
                                <p>身份证查询</p>
                            </li>
                            <li>
                                <router-link to="/huangli">
                                    <i class="swipeIco">&#xe70e;</i>
                                </router-link>
                                <p>老黄历</p>
                            </li>
                            <li>
                                <router-link to="/news">
                                    <i class="swipeIco">&#xe617;</i>
                                </router-link>
                                <p>新闻资讯</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </mt-swipe-item>
        </mt-swipe>
        <!--video module-->
        <div class="video">
            <h2>视频</h2>
            <div class="content">
                <div class="row">
                    <div class="contentSlip" v-for="item in videoList" :key="item.id">
                        <header>
                            <div class="headImg">
                                <img :src="item.header" alt="" width="25">
                            </div>
                            <p>{{item.name}}</p>
                        </header>
                        <div class="videoContent">
                            <div class="title">
                                <p>{{item.text}}</p>
                            </div>
                            <video :src="item.video" width="100%" height="100" style="background: #000;"></video>
                        </div>
                        <footer>
                            <i class="upAndDown">&#xe602;<span>{{item.up}}</span></i>
                            <i class="upAndDown">&#xe601;<span>{{item.down}}</span></i>
                            <i class="upAndDown">&#xe67d;<span>{{item.comment}}</span></i>
                            <i class="upAndDown">&#xe683;</i>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
        <div class="text">
            <h2>文字</h2>
            <div class="content">
                <div class="row">
                    <div class="contentSlip">
                        <header>
                            <div class="headImg">
                                <img src="../Video/images/head.jpg" alt="" width="25">
                            </div>
                            <p>大笛子</p>
                        </header>
                        <div class="videoContent">
                            <div class="title">
                                <p>大笛子带大家上。。。。</p>
                            </div>
                            <img src="./images/three.jpeg" alt="" width="100%">
                        </div>
                        <footer>
                            <i class="upAndDown">&#xe602;</i>
                            <i class="upAndDown">&#xe601;</i>
                            <i class="upAndDown">&#xe67d;</i>
                            <i class="upAndDown">&#xe683;</i>
                        </footer>
                    </div>
                    <div class="contentSlip">
                        <header>
                            <div class="headImg">
                                <img src="../Video/images/head.jpg" alt="" width="25">
                            </div>
                            <p>小疯子</p>
                        </header>
                        <div class="videoContent">
                            <div class="title">
                                <p>小疯子的一天</p>
                            </div>
                            <img src="./images/four.jpeg" alt="" width="100%">
                        </div>
                        <footer>
                            <i class="upAndDown">&#xe602;</i>
                            <i class="upAndDown">&#xe601;</i>
                            <i class="upAndDown">&#xe67d;</i>
                            <i class="upAndDown">&#xe683;</i>
                        </footer>
                    </div>
                </div>
                <div class="row">
                    <div class="contentSlip">
                        <header>
                            <div class="headImg">
                                <img src="../Video/images/head.jpg" alt="" width="25">
                            </div>
                            <p>大笛子</p>
                        </header>
                        <div class="videoContent">
                            <div class="title">
                                <p>大笛子带大家上。。。。</p>
                            </div>
                            <img src="./images/five.jpg" alt="" width="100%">
                        </div>
                        <footer>
                            <i class="upAndDown">&#xe602;</i>
                            <i class="upAndDown">&#xe601;</i>
                            <i class="upAndDown">&#xe67d;</i>
                            <i class="upAndDown">&#xe683;</i>
                        </footer>
                    </div>
                    <div class="contentSlip">
                        <header>
                            <div class="headImg">
                                <img src="../Video/images/head.jpg" alt="" width="25">
                            </div>
                            <p>小疯子</p>
                        </header>
                        <div class="videoContent">
                            <div class="title">
                                <p>小疯子的一天</p>
                            </div>
                            <img src="./images/six.jpg" alt="" width="100%">
                        </div>
                        <footer>
                            <i class="upAndDown">&#xe602;</i>
                            <i class="upAndDown">&#xe601;</i>
                            <i class="upAndDown">&#xe67d;</i>
                            <i class="upAndDown">&#xe683;</i>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {Swipe, SwipeItem} from 'mint-ui'
    import 'mint-ui/lib/style.css'

    export default {
        name: "Home",
        data(){
            return{
                videoList:[]
            }
        },
        mounted(){
            this.axios.get("https://api.apiopen.top/getJoke?page=1&count=2&type=video").then((res)=>{
                var code = res.data.code
                if(code === 200){
                    this.videoList = res.data.result;
                }else {
                    alert("消息已丢失，请联系官方！！")
                }
            })
        },
        components: {
            'mt-swipe': Swipe,
            'mt-swipe-item': SwipeItem
        },
    }
</script>

<style>
    .home {
        width: 100%;
        box-sizing: content-box;
        margin-bottom: 40px;
    }

    .mint-swipe {
        height: 200px;
        border-bottom: 1px solid;
    }

    .content {
        background: #d8d8d6;
    }

    .video h2, .text h2 {
        width: 60px;
        margin-top: 20px;
        margin-left: 20px;
        padding-bottom: 6px;
        border-bottom: 3px solid;
        margin-bottom: 10px;
    }

    .content .row {
        display: flex;
    }

    .row > .contentSlip {
        width: 45%;
        height: 210px;
        margin: 10px 10px;
        box-sizing: content-box;
        background: white;
    }

    .contentSlip header {
        display: flex;
        margin-bottom: 5px;
        padding: 5px;

    }

    .contentSlip .headImg {
        width: 25px;
        height: 25px;
        background-size: 100% 100%;
        border-radius: 50%;
        margin-right: 20px;
        border: 1px solid;
    }
   .contentSlip header>p{
        overflow: hidden; /*自动隐藏文字*/
        text-overflow: ellipsis; /*文字隐藏后添加省略号*/
        white-space: nowrap; /*强制不换行*/
        width: 100%; /*不允许出现半汉字截断*/
    }

    .videoContent .title {
        margin-bottom: 5px;
        padding-left: 5px;
    }

    .videoContent .title > p {
        overflow: hidden; /*自动隐藏文字*/
        text-overflow: ellipsis; /*文字隐藏后添加省略号*/
        white-space: nowrap; /*强制不换行*/
        width: 100%; /*不允许出现半汉字截断*/
    }

    .videoContent img {
        width: 100%;
        display: block;
        margin: 0 auto;
    }

    .contentSlip footer {
        width: 100%;
        overflow: hidden;
        padding-left: 5px;
        margin-top: 10px;
    }

    .contentSlip footer i {
        margin-top: 10px;
        margin-right: 10px;
    }

    .container {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .row > ul {
        width: 90%;
        display: inline-flex;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

    .row > ul:first-of-type > li {
        margin-top: 6%;
    }

    .row > ul:last-of-type {
        bottom: 20%;
    }

    .row > ul > li {
        width: 25%;
        height: 50px;
        text-align: center;
    }

    .row > ul > li > a {
        display: block;
        width: 50px;
        height: 50px;
        line-height: 60px;
        border-radius: 50%;
        background: lightblue;
        margin: 0 auto;
        text-align: center;
        color: #000;
        text-decoration: none;
    }
    .upAndDown {
        font-family: "iconfont" !important;
        font-size: 15px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .swipeIco {
        font-family: "iconfont" !important;
        font-size: 35px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
