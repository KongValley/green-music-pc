import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 不需要登录即可访问的路由表
export const constantRouterMap = [
  {path: '/', name: 'home', component: () => import('@/views/home/index')},
  {path: '*', redirect: '/'}
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
