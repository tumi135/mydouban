import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home.vue'
import category from '@/pages/category/category'
import car from '@/pages/car/car'
import me from '@/pages/me/me'
import login from '@/pages/login/login'
import detail from '@/pages/detail/detail'
import list from '@/pages/list/list'
import shop from '@/pages/shop/shop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ohome',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/category',
      name: 'category',
      component : category
    },
    {
      path: '/car',
      name: 'car',
      component : car
    },
    {
      path: '/me',
      name: 'me',
      component : me
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail
    },
    {
      path: '/list/:id',
      name: 'list',
      component: list
    },
    {
      path: '/shop/:id',
      name: 'shop',
      component: shop
    }
  ]
})
