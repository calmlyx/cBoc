<template>
    <div class="historytoday">
        <mt-header fixed title="历史上的今天">
            <div slot="left">
                <span @click="$router.back()">返回</span>
            </div>
        </mt-header>
    </div>
</template>

<script>
    export default {
        name: "Historytoday",
        mounted() {
            this.axios.get("/api/history?key=b0cb78bbe6313d13cfdd8af3174fddb6&v=1.0&month=11&day=1").then((response) => {
                console.log(response.data)
            })
        }
    }
</script>

<style>

</style>
