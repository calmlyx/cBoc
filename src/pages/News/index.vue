<template>
    <div class="news">
        <mt-header fixed title="新闻资讯">
            <div slot="left">
                <span @click="$router.back()">返回</span>
            </div>
        </mt-header>
        <div class="newsAll">
            <div class="newList" v-for="item in newList" :key="item.docid">
                <a :href="item.link" class="link">
                    <h3 class="title">{{item.title}}</h3>
                </a>
                <p class="digest">{{item.digest}}.....</p>
                <div class="timeApush">
                    <p class="source"><i>{{item.source}}</i></p>
                    <p class="ptime"><i>{{item.ptime}}</i></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "News",
        data() {
            return {
                newList: [],
                picList:[]
            }
        },
        mounted() {
            this.axios.get("https://www.apiopen.top/journalismApi").then((res) => {
                var code = res.data.code
                console.log(code);
                if (code === 200) {
                    this.newList = res.data.data.tech;
                    this.picList = res.data.data.tech.picInfo;
                }
            })
        }
    }
</script>

<style>
    .news{
        background: url("../Oneiromancy/images/otherBcg.png");
        background-size: 100% 100%;
    }
    .newList {
        background: rgba(255,255,255,0.7);
        margin: 20px auto;
        width: 95%;

    }
    .newList>img{
        width: 200px;
        display: block;
        margin: 10px auto;
    }
    .newList>a{
        text-decoration:underline;
        color: #000;
    }
    .timeApush{
        width: 95%;
        padding: 20px 0;
        color: gray;
    }
    .source{
        float: left;
    }
    .ptime{
        float: right;
    }
    .digest,.title{
        width: 96%;
        margin: 10px auto;
    }
</style>
