<template>
    <div>
        <Navbar />
        <div class="container-one-third-header"></div>
        <div class="container-header">Update Boat</div>
        <div class="container mt-5">
             <div v-if="error">
                <Message :message="message" :alert_type="alertType" />
            </div>
            <div v-if="error === false">
                <Message :message="message" :alert_type="alertType" />
            </div>
        </div>
        <div class="container" v-if="boat !== undefined">
            <form>
            <div class="row align-items-center justify-content-center">
                <div class="col align-self-start">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" v-model="boat.name" id="name" aria-describedby="nameHelp" placeholder="Name">
                    </div>
                    <div class="form-group">
                        <label for="brand">Brand</label>
                        <input type="text" class="form-control" v-model="boat.brand" id="brand" aria-describedby="brandHelp" placeholder="Brand">
                    </div>
                    <div class="form-group">
                        <label for="year">Year</label>
                        <input type="number" class="form-control" v-model="boat.built_year" id="year" aria-describedby="yearHelp" placeholder="Year">
                    </div>
                    <div class="form-group">
                        <label>Condition</label>
                        <select class="form-control" required v-model="boat.condition">
                            <option value="" disabled>Condition</option>
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
            <button class="btn btn-success btn-block mt-5" type="submit" @click="updateBoat">Save &amp; Exit</button>
            </form>
        </div>
    </div>
</template>

<script>

import Vuex from 'vuex'
import axios from 'axios'

import Navbar from '../Navbar.vue'
import Message from '../Message.vue'

import toBoolean from '../../helpers/boolean.js'

export default {
    name: 'BoatUpdate',
    components: { Navbar, Message },
    data() {
        return {
            error: undefined,
            message: '',
            alertType: '',
            boat: undefined
        }
    },
    methods: {
        ...Vuex.mapGetters(['getTokenFromStore']),
        setFile(e) {
            this.boat.image = e.target.files[0]
        },
        async updateBoat() {
            const boatId = this.$route.params.boatId
            const formData = new FormData()

            for (const key in this.boat)
            {
                formData.append(key, this.boat[key])
            }

            const result = await axios({
                method: 'PATCH',
                url: `http://localhost:5000/admin/${boatId}/update_boat`,
                data: formData,
                headers: { "Content-Type": "multipart/form-data", "x-access-tokens": this.getTokenFromStore() }
            })

            this.error = !toBoolean(result.data.success)
            this.message = result.data.message
            this.alertType = this.error ? 'alert-danger' : 'alert-success'

            return false
        }
    },
    watch: {
    '$route.params.boatId': {
        handler(boatId) {
            (async () => {
            const result = await axios({
                    'method': 'GET',
                    'url': `http://localhost:5000/boat/${boatId}/get`
                })

                if (!toBoolean(result.data.success))
                {
                    console.log(result.data.message)
                    // means that the 
                    this.$router.push('/admin/management')
                }

                this.boat = result.data.boat
                this.boat.image = undefined
            })()
        },
        immediate: true,
    }
}
    
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