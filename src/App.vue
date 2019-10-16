<template>
    <div class="app">
        <Header v-show="$route.meta.showHeader"/>
        <router-view class="main"/>
        <Footer v-show="$route.meta.showFooter"/>
    </div>
</template>

<script>

    import Header from "./components/Header"
    import Footer from "./components/Footer"

    export default {
        name: 'app',
        components: {
            Header,
            Footer
        }
    }
</script>

<style>
    * {
        padding: 0;
        margin: 0;
    }

    ul, li {
        list-style: none;
    }

    #app {
        position: relative
    }
    .main{
        overflow: auto;
        margin-top: 45px;
    }
</style>
