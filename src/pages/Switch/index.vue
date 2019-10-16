<template>
    <div class="switch">
        <mt-header fixed title="简/繁转换">
            <div slot="left">
                <span @click="$router.back()">返回</span>
            </div>
        </mt-header>
        <div class="switchAll">
            <form action="#">
                <div class="inputGroup">
                    <label>简体：</label><input type="text" placeholder="请输入字体">
                    <br>
                    <button><span class="switchIco">&#xe604;</span></button>
                    <br>
                    <label>繁体：</label><input type="text">
                </div>
                <input type="submit" value="转换">
            </form>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
    .switch{
        height: 80vh;
        background: url("../Oneiromancy/images/otherBcg.png");
        background-size: 100% 100%;
    }
    .switchAll{
        margin: 100px auto;
        position: relative;
    }
    .switchAll>form{
        width: 80%;
        margin: 0 auto;
    }
    .switchAll .inputGroup>input{
        width: 250px;
        height: 40px;
        font-size: 15px;
        text-indent: 10px;
    }
    .switchAll button{
        width: 30px;
        height: 30px;
        background: none;
        border: none;
        transform:rotate(90deg);
    }
    .switchIco{
        font-family: "iconfont" !important;
        font-size: 30px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .switchAll>form>input[type="submit"]{
        width: 250px;
        height: 30px;
        margin: 10px 0;
        border: none;
        background: orange;
        color: white;
        font-size: 18px;
        letter-spacing: 10px;
    }
</style>
