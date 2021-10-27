<template>
<div>
  <b-navbar toggleable="lg" type="light" variant="light">
    <b-navbar-brand href="#">
        <img src="" alt="Rowing">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Centered nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#" center>Reservation</b-nav-item>
        <b-nav-item href="#" center>Boats</b-nav-item>
        <b-nav-item href="#" center>Company</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right no-caret>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <b-icon icon="person-circle" aria-hidden="true"></b-icon>
          </template>
          <b-dropdown-item href="#">View/Modify Account</b-dropdown-item>
          <b-dropdown-item href="#">See Reservations</b-dropdown-item>
          <b-dropdown-item href="#">Notifications</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
  
</template>

<script>
export default {
    name: 'Navbar'
}
</script>