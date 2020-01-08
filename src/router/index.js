import Vue from 'vue'
import VueRouter from 'vue-router'
import test from '../components/test.vue'
import Login from '@/views/login'
Vue.use(VueRouter)

// 路由配置
const routes = [
  {
    path: '/',
    // name: 'button',
    component: test
  }, {
    path: '/login',
    name: 'loginPage',
    component: Login
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
