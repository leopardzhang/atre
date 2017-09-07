import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Index from './components/index/index.vue'
import ProductHot from './components/product/product_hot.vue'
import ProductList from './components/product/product_list.vue'
import StoreList from './components/store/store_list.vue'
import Store from './components/store/store.vue'
import About from './components/about/about.vue'
import Join from './components/join/join.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);

Vue.use(VueRouter);//应用路由

//配置路由
const routes = [
  { path: '/index', component: Index },
  { path: '/about', component: About },
  { path: '/product_hot', component: ProductHot },
  { path: '/product_list/:id', component: ProductList },
  { path: '/store_list', component: StoreList },
  { path: '/store/:id', component: Store },
  { path: '/join', component: Join },
  { path: '*', redirect: '/index' }
];
//应用路由
const router = new VueRouter({
  routes,
  history: true,
  saveScrollPosition: true,
  linkActiveClass: 'active'
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
