<template>
    <div>
        <Navbar />
        <div class="container-one-third-header"></div>
        <div class="container-header">Boat Management</div>
        <div class="container">
            <div v-if="error">
                <Message :message="message" :alert_type="alertType" />
            </div>
            <div v-if="error === false">
                <Message :message="message" :alert_type="alertType" />
            </div>
            <div class="row justify-content-between row-style">
                <div class="col-8 align-self-center">
                    <h4 class="mt-1"><strong>Please add new boats here</strong></h4>
                </div>
                <div class="col-4">
                    <router-link to="/admin/management/add" tag="button" class="btn btn-block btn-success">Add</router-link>
                </div>
            </div>
            <b-card-group deck class="my-4 justify-content-between" v-for="(subBoat, index) in this.mapBoat" :key="index">
            <b-card no-body class="overflow-hidden" style="max-width: 50%;" v-for="boat in subBoat" :key="boat.boat_id">
                <b-row no-gutters class="align-items-center justify-content-between">
                    <b-col md="7">
                        <img v-bind:src="'data:image/jpeg;base64,' + boat.image" alt="Image" class="rounded-0" 
                        style="min-width: 350px; max-height: 250px;"
                    />
                    </b-col>
                    <b-col md="5">
                        <b-card-body :title="boat.name">
                        <b-card-text>
                            <p>Brand : {{ boat.brand }} </p>
                            <p>Year : {{ boat.built_year }} </p>
                            <p>Condition : {{ boat.condition}} </p>
                            <div class="row">
                                <div class="col mt-2">
                                    <router-link 
                                    :to="`/admin/management/${boat.boat_id}/update`" tag="button" class="btn btn-warning">Update</router-link>
                                </div>
                                <div class="col mt-2">
                                    <ModalMembers 
                                        :id="boat.name"
                                        :team="false"
                                        :hideHeader="true"
                                        :hideFooter="false" 
                                        buttonText="Delete" 
                                        variant="danger" 
                                        modulVariant="danger" 
                                        alertText="Are you sure you want to delete the boat?" 
                                        modulButtonText="Delete"
                                        callback="delete-boat"
                                        @delete-boat="() => deleteBoat(boat.boat_id)"
                                        />
                                </div>
                            </div>
                        </b-card-text>
                        </b-card-body>
                    </b-col>
                </b-row>
            </b-card>
            </b-card-group>
        </div>
        <FooterAll />
    </div>
</template>

<script>
import Message from '../Message.vue'
import Navbar from '../Navbar.vue'
import ModalMembers from '../ModalReservation.vue'
import FooterAll from '../FooterAll.vue'
import Vuex from 'vuex'

import axios from 'axios'

export default {
    name: 'BoatManagement',
    components: {
        Navbar,
        ModalMembers,
        Message,
        FooterAll,
    },
    data() {
        return {
            boats: undefined,
            mapBoat: [],
            message: '',
            alertType: '',
            error: undefined
        }
    },
    methods: {
        ...Vuex.mapGetters(['getTokenFromStore']),
        computeMapBoats() {
            this.mapBoat = []
            let subBoats = []
            for (let i = 0; i < this.boats.length; ++i)
            {
                if ((i % 2 == 0) && (i > 0))
                {
                    this.mapBoat.push(subBoats)
                    subBoats = []
                }

                subBoats.push(this.boats[i])
            }

            this.mapBoat.push(subBoats)
        },
        async deleteBoat(boatId)
        {
            const result = await axios({
                method: 'DELETE',
                url: `http://localhost:5000/admin/${boatId}/delete_boat`,
                headers: { "x-access-tokens": this.getTokenFromStore() }
            })

            this.boats = this.boats.filter(boat => boat.boat_id != boatId)
            this.computeMapBoats()

            this.message = result.data.message
            this.error = false
            this.alertType = 'alert-success'
        }
    },
    beforeMount() {
        (async () => {
            const result = await axios({
                method: 'GET',
                url: 'http://localhost:5000/boat',
            })

            if (result.data.success)
            {
                this.boats = result.data.boats
                for (let i = 0; i < this.boats.length; i++)
                {
                    const boatId = this.boats[i].boat_id
                    const imageResult = await axios({
                        method: 'GET',
                        url: `http://localhost:5000/boat/${boatId}/image`,
                    })

                    let image_content = imageResult.data.encoded_image
                    image_content = image_content.substring(2, image_content.length - 1) 
                    this.boats[i].image = image_content
                }

                this.computeMapBoats()
            }   
            else
            {
               this.error = true
               this.message = result.data.message
               this.alertType = 'alert-danger'
            }

        })()
    }
}
</script>

<style scoped>
.container-one-third-header{
    position: relative;
    background-image: url(../../assets/boat_management.png);
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

.row-style {
    margin: 3rem 0rem 3rem 0rem;
    padding: 10px;
    border: 1px solid grey;
    border-radius: 5px;
    box-shadow: 5px 5px 5px #aaaaaa;
}
</style>