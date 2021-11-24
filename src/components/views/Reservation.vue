<template>
<div>
    <Navbar />
    <div class="container-one-third-header"></div>
    <div class="container-header">Reservation</div>
    <div class="container-fluid">
        <form class="form-inline justify-content-center spread">
            <div class="form-group">
                <select class="form-control straightBorderRight space" required v-model="search.type">
                    <option value="" selected disabled>Type</option>
                    <option value="RACING">RACING</option>
                    <option value="GIG">GIG</option>
                </select>
            </div>
            <div class="form-group">
                <select class="form-control noBorder space" required v-model="search.class">
                    <option value="" selected disabled>Class</option>
                    <option value="1x">1x</option>
                    <option value="2x">2x</option>
                    <option value="2-">2-</option>
                    <option value="4x">4x</option>
                    <option value="4-">4-</option>
                    <option value="4+">4+</option>
                    <option value="8+">8+</option>
                </select>
            </div>
            <div class="form-group">
               <div class="containerTime">
                    <div class="row">
                        <div class="col-md-12">
                            <date-picker class="noBorder text-center" v-model="search.date" :config="options" placeholder="Date &amp; Time" required></date-picker>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <select class="form-control noBorder space" v-model="search.gender">
                    <option value="" selected disabled>Gender</option>
                    <option value="MALE">MALE</option>
                    <option value="FEMALE">FEMALE</option>
                    <option value="DIVERSE">DIVERSE</option>
                </select>
            </div>
            <div class="form-group">
                <select class="form-control noBorder space" v-model="search.ageGroup">
                    <option value="" selected disabled>Age Group</option>
                    <option value="18-35">18-35</option>
                    <option value="36-55">36-55</option>
                </select>
            </div>
            <div class="form-group">
                <select class="form-control noBorder space" v-model="search.fitness">
                    <option value="" selected disabled>Fitness Level</option>
                    <option value="LOW">LOW</option>
                    <option value="MODERATE">MODERATE</option>
                    <option value="HIGH">HIGH</option>
                </select>
            </div>
            <div class="form-group">
                <select class="form-control noBorder space" v-model="search.skill">
                    <option value="" selected disabled>Skill Level</option>
                    <option value="LOW">LOW</option>
                    <option value="MODERATE">MODERATE</option>
                    <option value="HIGH">HIGH</option>
                </select>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-search space" @click="searchBoats">Search</button>
            </div>
        </form>
        <div class="container-helper">
            <p class="helper-text">Filters: Gender, Age Group, Fitness Level, Skill Level are optional</p>
        </div>
    <div class="container">
        <div class="alert alert-danger text-center" role="alert" v-if="error">
            {{ message }}
        </div>
        <div class="alert alert-success text-center" role="alert" v-if="error === false">
            {{ message }}
        </div>
        <h2>Results:</h2>
        <div class="container-no" v-if="this.boats.length === 0">
                <h4 class="text-center">There are no boats available for your search criteria, please enter new parameters</h4>
        </div>
        <b-card-group v-else deck class="my-4 justify-content-between">
        <b-card no-body class="overflow-hidden" style="max-width: 1000px;" v-for="boat in this.boats" :key="boat.boat_id">
            <b-row no-gutters class="align-items-center justify-content-between">
                <b-col md="7">
                    <img v-bind:src="'data:image/jpeg;base64,' + boat.image" alt="Image" class="rounded-0" 
                        style="min-width: 350px; max-height: 250px;"
                    />
                </b-col>
                <b-col md="5">
                    <b-card-body :title="boat.name">
                    <b-card-text>
                        <p>Brand : {{ boat.brand }}</p>
                        <p>Year : {{ boat.built_year}}</p>
                        <p>Condition : {{ boat.condition.toLowerCase() }}</p>
                        <p>Available slots : {{ boat.available_slots }}
                        <div class="row">
                            <div class="col">
                                <ModalMembers :id="boat.boat_id" :team="true" :hideHeader="false" :hideFooter="true" :teamComposition="boat.team" buttonText="Team" variant="outline-success" />
                            </div>
                            <div class="col">
                                <ModalMembers :id="boat.boat_id+1" :team="false" 
                                    :hideHeader="true" 
                                    :hideFooter="false" 
                                    buttonText="Reserve" 
                                    variant="success" 
                                    modulVariant="success" 
                                    alertText="Are you sure you want to reverse?"
                                    modulButtonText="Reserve"
                                    :teamComposition="boat.team"
                                    @reserve-boat="() => reserveBoat(boat.boat_id)"
                                    callback="reserve-boat"
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
</div>
<FooterAll />
</div>
</template>

<script>
import Navbar from '../Navbar.vue'
import ModalMembers from '../ModalReservation.vue'
import FooterAll from '../FooterAll.vue'
import axios from 'axios'
import Vuex from 'vuex'

import toBoolean from '../../helpers/boolean.js'
import now from '../../helpers/date.js'

export default {
    name: 'Registration',
    components: {
        Navbar,
        ModalMembers,
        FooterAll,
    },
    data () {
        return {
            options: {
                // https://momentjs.com/docs/#/displaying/
                format: 'DD/MM/YYYY H:mm',
                useCurrent: false,
                showClear: true,
                showClose: true,
                sideBySide: true,
                minDate: now()
            },
            boats: [],
            search: {
                type: '',
                class: '',
                date: '',
                gender: '',
                ageGroup: '',
                fitness : '',
                skill: ''
            },
            error: undefined,
            message: '',
        }
    },
    methods: {
        ...Vuex.mapGetters(['getTokenFromStore']),
        async searchBoats() {
            const result = await axios({
                method: 'GET',
                url: 'http://localhost:5000/boat/search',
                params: this.search
            })

            if (!result.data.success)
            {
                this.error = true
                this.message = result.data.message
            }

            const boats = result.data.boats
            for (var i = 0; i < boats.length; ++i)
            {
                const boatId = boats[i].boat_id
                const imageResult = await axios({
                    method: 'GET',
                    url: `http://localhost:5000/boat/${boatId}/image`,
                })

                let image_content = imageResult.data.encoded_image
                image_content = image_content.substring(2, image_content.length - 1) 
                boats[i].image = image_content
            }

            this.boats = boats

            return false
        },
        async reserveBoat(boatId)
        {
            const result = await axios({
                method: 'GET',
                url: `http://localhost:5000/boat/${boatId}/book`,
                headers: { "x-access-tokens": this.getTokenFromStore() },
                params: {
                    'date': this.search.date
                }
            })

            this.message = result.data.message
            this.error = !toBoolean(result.data.success)
            this.$router.push('/reservations');


        }
    }
}
</script>

<style scoped>
.straightBorderRight {
    border-radius: 10px 0 0 10px;
}
.noBorder {
    border-radius: 0 0 0 0;
}

select:invalid {
   color: grey
}

select:valid {
   color: black;
}   

.containerTime {
    margin: 0;
}

.btn-search {
    border-radius: 0 10px 10px 0;
    background-color: #605DEC;
    color: white;
}

.btn-search:hover {
    background-color: #39378d;
    color: white;
}

.container-one-third-header{
    position: relative;
    background-image: url(../../assets/reservation.png);
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

.spread{
    margin: 3% 3% 0% 3%;
}

.space{
    padding-left: 30px;
    padding-right: 30px;
}

.container-helper {
    margin-left: 20%;
    margin-top: 3px;
}

.helper-text{
    font-size:14px;
    color: grey;
}
</style>