<template>
  <div id="app">
    
      <div class="main-container">
      <router-link to="/">
        <img class="logo" src="@/img/Logo.png" alt="logo">
      </router-link> 
      <Home/>
      </div> 
 
  </div>
</template>

<script>
import Home from "./views/Home.vue"
export default {
  
  components: {
    Home,
  }
}
</script>

<style lang="scss">
body{
  background-color: $main-color;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.main-container{
  padding: 50px 103px;
}
.logo{
  display: block;
  width: 60px;
  height: 60px;
  margin: 0 auto;

}
</style>
