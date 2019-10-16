<template>
    <div class="mine">
        <router-link to="/login">
            <mt-cell title=""
                     is-link
                     class="userHeader">
                <span class="username">请登录</span>
                <img slot="icon" src=" " width="80" height="80">
            </mt-cell>
        </router-link>
        <mt-cell
                title="收藏"
                href="#"
                is-link>
        </mt-cell>
        <mt-cell
                title="标题文字"
                href="#"
                is-link>
        </mt-cell>
        <mt-cell
                title="创作中心"
                href="#"
                is-link>
        </mt-cell>
        <mt-cell
                title="意见反馈"
                href="#"
                is-link>
        </mt-cell>
        <mt-cell
                title="设置"
                href="#"
                is-link>
        </mt-cell>

    </div>
</template>

<script>
    export default {
        name: "Mine"
    }
</script>

<style>
    .mine{
        margin-top: 60px;
    }
    .userHeader img {
        border-radius: 50%;
    }
    a{
        text-decoration: none;
    }
    .mint-cell{
        font-size: 30px !important;
        font-weight: bold;
    }
</style>
