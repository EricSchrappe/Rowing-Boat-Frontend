<template>
    <div class="container mt-5">
        <h2 class="text-center my-5"><strong>See Reservations</strong></h2>
        <div class="container" v-if="userReservations.length === 0">
            <h4 class="text-center">You don't have any bookings right now</h4>
        </div>
        <div v-else>
            <div class="container" v-if="error">
                <Message :message="message" :alert_type="alert_type" />
            </div>
            <div class="container" v-if="error === false">
                <Message :message="message" :alert_type="alert_type" />
            </div>
            <div class="container" v-for="userReservation in this.userReservations" :key="userReservation.booking_id">
                <div class="row justify-content-center">
                    <div class="col-lg-10 mr-5">
                        <p class="smallHeadline">{{ userReservation.date }}</p>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-2 borderColStart align-self-center">
                        <img class="mt-2" src="../../assets/rowing_icon.png" alt="boat" style="max-height: 50px; max-width: 50px;">
                    </div>
                    <div class="col-lg-2 borderColMiddle align-self-center">
                        <p class="smallHeadline">Name</p>
                        <p>{{ userReservation.name }}</p>
                    </div>
                    <div class="col-lg-2 borderColMiddle align-self-center">
                        <p class="smallHeadline">Boat</p>
                        <p>{{ userReservation.type }}</p>
                    </div>
                    <div class="col-lg-2 borderColEnd align-self-center">
                        <p class="smallHeadline">Class</p>
                        <p>{{ userReservation.class }}</p>
                    </div>
                    <div class="col-lg-2 align-self-center ml-5">
                        <button class="btn btn-danger btn-lg btn-block" @click="() => deleteBooking(userReservation.booking_id)">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex'
import axios from 'axios'
import toBoolean from '../../helpers/boolean.js'
import Message from '../Message.vue'

export default {
    name: 'SeeReservations',
    components: {
        Message,
    },
    methods: {
        ...Vuex.mapGetters(['getTokenFromStore']),
        async deleteBooking(booking_id) {
            const result = await axios({
                method: 'DELETE',
                url: `http://localhost:5000/user/booking/${booking_id}/delete`,
                headers: { "x-access-tokens": this.getTokenFromStore() }
            })

            if (result.data.success)
            {
                this.error = !toBoolean(result.data.success)
                this.message = result.data.message
                this.alert_type = "alert-success"
                this.userReservations = this.userReservations.filter(userReservation => userReservation.booking_id != booking_id)
            }            
            else
            {
                this.error = !toBoolean(result.data.success)
                this.message = result.data.message
                this.alert_type = "alert-danger"
            }


        }
    },
    data () {
        return {
            userReservations: [],
            error: undefined,
            message: "",
            alert_type: "",
        }
    },
    async beforeMount() {
        const token = this.getTokenFromStore()
        const result = await axios({
            method: 'GET',
            url: 'http://localhost:5000//user/bookings',
            headers: { "x-access-tokens": token }
        })
        
        this.userReservations = result.data.bookings
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

.borderColMiddle{
    border: 1px solid grey;
    border-right: 0;
    border-left: 0;
    padding: 10px 0px 5px 0px;
}

.borderColEnd{
    border: 1px solid grey;
    border-left: 0;
    border-radius: 0px 8px 8px 0px;
    padding: 10px 10px 5px 0px;
}
</style>