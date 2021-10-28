<template>
<div class="form-container">
    <div class="image-holder"></div>
    <form method="post">
        <p>Welcome back</p>
        <h2><strong>Log in your account</strong></h2>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Password">
        </div>
        <button class="btn btn-success btn-block" type="submit">Login</button>
        <p class="no">Don't have an account?</p>
        <router-link to='/register' tag="button" class="btn btn-secondary btn-block">Register</router-link>
    </form>
</div>

</template>

<script>
export default {
    name: 'Login'
}
</script>

<style scoped>

.image-holder {
    display: table-cell;
    width: auto;
    background: url('../../assets/login.png');
    background-size: cover
}

.form-container {
    display: table;
    width: 100%;
    height: inherit;
    margin: 0 auto;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1)
}

form {
    display: table-cell;
    vertical-align: middle;
    width: 45%;
    background-color: #ffffff;
    padding: 40px 60px;
    color: #505e6c
    
}

form h2 {
    font-size: 24px;
    line-height: 1.5;
    margin-bottom: 60px
}

form .no {
    display: block;
    text-align: left;
    font-size: 12px;
    color: #6f7a85;
    opacity: 0.9;
    text-decoration: none
}

form button  {
    margin: 3% 0 5% 0;
}
</style>
