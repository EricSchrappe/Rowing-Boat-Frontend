import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/views/Home.vue'
import Login from '../components/views/Login.vue'
import Register from '../components/views/Register.vue'
import Reservation from '../components/views/Reservation.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login page',
    component: Login
  },
  {
    path: '/register',
    name: 'Registration page',
    component: Register
  },
  {
    path: '/reservation',
    name: 'Reservation page',
    component: Reservation
  }

]

const router = new VueRouter({
  routes
})

export default router
