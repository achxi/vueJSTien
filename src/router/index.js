import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld/HelloWorld'
import HiDemo from '@/components/HiDemo/HiDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hi-demo',
      name: 'HiDemo',
      component: HiDemo
    }

  ]
})
