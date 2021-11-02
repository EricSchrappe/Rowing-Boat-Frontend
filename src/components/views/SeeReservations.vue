<template>
    <div class="container mt-5">
        <h2 class="text-center my-5"><strong>See Reservations</strong></h2>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10 mr-5">
                    <p class="smallHeadline">21.10.2021</p>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-2 borderColStart align-self-center">
                    <img class="mt-2" src="../../assets/rowing_icon.png" alt="boat" style="max-height: 50px; max-width: 50px;">
                </div>
                <div class="col-lg-3 borderColMiddle align-self-center">
                    <p class="smallHeadline">Boat</p>
                    <p>Selected boat type</p>
                </div>
                <div class="col-lg-3 borderColEnd align-self-center">
                    <p class="smallHeadline">Class</p>
                    <p>Selected class</p>
                </div>
                <div class="col-lg-2 align-self-center ml-5">
                    <button :class="[tooLate ? 'btn btn-secondary btn-lg btn-block disabled' : 'btn btn-danger btn-lg btn-block']">Delete</button>
                </div>
            </div>
        </div>
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-lg-10 mr-5">
                    <p class="smallHeadline">18.10.2021</p>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-2 borderColStart align-self-center">
                    <img class="mt-2" src="../../assets/rowing_icon.png" alt="boat" style="max-height: 50px; max-width: 50px;">
                </div>
                <div class="col-lg-3 borderColMiddle align-self-center">
                    <p class="smallHeadline">Boat</p>
                    <p>Selected boat type</p>
                </div>
                <div class="col-lg-3 borderColEnd align-self-center">
                    <p class="smallHeadline">Class</p>
                    <p>Selected class</p>
                </div>
                <div class="col-lg-2 align-self-center ml-5">
                    <button :class="[tooLate ? 'btn btn-secondary btn-lg btn-block disabled' : 'btn btn-danger btn-lg btn-block']">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from "moment";

export default {
    name: 'SeeReservations',
    data () {
        return {
            tooLate: false,
        }
    },
    methods: {
        currentDate() {
            if(moment(new Date()).isAfter(moment("01.11.2021", 'DD.MM.YYYY'))){
                console.log(moment(new Date()).isAfter(moment("01.11.2021", 'DD.MM.YYYY')));
                this.looLate = !this.tooLate;
            } 
        }
    },
    beforeMount() {
        this.currentDate()
    },
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