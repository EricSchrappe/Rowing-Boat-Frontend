<template>
    <div>
        <Navbar />
        <div class="container-one-third-header"></div>
        <div class="container-header">Boat Management</div>
        <div class="container">
            <div class="row justify-content-between row-style">
                <div class="col-8 align-self-center">
                    <h4 class="mt-1"><strong>Please add new boats here</strong></h4>
                </div>
                <div class="col-4">
                    <router-link to="/admin/management/add" tag="button" class="btn btn-block btn-success">Add</router-link>
                </div>
            </div>
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
                                <div class="col mt-2">
                                    <router-link to="/admin/management/update" tag="button" class="btn btn-warning">Update</router-link>
                                </div>
                                <div class="col mt-2">
                                    <ModalMembers id="1" :team="false" :hideHeader="true" :hideFooter="false" buttonText="Delete" variant="danger" modulVariant="danger" alertText="Are you sure you want to delete the boat?" modulButtonText="Delete"/>
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
                                <div class="col mt-2">
                                    <router-link to="/admin/management/update" tag="button" class="btn btn-warning">Update</router-link>
                                </div>
                                <div class="col mt-2">
                                    <ModalMembers id="2" :team="false" :hideHeader="true" :hideFooter="false" buttonText="Delete" variant="danger" modulVariant="danger" alertText="Are you sure you want to delete the boat?" modulButtonText="Delete"/>
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
</template>

<script>
import Navbar from '../Navbar.vue'
import ModalMembers from '../ModalReservation.vue'

export default {
    name: 'BoatManagement',
    components: {
        Navbar,
        ModalMembers,
    },
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