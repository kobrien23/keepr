<template>
  <div id="app">
 <nav>
    <div class="nav-wrapper">
      <a href="" class="brand-logo center"> <img src="./assets/logo.jpg"  width="75%"></a>
      <ul id="nav-mobile" class="right">
     
 <li>   <router-link class="navigate" :to="'/vault'">Vault</router-link> </li>
    
     <li>     <router-link class="navigate" :to="'/dashboard'">Dashboard  </router-link> </li>
    
       
      </ul>
    </div>
  </nav>



    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'app',
  mounted: function () {
              this.$root.$data.store.actions.initAuth()
            }
}
</script>

<style scope>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav{
  height: 120px;
}

.brand-logo{
  
  margin-top: 10px;
  margin-bottom: 5px;
}
.navigate{
  color: white;
  font-size: 26px;
  margin-top: 25px;
  margin-right: 15px;
}
</style>
