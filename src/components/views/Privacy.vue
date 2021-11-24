<template>
    <div>
        <Navbar />
        <div class="container-one-third-header"></div>
        <div class="container-header">Privacy Policy</div>
        <b-card no-body class="text-center">
            <div class="policy">
                {{ policy }}
            </div>
        </b-card>
        <FooterAll />
    </div>
</template>

<script>
import { privacy_policy } from '../../assets/privacy_policy.js';
import Navbar from '../Navbar.vue'
import FooterAll from '../FooterAll.vue'

export default {
    name: 'Privacy',
    components: {
        Navbar,
        FooterAll,
    },
    data () {
        return {
            policy: privacy_policy
        }
    }
}
</script>

<style scoped>
.container-one-third-header{
    position: relative;
    background-image: url(../../assets/privacy.png);
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

.policy {
    margin: 4% 10% 4% 10%;
    padding: 4%;
    border: 1px solid grey;
    border-radius: 5px;
    box-shadow: 5px 10px 20px #aaaaaa;
    white-space: pre-wrap;
}

</style>