<template>

    <div class="container">

    <form class="col s12" @submit.prevent="makeNewVault()">
      <div class="row">
        <div class="input-field col s6 offset-s3 offset-s3">
          <input v-model="newVault" type="text" name="addNewVault" placeholder="New vault name" class="validate">
        <!--  <input v-on="newKeepImg" type="file"  > -->
           <button  class="waves-effect waves-light btn ">Submit New Vault</button>
        </div>
      </div>
</form>
</div>


</template>

<script>    

  export default {
    name: 'AddNewVault',
    data() {
      return {
        msg: '',
       newVault: ''
      }
    },
    methods: {
       makeNewVault: function() {
            var body = {
            name: this.newVault,
            // userId: this.$root.$data.state.user._id,
            }
            console.log("new keep: ",this.newVault);
            this.$root.$data.store.actions.makeNewVault(body)
          
  }
 }
}


</script>