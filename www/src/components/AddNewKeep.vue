<template>

    <div class="container">

    <form @submit.prevent="makeNewKeep">
        <!--<div class="input-field col s6 offset-s3 offset-s3">-->
<div class="card">
          <input v-model="newKeepTitle" type="text" name="addNewKeep" placeholder="New keep title" class="validate">
      <input v-model="newKeepImg" type="text" name="newKeepImg" placeholder="New keep image url" >
     <input type="checkbox" id="private" value="true" v-model="public">
      <label for="private">Check to Make Public/ UnCheck to make Private</label>
      <br>
      <br>
     </div>
<br>
      <div class="row" display="center">
          <div class="col s6 grow">
          <a>Your list of vaults</a>
            <ul >
              <li class="card grow" v-for="vault in myVaults" @click.capture="A_Clicked(vault)" v-model='vault.name'>{{vault.name}}</li>
            </ul>
          </div>
       </div>

           <button class="waves-effect waves-light btn ">Add new keep</button>
   <!--   </div>
     -->
    </form>


     <!--  <div class="col s4">
              <h4 v-if="myVaults.length > 1">{{myVaults[0].name}}</h4>
           </div>  -->




</div>


</template>


<script>    
  export default {
    name: 'AddNewKeep',
    data() {
      return {
     msg: 'make a new Keep',
     newKeepTitle: '',
     newKeepImg: '',
     myVaults: this.$root.store.state.myVaults,
     vaultId: '',
     keepId: '',
     public: true,
     activeKeep: this.$root.$data.store.state.activeKeep,
     activeVault: {}
     }
    },
    methods: {
       makeNewKeep: function() {
         console.log("makePrivate", this.makePrivate)
            var body = {
            title: this.newKeepTitle,
            imageUrl: this.newKeepImg,
            public: this.public,
            }
            console.log("body", body);
            this.$root.$data.store.actions.makeNewKeep(body,this.vault)
          },
     makePrivate: function(){
        this.public= false
      },

      A_Clicked: function (vault){
        console.log("clicked", vault._id)
        this.activeVault= vault
        console.log("active vault", this.activeVault.name)
        this.$root.$data.store.actions.updateActiveVault(vault)
        // make the keepId push to the vault.keeps
        // vaultId = myVaults.
      },
    },
    computed: {
      addKeepToVault() {
          console.log(this.activeKeep._id, "activekeeps")
      },
      // reloadPublic(){
      //    this.public= ''
      // }
    },

}  
 

</script>
<style scoped> 

.grow{
    margin: 0px;
    font-size: 20px;
    border: 1px solid grey;
    display: center;
}

</style>