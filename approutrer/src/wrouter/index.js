import Vue from 'vue';
import WVueRouter from './wvue-router.js'
import Home from '../pages/home.vue'
import login from '../pages/login.vue'

// 1.应用插件
Vue.use(WVueRouter)

const routes = [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  ]

  // 2.创建实例
const router = new WVueRouter({
    mode: '',
    base: process.env.BASE_URL,
    routes
  })

 export default router; 