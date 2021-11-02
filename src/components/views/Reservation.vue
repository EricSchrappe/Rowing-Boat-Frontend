<template>
<div>
    <Navbar />
    <div class="container-one-third-header"></div>
    <div class="container-header">Reservation</div>
    <div class="container-fluid">
        <form class="form-inline justify-content-center spread">
            <div class="form-group">
                <select class="form-control straightBorderRight space" required>
                    <option value="" selected disabled>Type</option>
                    <option>RACING</option>
                    <option>GIG</option>
                </select>
            </div>
            <div class="form-group">
                <select class="form-control noBorder space" required>
                    <option value="" selected disabled>Class</option>
                    <option>1x</option>
                    <option>2x</option>
                    <option>2-</option>
                    <option>4x</option>
                    <option>4-</option>
                    <option>4+</option>
                    <option>8+</option>
                </select>
            </div>
            <div class="form-group">
               <div class="containerTime">
                    <div class="row">
                        <div class="col-md-12">
                            <date-picker class="noBorder text-center" v-model="date" :config="options" placeholder="Date &amp; Time"></date-picker>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <select class="form-control noBorder space" required>
                    <option value="" selected disabled>Gender</option>
                    <option>MALE</option>
                    <option>FEMALE</option>
                    <option>DIVERSE</option>
                </select>
            </div>
            <div class="form-group">
                <select class="form-control noBorder space" required>
                    <option value="" selected disabled>Age Group</option>
                    <option>18-35</option>
                    <option>36-55</option>
                </select>
            </div>
            <div class="form-group">
                <select class="form-control noBorder space" required>
                    <option value="" selected disabled>Fitness Level</option>
                    <option>LOW</option>
                    <option>MODERATE</option>
                    <option>HIGH</option>
                </select>
            </div>
            <div class="form-group">
                <select class="form-control noBorder space" required>
                    <option value="" selected disabled>Skill Level</option>
                    <option>LOW</option>
                    <option>MODERATE</option>
                    <option>HIGH</option>
                </select>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-search space">Search</button>
            </div>
        </form>
    <div class="container">
        <h2>Results:</h2>
        <b-card-group deck class="my-4 justify-content-between">
        <b-card no-body class="overflow-hidden" style="max-width: 1000px;">
            <b-row no-gutters class="align-items-center justify-content-between">
                <b-col md="7">
                    <b-card-img :src="require('../../assets/background.png')" alt="Image" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="5">
                    <b-card-body title="Name of the Boat">
                    <b-card-text>
                        <p>Brand: </p>
                        <p>Year: </p>
                        <p>Condition:</p>
                        <div class="row">
                            <div class="col">
                                <ModalMembers id="1" :team="true" :hideHeader="false" :hideFooter="true" name="Name" phone="+359-1233456" buttonText="Team" variant="outline-success" />
                            </div>
                            <div class="col">
                                <ModalMembers id="3" :team="false" :hideHeader="true" :hideFooter="false" buttonText="Reverse" variant="success"/>
                            </div>
                        </div>
                    </b-card-text>
                    </b-card-body>
                </b-col>
            </b-row>
        </b-card>
        <b-card no-body class="overflow-hidden" style="max-width: 1000px;">
            <b-row no-gutters class="align-items-center justify-content-between">
                <b-col md="7">
                    <b-card-img :src="require('../../assets/background.png')" alt="Image" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="5">
                    <b-card-body title="Name of the Boat">
                    <b-card-text>
                        <p>Brand: </p>
                        <p>Year: </p>
                        <p>Condition:</p>
                        <div class="row">
                            <div class="col">
                                <ModalMembers id="2" :team="true" :hideHeader="false" :hideFooter="true" name="Name" phone="+359-1233456" buttonText="Team" variant="outline-success" />
                            </div>
                            <div class="col">
                               <ModalMembers id="4" :team="false" :hideHeader="true" :hideFooter="false" buttonText="Reverse" variant="success"/>
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
</div>
</template>

<script>
import Navbar from '../Navbar.vue'
import ModalMembers from '../ModalReservation.vue'


export default {
    name: 'Registration',
    components: {
        Navbar,
        ModalMembers,
    },
    data () {
        return {
            date: null,
            options: {
            // https://momentjs.com/docs/#/displaying/
                format: 'DD.MM.YYYY h:mm',
                useCurrent: false,
                showClear: true,
                showClose: true,
                sideBySide: true,
            }
        
        }
    },
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
    margin: 3%;
}

.space{
    padding-left: 30px;
    padding-right: 30px;
}
</style>