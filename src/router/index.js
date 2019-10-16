import Vue from "vue"
import VueRouter from "vue-router"

import Home from "../pages/Home/index.vue"
import Video from "../pages/Video/index.vue"
import Text from "../pages/Text/index.vue"
import Mine from "../pages/Mine/index.vue"
import Login from "../pages/Login/index.vue"
import Oneiromancy from "../pages/Oneiromancy/index.vue"
import Switch from "../pages/Switch/index.vue"
import Lookup from "../pages/Lookup/index.vue"
import Historytoday from "../pages/Historytoday/index.vue"
import Huangli from "../pages/Huangli/index.vue"
import News from "../pages/News/index.vue"

Vue.use(VueRouter)

export default new  VueRouter({
    routes: [
        // 动态路径参数 以冒号开头
        { path: '/home', component: Home ,meta:{showFooter:true,showHeader:true}},
        { path: '/video', component: Video ,meta:{showFooter:true,showHeader:true}},
        { path: '/text', component: Text ,meta:{showFooter:true,showHeader:true}},
        { path: '/mine', component: Mine ,meta:{showFooter:true,showHeader:true}},
        { path: '/login', component: Login },
        { path: '/oneiromancy', component: Oneiromancy },,
        { path: '/switch', component: Switch },
        { path: '/lookup', component: Lookup },,
        { path: '/historytoday', component: Historytoday },
        { path: '/huangli', component: Huangli },,
        { path: '/news', component: News },

        { path: '/', redirect:"/home" }
    ]
})
