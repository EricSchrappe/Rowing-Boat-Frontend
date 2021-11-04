<template>
     <div class="container mt-5">
        <h2 class="text-center my-5"><strong>Requested Reservations</strong></h2>
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-lg-3 borderColStart align-self-center">
                    <p class="smallHeadline">Name</p>
                    <p>Mario</p>
                </div>
                <div class="col-lg-3 borderColEnd align-self-center">
                    <p class="smallHeadline">Last Name</p>
                    <p>Rossi</p>
                </div>
                <div class="col-lg-2 align-self-center ml-5">
                    <button class="btn btn-success btn-lg btn-block">Accept</button>
                </div>
                <div class="col-lg-2 align-self-center ml-5">
                    <button class="btn btn-danger btn-lg btn-block">Decline</button>
                </div>
            </div>
        </div>
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-lg-3 borderColStart align-self-center">
                    <p class="smallHeadline">Name</p>
                    <p>Mario</p>
                </div>
                <div class="col-lg-3 borderColEnd align-self-center">
                    <p class="smallHeadline">Last Name</p>
                    <p>Rossi</p>
                </div>
                <div class="col-lg-2 align-self-center ml-5">
                    <button class="btn btn-success btn-lg btn-block">Accept</button>
                </div>
                <div class="col-lg-2 align-self-center ml-5">
                    <button class="btn btn-danger btn-lg btn-block">Decline</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AdminReservation'
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

.borderColEnd{
    border: 1px solid grey;
    border-left: 0;
    border-radius: 0px 8px 8px 0px;
    padding: 10px 10px 5px 0px;
}
</style>