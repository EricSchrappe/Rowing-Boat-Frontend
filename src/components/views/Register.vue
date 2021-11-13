<template>
    <div class="container">
        <h2 class="center"><strong>Registration</strong></h2>
        <form>
        <div class="row align-items-center justify-content-center">
            <div class="col align-self-start">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" aria-describedby="nameHelp" placeholder="Name" v-model="user.firstname">
                </div>
                <div class="form-group">
                    <label for="lastName">Last name</label>
                    <input type="text" class="form-control" id="lastName" aria-describedby="lastNameHelp" placeholder="Last name" v-model="user.lastname">
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" v-model="user.email">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Password" v-model="user.password">
                </div>
            </div>
            <div class="col align-self-start">
                <div class="form-group">
                    <label for="age">Age</label>
                    <input type="number" class="form-control" id="age" aria-describedby="nameHelp" placeholder="25" v-model="user.age">
                </div>
                <div class="form-group">
                    <label for="gender">Gender</label>
                    <select class="form-control custom-select" id="gender" v-model="user.gender">
                        <option value="FEMALE">Female</option>
                        <option value="MALE">Male</option>
                        <option value="DIVERSE">Diverse</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="phone">Phone Number</label>
                    <input type="tel" class="form-control" id="phone" aria-describedby="nameHelp" placeholder="+49 123 3456495" v-model="user.phoneNumber">
                </div>
                <div class="form-group">
                    <label for="fitness">Fitness Level</label>
                    <select class="form-control custom-select" id="fitness" v-model="user.fitness">
                        <option value="LOW">Low</option>
                        <option value="MODERATE">Moderate</option>
                        <option value="HIGH">High</option>
                    </select>
                </div>
            </div>
            <div class="col align-self-start">
                <div class="form-group">
                    <label for="skill">Skill Level</label>
                    <select class="form-control custom-select" id="skill" v-model="user.skill_level">
                        <option value="LOW">Low</option>
                        <option value="MODERATE">Moderate</option>
                        <option value="HIGH">High</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="ambitions">Ambitions</label>
                    <select class="form-control custom-select" id="ambitions" v-model="user.ambitions">
                        <option value="LOW">Low</option>
                        <option value="MODERATE">Moderate</option>
                        <option value="HIGH">High</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="confirmation" @click="checkboxToogled">
                    <label class="form-check-label" for="confirmation">Accept data collection</label>
                </div>
            </div>
            <div class="col">
                <Modul button_text="Privacy Policy" title="Privacy Policy" description=Lorem20 :showReserve="false"/>
            </div>
            <div class="col"></div>
        </div>
        <button class="btn btn-success btn-block mt-5" type="submit" @click="e => submit(e)" :disabled="disabled">Register</button>
        </form>
    </div>
</template>

<script>
import Modul from '../Modul.vue'
import axios from 'axios'

export default {
    name: 'Register',
    components: {
        Modul,
    },
    data() {
        return {
            disabled: true,
            user: {
                firstname: '',
                lastname: '',
                email: '',
                age: 0,
                password: '',
                gender: '',
                phoneNumber: '',
                fitness: '',
                ambitions: '',
                skill_level: ''
            },
            errorMessage: '',
            error: false
        }
    },
    methods: {
        checkboxToogled (){
            this.disabled = !this.disabled;
            
        },
        async submit(e) {
            e.preventDefault()
            const formData = new FormData()
            for(const key in this.user)
            {
                formData.append(key, this.user[key])
            }

            const result = await axios({
                method: 'POST',
                url: 'http://localhost:5000/register',
                data: formData,
                headers: { "Content-Type": "multipart/form-data" }
            })

            console.log(result)
            return false
        }
    }
    
}
</script>

<style scoped>
.center {
    text-align: center;
    margin: 8% 0 8% 0;
}
</style>