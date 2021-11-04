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
        <b-nav-item href="#" center>Boats</b-nav-item>
        <b-nav-item href="#" center>Company</b-nav-item>
        <b-nav-item tag="router-link" :to="{ path: '/admin/reservation'}" center>Requested Reservation</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <router-link to='/login' tag="button" class="myButton">Sign In</router-link>
        <!--
        <b-nav-item-dropdown right no-caret>
          <template #button-content>
            <b-icon icon="person-circle" aria-hidden="true"></b-icon>
          </template>
          <b-dropdown-item href="#">View/Modify Account</b-dropdown-item>
          <b-dropdown-item href="#">See Reservations</b-dropdown-item>
          <b-dropdown-item href="#">Notifications</b-dropdown-item>
        </b-nav-item-dropdown>
        -->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
  
</template>

<script>
export default {
    name: 'Navbar',
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