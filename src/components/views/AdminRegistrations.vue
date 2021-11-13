<template>
     <div class="container mt-5">
        <h2 class="text-center my-5"><strong>Requested Registrations</strong></h2>
        <div class="container mt-5" v-for="userRequest in this.userRequests" :key="userRequest.user_id">
            <div class="row justify-content-center">
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
                    <button class="btn btn-danger btn-lg btn-block">Decline</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex'
import axios from 'axios'

export default {
    name: 'AdminReservation',
    data() {
        return {
            userRequests: undefined
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
                console.log(result.data.message)
                this.userRequests = this.userRequests.filter(userRequest => userRequest.user_id != userId)
            }            
            else
            {
                // handle the error message
            }
        }
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
</style>