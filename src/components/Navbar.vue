<template>
<div>
  <b-navbar toggleable="lg" type="light" variant="light">
    <b-navbar-brand>
        <router-link to="/"><img src="../assets/logo.png" alt="Boat" style="max-height: 25px; max-width: 25px;"></router-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Centered nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item tag="router-link" :to="{ path: '/reservation'}" center>Reservation</b-nav-item>
        <b-nav-item tag="router-link" :to="{ path: '/boats'}" center>Boats</b-nav-item>
        <b-nav-item tag="router-link" :to="{ path: '/company'}" center>Company</b-nav-item>
        <b-nav-item tag="router-link" :to="{ path: '/admin/registrations'}" center v-if="adminUser">Requested Reservation</b-nav-item>
        <b-nav-item tag="router-link" :to="{ path: '/admin/management'}" center v-if="adminUser">Boat Management</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <router-link to='/login' tag="button" class="myButton" v-if="!connectedUser">Sign In</router-link>
        <b-nav-item-dropdown right no-caret v-else>
          <template #button-content>
            <b-icon icon="person-circle" aria-hidden="true"></b-icon>
          </template>
          <router-link to="/reservations" tag="b-dropdown-item-button">See Reservation</router-link>
          <b-dropdown-item-button @click="() => logout()">Logout</b-dropdown-item-button>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
  
</template>

<script>

import Vuex from 'vuex'

export default {
    name: 'Navbar',
    data() {
      return {
        connectedUser: false,
        adminUser: false
      }
    },
    methods: {
        ...Vuex.mapGetters(['getTokenFromStore', 'isAdmin']),
        ...Vuex.mapActions(['removeToken']),
        logout() {
            this.removeToken();
            this.$router.go(0)
        }
    },
    beforeMount() {
        const token = this.getTokenFromStore()
        this.connectedUser = token != undefined
        this.adminUser = this.isAdmin()
    }
}
</script>

<style scoped>
.myButton {
    box-shadow: 0px 3px 7px -2px #000000;
    background-color:#b5b5b5;
    border-radius:28px;
    border:1px solid #b5b5b5;
    display:inline-block;
    cursor:pointer;
    color:#ffffff;
    font-family:Arial;
    font-size:14px;
    padding:8px 12px;
    text-decoration:none;
    transition: 0.3s;
}
.myButton:hover {
    background-color:#39378d;
    border:1px solid #39378d;
}

.myButton:active {
    position:relative;
    top:1px;
}

</style>