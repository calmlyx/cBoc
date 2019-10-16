<template>
    <div class="news">
        <mt-header fixed title="新闻资讯">
            <div slot="left">
                <span @click="$router.back()">返回</span>
            </div>
        </mt-header>
    </div>
</template>

<script>
    export default {
        name: "News"
    }
</script>

<style>

</style>
