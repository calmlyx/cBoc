<template>
    <div class="home">
        <!--swipe module-->
        <table>
            <tr>
                <td class="borderLeft borderTop">
                    <router-link to="/text">
                        <i class="swipeIco">&#xe77b;</i>
                    </router-link>
                    <p>笑话</p>
                </td>
                <td class="borderTop">
                    <router-link to="/oneiromancy">
                        <i class="swipeIco">&#xe606;</i>
                    </router-link>
                    <p>周公解梦</p>
                </td>
                <td class="borderTop borderRight">
                    <router-link to="/switch">
                        <i class="swipeIco">&#xe621;</i>
                    </router-link>
                    <p>简/繁 转换</p>
                </td>
            </tr>
            <tr>
                <td class="borderLeft">
                    <router-link to="/lookup">
                        <i class="swipeIco">&#xe61f;</i>
                    </router-link>
                    <p>号码查询</p>
                </td>
                <td>
                    <router-link to="/historytoday">
                        <i class="swipeIco">&#xe61e;</i>
                    </router-link>
                    <p>历史今天</p>
                </td>
                <td class="borderRight">
                    <router-link to="">
                        <i class="swipeIco">&#xe61c;</i>
                    </router-link>
                    <p>身份证查询</p>
                </td>
            </tr>
            <tr>
                <td class="borderLeft borderBottom">
                    <router-link to="/huangli">
                        <i class="swipeIco">&#xe70e;</i>
                    </router-link>
                    <p>老黄历</p>
                </td>
                <td class="borderBottom">
                    <router-link to="/news">
                        <i class="swipeIco">&#xe617;</i>
                    </router-link>
                    <p>新闻资讯</p>
                </td>
                <td class="borderRight borderBottom"> </td>
            </tr>
        </table>
    </div>
</template>

<script>
    import {Swipe, SwipeItem} from 'mint-ui'
    import 'mint-ui/lib/style.css'

    export default {
        name: "Home",
        data() {
            return {
                videoList: []
            }
        },
        mounted() {
            this.axios.get("https://api.apiopen.top/getJoke?page=1&count=2&type=video").then((res) => {
                var code = res.data.code
                if (code === 200) {
                    this.videoList = res.data.result;
                } else {
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
        background: url("images/homeBcg.jpg");
        background-size: 100% 100%;
    }

    .home > table {
        width: 100%;
        height: 450px;
        margin: 10px 0;
    }
    .home > table td {
        width: 300px;
        text-align: center;
        background: rgba(255,255,255,0.5);
        border: 1px solid white;
    }
    .leftTd{
        border-left: none;
    }
    .home > table td a{
        color: black;
    }
    .home > table td p{
        margin: 5px 0;
    }
    .swipeIco {
        font-family: "iconfont" !important;
        font-size: 35px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .borderLeft{
        border-left: none !important;
    }
    .borderRight{
        border-right: none !important;
    }
    .borderTop{
        border-top: none !important;
    }
    .borderBottom{
        border-bottom: none !important;
    }
</style>
