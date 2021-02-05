import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Button from '@/views/Button'
import Modal from '@/views/Modal'
import Tree from '@/views/Tree'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/button",
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/button',
          name: 'button',
          component: Button
        },
        {
          path: '/modal',
          name: 'modal',
          component: Modal
        },
        {
          path: '/tree',
          name: 'tree',
          component: Tree
        }
      ]
    }
  ]
})
