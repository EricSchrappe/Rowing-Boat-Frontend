<template>
    <div>
        <Navbar />
        <div class="container-one-third-header"></div>
        <div class="container-header">Requested Registrations</div>
        <div class="container mt-5">
            <div class="container mt-5" v-for="userRequest in this.userRequests" :key="userRequest.user_id">
                <div class="row justify-content-center">
                    <div v-if="error">
                        <Message :message="message" :alert_type="alert_type" />
                    </div>
                    <div v-if="error === false">
                        <Message :message="message" :alert_type="alert_type" />
                    </div>
                    <div class="col-lg-3 borderColStart align-self-center">
                        <p class="smallHeadline">Name</p>
                        <p>{{userRequest.firstname}}</p>
                    </div>
                    <div class="col-lg-3 borderColEnd align-self-center">
                        <p class="smallHeadline">Last Name</p>
                        <p>{{userRequest.lastname}}</p>
                    </div>
                    <div class="col-lg-2 align-self-center ml-5">
                        <button class="btn btn-success btn-lg btn-block" @click="() => acceptAccount(userRequest.user_id)">Accept</button>
                    </div>
                    <div class="col-lg-2 align-self-center ml-5">
                        <button class="btn btn-danger btn-lg btn-block" @click="() => declineAccount(userRequest.user_id)">Decline</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex'
import axios from 'axios'
import Message from '../Message.vue'
import toBoolean from '../../helpers/boolean.js'
import Navbar from '../Navbar.vue'

export default {
    name: 'AdminReservation',
    components: {
        Message,
        Navbar,
    },
    data() {
        return {
            userRequests: undefined,
            error: undefined,
            message: "",
            alert_type: "",
        }
    },
    methods: {
        ...Vuex.mapGetters(['getTokenFromStore']),
        async acceptAccount(userId) {
            const result = await axios({
                method: 'POST',
                url: `http://localhost:5000/admin/${userId}/validate_account`,
                headers: { "x-access-tokens": this.getTokenFromStore() }
            })

            console.log(result)
            if (result.data.success)
            {
                this.error = !toBoolean(result.data.success)
                this.message = result.data.message
                this.alert_type = "alert-success"
                this.userRequests = this.userRequests.filter(userRequest => userRequest.user_id != userId)
            }            
            else
            {
                this.error = !toBoolean(result.data.success)
                this.message = result.data.message
                this.alert_type = "alert-danger"
            }
        },
        async declineAccount(userId) {
            const result = await axios({
                method: 'POST',
                url: `http://localhost:5000/admin/${userId}/decline_account`,
                headers: { "x-access-tokens": this.getTokenFromStore() }
            })

            console.log(result)
            if (result.data.success)
            {
                this.error = !toBoolean(result.data.success)
                this.message = result.data.message
                this.alert_type = "alert-success"
                this.userRequests = this.userRequests.filter(userRequest => userRequest.user_id != userId)
            }            
            else
            {
                this.error = !toBoolean(result.data.success)
                this.message = result.data.message
                this.alert_type = "alert-danger"
            }
    },
    },

    async beforeMount() {
        const token = this.getTokenFromStore()
        const result = await axios({
            method: 'GET',
            url: 'http://localhost:5000/admin/user_requests',
            headers: { "x-access-tokens": token }
        })

        this.userRequests = result.data.users
    }

}
</script>

<style scoped>
.smallHeadline {
    font-size: 18px;
    font-weight: bold;
}

.borderColStart{
    border: 1px solid grey;
    border-right: 0;
    border-radius: 8px 0px 0px 8px;
    height: 100px;
    padding: 10px 0px 5px 30px;
}

.borderColEnd{
    border: 1px solid grey;
    border-left: 0;
    border-radius: 0px 8px 8px 0px;
    padding: 10px 10px 5px 0px;
}

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
</style>