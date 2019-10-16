<template>
    <div class="videoTemplate">
        <div class="container" v-for="item in videoList" :key="item.id">
            <div class="row videoRow">
                <header>
                    <p>
                        <img :src="item.header" alt="deng" width="50">
                    </p>
                    <p>{{item.username}}</p>
                </header>
                <p style="margin: 5px 0;">{{item.text}}</p>
                <main>
                    <video :src="item.video"  controls="controls"></video>
                </main>
                <footer>
                    <i class="VupAndDown">&#xe602;<span>{{item.up}}</span></i>
                    <i class="VupAndDown">&#xe601;<span>{{item.down}}</span></i>
                    <i class="VupAndDown">&#xe67d;<span>{{item.comment}}</span></i>
                    <i class="VupAndDown">&#xe683;</i>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Video",
        data(){
            return{
                videoList:[]
            }
        },
        mounted(){
            this.axios.get("https://www.apiopen.top/satinGodApi?type=1&page=1").then((res)=>{
                var code = res.data.code
                if(code === 200){
                    this.videoList = res.data.data;
                }else {
                    alert("消息已丢失，请联系官方！！")
                }
            })
        },
    }
</script>

<style>
    .VupAndDown{
        font-family: "iconfont" !important;
        font-size: 25px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .videoTemplate{
        background: #d8d8d6;
    }
    .videoRow{
        width: 100%;
        /*height: 305px;*/
        background: white;
        margin: 20px 0;
    }
    .videoRow>header{
        width: 100%;
        height: 70px;
        position: relative;
    }
    .videoRow>header>p{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
    .videoRow>header>p:first-of-type{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        left: 5%;
        background-size: 100% 100%;
    }
    .videoRow>header>p:last-of-type{
        width: 180px;
        height: 50px;
        left: 22%;
        line-height: 50px;
    }
    .videoRow>main{
        width: 100%;
        height: 175px;
        background: black;
    }
    .videoRow>main>video{
        width: 100%;
        height: 100%;
    }
    .videoRow>footer{
        width: 100%;
        height: 45px;
    }
    .videoRow>footer>i{
        line-height: 70px;
        margin-right: 50px;
    }
    .videoRow>footer span{
        font-size: 15px;
    }
    .videoRow:last-of-type{
        margin-bottom: 80px;
    }
</style>
