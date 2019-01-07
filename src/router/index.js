import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home.vue'
import category from '@/pages/category/category'
import car from '@/pages/car/car'
import me from '@/pages/me/me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
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
    }
  ]
})
