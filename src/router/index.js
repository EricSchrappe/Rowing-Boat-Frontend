import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/privacy',
    name: 'Privacy Policy',
  }
]

const router = new VueRouter({
  routes
})

export default router
