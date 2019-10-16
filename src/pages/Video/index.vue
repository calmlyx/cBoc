<template>
    <div class="MusicTemplate">
        <!--https://api.apiopen.top/searchMusic?name=aini-->
        <div class="MusicSearch">
            <div class="controlSearch">
                <input type="text" name="music" id="music" value="" placeholder="请输入歌名">
                <p @click="goSearch()" class="searchIco">&#xe82a;</p>
            </div>
        </div>
        <div class="musicList">
            <div class="musicSon">
                <div class="musicDetail" v-for="item in musicList" :key="item.songid">
                    <div class="musicDetailSon">
                        <div class="img">
                            <img :src="item.pic" alt="" width="50">
                        </div>
                        <div class="musicR">
                            <h4>{{item.title}}</h4>
                            <p class="author">{{item.author}}</p>
                        </div>
                    </div>
                    <audio :src="item.url" controls="controls">
                        您的浏览器不支持 audio 标签。
                    </audio>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Video",
        data() {
            return {
                musicList: [],
            }
        },
        methods: {
            goSearch() {
                var val = document.getElementById("music").value;
                console.log(val);
                this.axios.get("https://api.apiopen.top/searchMusic?name=" + val).then((res) => {
                    var code = res.data.code;
                    if (code === 200) {
                        this.musicList = res.data.result;
                        console.log(res.data.result)
                    } else {
                        alert("消息已丢失，请联系官方！！")
                    }
                })
            }
        },
    }
</script>

<style>
    .MusicTemplate {
        width: 100%;
        height: 80vh;
        background: url("../Home/images/homeBcg.jpg");
        background-size: 100% 100%;
        margin-bottom: 30px;
    }

    .MusicSearch {
        width: 100%;
        height: 80px;
        background: white;
        position: fixed;
        z-index: 100;
    }

    .controlSearch {
        width: 100%;
        display: flex;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);

    }

    .controlSearch > input {
        flex: 8;
        height: 35px;
        border: 1px solid;
        border-right: none;
        box-sizing: border-box;
        text-indent: 10px;
        font-size: 15px;
        outline: none;
        background: white;
    }

    .controlSearch > p {
        flex: 2;
        width: 100px;
        margin: 0 auto;
        height: 35px;
        border-radius: 0;
        font-size: 15px;
        background: deepskyblue;
        text-align: center;
        line-height: 35px;
    }

    .musicSon {
        margin: 20px 0;
    }

    .musicList {
        padding: 10px;
        margin-top: 50px;

    }

    .musicDetail {
        margin: 25px 0;
        background: #f1f3f4;
    }

    .musicDetailSon {
        display: flex;
    }

    .musicDetailSon > .img {
        flex: 3;
        text-align: center;
    }

    .musicDetailSon > .musicR {
        flex: 7;
    }

    .musicR > h4, p {
        margin-left: 10px;
    }

    audio {
        width: 100%;
        height: 20px;
    }

    .searchIco {
        font-family: "iconfont" !important;
        color: white;
    }
</style>
