<template>
    <div>
        <Navbar />
        <div class="container-one-third-header"></div>
        <div class="container-header">Add Boat</div>
        <div class="container mt-5">
             <div v-if="error">
                <Message :message="message" :alert_type="alertType" />
            </div>
            <div v-if="error === false">
                <Message :message="message" :alert_type="alertType" />
            </div>
            <form>
            <div class="row align-items-center justify-content-center">
                <div class="col align-self-start">
                    <div class="form-group">
                    <label for="name">Boat Type</label>
                    <select class="form-control straightBorderRight space" required v-model="boat.boat_type">
                        <option value="" selected disabled>Type</option>
                        <option value="RACING">RACING</option>
                        <option value="GIG">GIG</option>
                    </select>
                    </div>
                    <div class="form-group">
                        <label for="name">Boat Class</label>
                        <select class="form-control" required v-model="boat.boat_class">
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
                        <label for="name">Name</label>
                        <input type="text" class="form-control" id="name" aria-describedby="nameHelp" placeholder="Name" v-model="boat.name">
                    </div>
                    <div class="form-group">
                        <label for="brand">Brand</label>
                        <input type="text" class="form-control" id="brand" aria-describedby="brandHelp" placeholder="Brand" v-model="boat.brand">
                    </div>
                    <div class="form-group">
                        <label for="year">Year</label>
                        <input type="number" class="form-control" id="year" aria-describedby="yearHelp" placeholder="Year" v-model="boat.built_year">
                    </div>

                    <div class="form-group">
                        <label for="slots">Slots</label>
                        <input type="number" min="1" class="form-control" id="slots" aria-describedby="yearHelp" placeholder="Slots" v-model="boat.slots">
                    </div>

                    <div class="form-group">
                        <label>Condition</label>
                        <select class="form-control" required v-model="boat.condition">
                            <option value="" selected disabled>Condition</option>
                            <option value="BAD">BAD</option>
                            <option value="USED">USED</option>
                            <option value="NEW">NEW</option>
                        </select>
                    </div>
                    <div class="form-group mb-3">
                        <label for="formFile" class="form-label">Please upload the image here</label>
                        <input class="form-control" type="file" id="formFile" @change="setFile">
                    </div>
                </div>
            </div>
            <button class="btn btn-success btn-block mt-5" type="submit" @click="e => createBoat(e)">Save &amp; Exit</button>
            </form>
        </div>
        <FooterAll />
    </div>
</template>

<script>
import Vuex from 'vuex'
import axios from 'axios'

import Navbar from '../Navbar.vue'
import Message from '../Message.vue'
import FooterAll from '../FooterAll.vue'

import toBoolean from '../../helpers/boolean.js'

export default {
    name: 'BoatAdd',
    components: { Navbar, Message, FooterAll },
    data() {
        return {
            boat: {
                name: '',
                boat_type: '',
                boat_class: '',
                brand: '',
                image: undefined,
                condition: '',
                built_year: 0,
                slots: 0
            },
            message: '',
            alertType: '',
            error: undefined
        }
    },
    methods: {
        ...Vuex.mapGetters(['getTokenFromStore']),
        async createBoat() {
            const formData = new FormData()
            for (const key in this.boat)
            {
                formData.append(key, this.boat[key])
            }

            const result = await axios({
                method: 'POST',
                url: 'http://localhost:5000/admin/create_boat',
                data: formData,
                headers: { "Content-Type": "multipart/form-data", "x-access-tokens": this.getTokenFromStore() }
            })

            this.error = !toBoolean(result.data.success)
            this.message = result.data.message
            this.alertType = (this.error) ? 'alert-danger' : 'alert-success'

            return false
        },
        setFile(e) {
            this.boat.image = e.target.files[0]
        }
    },
}
</script>

<style scoped>
.center {
    text-align: center;
    margin: 8% 0 4% 0;
}

select:invalid {
   color: grey
}

select:valid {
   color: black;
} 


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

</style>