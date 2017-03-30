<template>
  <div id="app">
    <router-link :to="'/vault'">Vault</router-link>
    <router-link :to="'/'">
        <img src="./assets/logo.jpg">
    </router-link>
    
      <router-link :to="'/dashboard'">Dashboard  </router-link>

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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
