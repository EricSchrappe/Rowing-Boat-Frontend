<template>
    <div class="container">
        <h2 class="center"><strong>Update Boat</strong></h2>
        <form>
        <div class="row align-items-center justify-content-center">
            <div class="col align-self-start">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" aria-describedby="nameHelp" placeholder="Name">
                </div>
                <div class="form-group">
                    <label for="brand">Brand</label>
                    <input type="text" class="form-control" id="brand" aria-describedby="brandHelp" placeholder="Brand">
                </div>
                <div class="form-group">
                    <label for="year">Year</label>
                    <input type="text" class="form-control" id="year" aria-describedby="yearHelp" placeholder="Year">
                </div>
                <div class="form-group">
                    <label>Condition</label>
                    <select class="form-control" required>
                        <option value="" selected disabled>Condition</option>
                        <option value="">BAD</option>
                        <option value="">USED</option>
                        <option value="">NEW</option>
                    </select>
                </div>
                <div class="form-group mb-3">
                    <label for="formFile" class="form-label">Please upload the image here</label>
                    <input class="form-control" type="file" id="formFile">
                </div>
            </div>
        </div>
        <button class="btn btn-success btn-block mt-5" type="submit">Save &amp; Exit</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'BoatUpdate',
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
</style>