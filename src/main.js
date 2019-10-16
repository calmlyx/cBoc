import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import { Swipe, SwipeItem } from 'mint-ui'
import { Cell } from 'mint-ui';
import { Header } from 'mint-ui';
import axios from "axios"

Vue.prototype.axios = axios;
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Cell.name, Cell);

new Vue({
  el:"#app",
  render: h => h(App),
  router
})
