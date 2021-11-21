import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/views/Home.vue'
import Login from '../components/views/Login.vue'
import Register from '../components/views/Register.vue'
import Reservation from '../components/views/Reservation.vue'
import SeeReservations from '../components/views/SeeReservations.vue'
import AdminRegistrations from '../components/views/AdminRegistrations.vue'
import BoatManagement from '../components/views/BoatManagement.vue'
import BoatAdd from '../components/views/BoatAdd.vue'
import BoatUpdate from '../components/views/BoatUpdate.vue'
import Privacy from '../components/views/Privacy.vue'

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
    path: '/privacy',
    name: 'Privacy policy page',
    component: Privacy
  },
  {
    path: '/reservation',
    name: 'Reservation page',
    component: Reservation
  },
  {
    path: '/reservations',
    name: 'See Reservations page',
    component: SeeReservations
  },
  {
    path: '/admin/registrations',
    name: 'Admin Registrations page',
    component: AdminRegistrations
  },
  {
    path: '/admin/management',
    name: 'Admin Boat Management page',
    component: BoatManagement
  },
  {
    path: '/admin/management/add',
    name: 'Admin Boat add page',
    component: BoatAdd
  },
  {
    path: '/admin/management/:boatId/update',
    name: 'Admin Boat update page',
    component: BoatUpdate
  },
]

const router = new VueRouter({
  routes
})

export default router
