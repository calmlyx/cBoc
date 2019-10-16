<template>
    <div class="oneiromancy">
        <header>
            <mt-header fixed title="周公解梦">
                <div slot="left">
                    <span @click="$router.back()">返回</span>
                </div>
            </mt-header>

            <div v-for="item in oneiromancyList" :key="item.id" class="oneiromancyList">

                <a><span class="star">&#xe603;</span>{{ item.name }}</a><br><br><br>
                <div class="detail">
                    {{ item.detail }}
                </div>
            </div>
        </header>
    </div>
</template>

<script>
    import Dreamdetail from "../Dreamdetail/index"

    export default {
        name: "Oneiromancy",
        components: {
            Dreamdetail
        },
        data() {
            return {
                oneiromancyList: []
            }
        },
        methods:{
            showDetail(id){

            }
        },
        mounted() {
            this.axios.get("https://result.eolinker.com/DFIbaf417862241a2fbdf7d753720e34d709f0e34cb5d08?uri=/api/oneiromancy").then((res) => {
                var reason = res.data.reason;
                if (reason === "successed") {
                    this.oneiromancyList = res.data.result;
                    console.log(this.oneiromancyList);

                } else {
                    alert("消息已丢失，请联系官方！！")
                }
            })
        }
    }
</script>

<style>
    header {
        width: 100%;
    }

    .oneiromancyList > a {
        display: block;
        width: 100px;
        height: 40px;
        background: lightgray;
        text-align: center;
        line-height: 40px;
        float: left;
        margin: 10px 10px;
    }
    .detail{
        width: 80%;
        margin-left: 10px;
    }
    .star{
        font-family: "iconfont";
        color: orange;
        margin-right: 10px;
    }
</style>
