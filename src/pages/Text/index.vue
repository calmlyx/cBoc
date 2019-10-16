<template>
    <div class="textTemplate">
        <div class="container">
            <div class="row TextRow" v-for="item in textList" :key="item.hashId">
                <header>
                    <p>{{item.content}}</p>
                </header>
                <hr>
                <footer>
                    <i class="VupAndDown">&#xe602;</i>
                    <i class="VupAndDown">&#xe601;</i>
                    <i class="VupAndDown">&#xe683;</i>
                    <span class="is-right">{{item.updatetime}}</span>
                </footer>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        data(){
          return{
              textList:[]
          }
        },
        mounted() {
            this.axios.get("/api?key=d730f0adbba0e9441384bb5fd502dc80&page=2&pagesize=10&sort=asc&time=1418745237").then((res)=>{
                var reason = res.data.reason
                if(reason === "Success"){
                    this.textList = res.data.result.data;
                }else {
                    alert("消息已丢失，请联系官方！！")
                }
            })
        }
    }
</script>

<style>
    .textTemplate {
        background: #d8d8d6;
    }

    .is-right{
        float: right;
        color: gray;
        margin-right: 20px;
    }
    .TextRow {
        background: #fff;
        margin: 10px 0;
        line-height: 30px;
    }
    .TextRow:last-of-type{
        margin-bottom: 60px;
    }
    .TextRow p {
        text-indent: 26px;
    }

    .TextRow footer {
        height: 40px;
        line-height: 40px;
    }
    .TextRow footer i{
        margin-right: 20px;
    }
</style>
