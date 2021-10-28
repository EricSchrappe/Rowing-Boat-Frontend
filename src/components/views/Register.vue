<template>
    <div class="container">
        <h3 class="center">Registration</h3>
        <form method="POST">
        <div class="row align-items-center justify-content-center">
            <div class="col align-self-start">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" aria-describedby="nameHelp" placeholder="Name">
                </div>
                <div class="form-group">
                    <label for="lastName">Last name</label>
                    <input type="text" class="form-control" id="lastName" aria-describedby="lastNameHelp" placeholder="Last name">
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Password">
                </div>
            </div>
            <div class="col align-self-start">
                <div class="form-group">
                    <label for="age">Age</label>
                    <input type="number" class="form-control" id="age" aria-describedby="nameHelp" placeholder="25">
                </div>
                <div class="form-group">
                    <label for="gender">Gender</label>
                    <select class="form-control custom-select" id="gender">
                        <option>Female</option>
                        <option>Male</option>
                        <option>Diverse</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="phone">Phone Number</label>
                    <input type="tel" class="form-control" id="phone" aria-describedby="nameHelp" placeholder="+49 123 3456495">
                </div>
                <div class="form-group">
                    <label for="fitness">Fitness Level</label>
                    <select class="form-control custom-select" id="fitness">
                        <option>Low</option>
                        <option>Moderate</option>
                        <option>High</option>
                    </select>
                </div>
            </div>
            <div class="col align-self-start">
                <div class="form-group">
                    <label for="skill">Skill Level</label>
                    <select class="form-control custom-select" id="skill">
                        <option>Low</option>
                        <option>Moderate</option>
                        <option>High</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="ambitions">Ambitions</label>
                    <select class="form-control custom-select" id="ambitions">
                        <option>Low</option>
                        <option>Moderate</option>
                        <option>High</option>
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
                <Modul button_text="Privacy Policy" title="Privacy Policy" description=Lorem20 />
            </div>
            <div class="col"></div>
        </div>
        <button class="btn btn-success btn-block mt-5" type="submit" :disabled="disabled">Register</button>
        </form>
    </div>
</template>

<script>
import Modul from '../Modul.vue'


export default {
    name: 'Register',
    components: {
        Modul,
    },
    data() {
        return {
            disabled: true,
        }
    },
    methods: {
        checkboxToogled (){
            this.disabled = !this.disabled;
            
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