<template>
    <div class="login">
        <mt-header fixed title="登录&注册">
            <div slot="left">
                <span @click="$router.back()"> 返回 </span>
            </div>
        </mt-header>
        <div class="LoginForm">
            <img src="./images/CBOX.png" alt="" width="100">
            <form action="#">
                <input type="text" placeholder="请输入账号">
                <br>
                <input type="password" placeholder="请输入密码">
                <br>
                <button type="submit">登录并注册</button>
            </form>
            <p class="protocol">注册代表您同意 <a href="#">《c-box用户协议》</a></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style>
    .login {
        height: 81.9vh;
        text-align: center;
        z-index: 100;
        overflow: hidden;
    }

    .mint-header {
        min-height: 50px;
        font-size: 20px;
    }

    .LoginForm {
        height: 100vh;
        background: url("./images/logo-bcg.jpg");
        background-size: 100% 100%;
    }

    .LoginForm > img {
        margin-top: 30px;
    }

    .LoginForm > form {
        margin-top: 25px;
    }

    .LoginForm > form > input, button {
        width: 70%;
        height: 45px;
        margin: 10px 0;
        border-radius: 10px;
        outline: none;
        font-size: 20px;
    }

    .LoginForm > form > input {
        border: 1px solid;
        background: none;
        text-indent: 15px;
    }

    .LoginForm > form > button {
        background: orange;
        border: none;
        color: white;
        letter-spacing: 5px;
    }

    .protocol {
        width: 100%;
        text-align: center;
        margin-top: 10px;
    }
</style>
