<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
    import store from './store/index.js';
    export default { 
        store: store,
        name: 'app'
    }
</script>


<style>
html, body {
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
