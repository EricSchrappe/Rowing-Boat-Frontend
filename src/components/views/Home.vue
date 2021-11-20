<template>
<div>
  <Navbar />
  <div class="cut"></div>
  <div class="container">
    <div style="background: #F8F8FF -webkit-box-shadow: 4px 4px 18px 1px rgba(0,0,0,0.32); 
        box-shadow: 4px 4px 18px 1px rgba(0,0,0,0.32); !important" class="jumbotron">
      <div class="row">
      <div class="col-lg-7">
        <h1 class="space display-4">Rowing Boat</h1>
        <p class="space">Imagine a sunny day in autumn. It is 7am in the morning, the water is mirror-smooth and there is still a bit of fog above the water surface, the perfect conditions for a beautiful rowing session. So, why are you waiting?</p>
        <router-link class="btn btn-primary" to="/reservation" tag="button">Make a reservation =></router-link>
      </div>
      <div class="col-lg-5"></div>
    </div>
    </div>
  </div>
  <div class="container fix">
    <div class="col-md-4 px-0">
      <img class="img-fluid float-right" src="../../assets/phone.png" alt="Phone">
    </div>
  </div>
  <div class="container">
    <p class="footer">Copyright &copy; 2021</p>
    <router-link class="footer" to="/privacy"> Privacy Policy</router-link>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../Navbar.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
  }
}
</script>

<style scoped>

.vertical-center {
  min-height: 100%;  /* Fallback for browsers do NOT support vh unit */

  display: flex;
  align-items: center;
}

.fix{
    position:fixed;
    bottom:0px;
    left:60%;
}

.space{
  margin-bottom: 4%;
}

.cut {
  background: url("../../assets/background.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(3px);
  width: 100%;
  height: 65%;
  clip-path: polygon(0 0, 100% 0, 100% 51%, 0 100%);
}

.footer{
  display: inline-block;
  vertical-align: top;
  margin-top: 1%;
  padding: 10px 10px 10px 10px;
}

</style>