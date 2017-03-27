<template>  
<div class="dashboard">
<h3> {{msg}} </h3>

<div class="myKeeps" v-for="keep in this.$root.store.state.keeps">
<div>{{keep.title}}</div>
<img v-bind:src=keep.imgUrl>
</div>





</div>


</template>

<script>    
  export default {
    name: 'dashboard',
    data() {
      return {
        msg: 'Welcome to The KO Keepr Dashboard'
      }
    },
    // mounted: function () {
    //   // this.$root.$data.store.actions.checkAuth()
    //   this.$root.$data.store.actions.getVault()
    //   this.$root.$data.store.actions.getUserVault(this.$root.store.state.user._id)
    // }
  }

</script>

