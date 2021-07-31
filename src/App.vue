<template>
<div class="mb-5">
  <div id="nav" class="md:pt-10 flex justify-between font-bold m-5 md:grid md:grid-cols-3">
    <router-link to="/">nocodes</router-link> 
    <router-link to="/about">About me</router-link>
  </div>
  <router-view />
</div>
</template>

<script>
export default {
  name:'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
 
}
#nav{
  color:#2c3e50;
}


#nav a.router-link-exact-active {
  color: #477962;
}
</style>
