import Vue from 'vue'
import Router from 'vue-router'

//懒加载方式，当路由被访问的时候才加载对应组件
const Login = resolve => require(['@/components/Login'], resolve)
const GetUserInfo = resolve => require(['@/components/GetUserInfo'], resolve)


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '登录',
      component: Login
    },
    {
      path: '/user/getUserInfo',
      name: '登录',
      component: GetUserInfo
    }
  ]
})
