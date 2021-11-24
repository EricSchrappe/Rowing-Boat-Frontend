<template>
    <div>
        <Navbar />
        <div class="container-one-third-header"></div>
        <div class="container-header">Company</div>
        <div class="container mt-5">
            <div class="container-company">
                Rowing Boat is a service created in 2021. The purpose of the service is to allow all rowing lovers to easily book the boat with which to do their rowing session. The idea was born understanding that there was a need for these athletes. Thanks to the Rowing Boat service you can book the best rowing session by selecting your preferences and knowing your teammates. The service therefore allows you to perform a rowing session when you want, without organizing everything weeks in advance.
            </div>
        </div>
        <FooterAll />
    </div>
</template>

<script>
import Navbar from '../Navbar.vue'
import FooterAll from '../FooterAll.vue'

export default {
    name: 'Company',
    components: {
        Navbar,
        FooterAll,
    },
}
</script>

<style scoped>
.container-one-third-header{
    position: relative;
    background-image: url(../../assets/boat_fire.png);
    background-size:cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: blur(3px);
    width: 100%;
    height: 35vh;
}

.container-header {
    position: absolute;
    left: 20%;
    top: 15%;
    font-size: 80px;
    font-weight: bold;
    color: white;
}

.container-company{
    margin: 4% 10% 4% 10%;
    padding: 4%;
    border: 1px solid grey;
    border-radius: 5px;
    box-shadow: 5px 10px 20px #aaaaaa;
    font-size: 20px;
}

</style>