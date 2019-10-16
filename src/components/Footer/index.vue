<template>
    <div class="footer">
        <hr>
        <ul>
            <li :class="{on : '/home' === $route.path}" @click="goTo('/home')">
                <span>
                    <span class="footerIco">&#xe7a7;</span>
                </span>
            </li>
            <li :class="{on : '/video' === $route.path}" @click="goTo('/video')">
                <i class="footerIco">&#xe608;</i>
            </li>
            <li :class="{on : '/text' === $route.path}" @click="goTo('/text')">
                <i class="footerIco">&#xe600;</i>
            </li>
            <li :class="{on : '/mine' === $route.path}" @click="goTo('/mine')">
                <i class="footerIco">&#xe61d;</i>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        components: {},
        methods: {
            goTo(path) {
                this.$router.replace(path)
            }
        }
    }
</script>

<style>
    .footer {
        width: 100%;
        color: gray;
        position: fixed;
        bottom: 0;
        background: url("images/footerBcg.jpeg");
        background-size: 100% 100%;
    }

    hr {
        border-top: 1px solid #f4f4f2;
    }

    .footer > ul > li {
        width: 25%;
        height: 50px;
        float: left;
        margin: 0 auto;
        text-align: center;
        line-height: 50px;
    }

    .footerIco {
        font-family: "iconfont" !important;
        font-size: 28px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .on {
        color: #26a2e1;
    }
</style>
