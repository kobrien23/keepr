<template>  
    <div class="dashboard">
        <h3> {{msg}} </h3>

<h5>{{activeVault.name}}</h5>
     
<router-link :to="'/AddNewKeep'">
  <p>Add new keep</p>
</router-link>

<router-link :to="'/AddNewVault'">
  <p>Add new Vault</p>
</router-link>

        <div class="privateKeeps card grow" v-for="keep in keeps" >
            <div>{{keep.title}}</div>
            <div> click to like:   
            <i class="material-icons" @click="addLikeCount(keep)">thumb_up</i>
            {{keep.likes}}
            </div>
            <img v-bind:src="keep.imageUrl" width="75%" />
               <button v-on:click="deleteKeep(keep)">Get rid of it</button>
        </div>


    </div>


</template>

<script>   

  export default {
    name: 'dashboard',
    data() {
      return {
        
        msg: 'Welcom to your private vault: ',
        myVaults: this.$root.store.state.myVaults,
        activeVault: this.$root.store.state.activeVault,
      }
    },
     mounted: function () {
      this.$root.$data.store.actions.getPrivateKeeps()
     

     this.$root.$data.store.actions.returnActiveVault()
     this.activeVault=this.$root.store.state.activeVault
     },
     computed:{
         keeps(){
         return  this.$root.$data.store.actions.returnPrivateKeeps() 
         }
     },
     methods: {
         addLikeCount(keep){
     console.log(keep.title)
    // this.activeKeep = keep
    // this.likeCount=this.likeCount + 1
    // this.activeKeep.likes=this.likeCount
    this.$root.$data.store.actions.addLikeCount(keep)
   },
   deleteKeep(keep){
     console.log(keep.title)
     this.$root.$data.store.actions.deletePrivateKeep(keep)
   }
     }
  }
  </script>

<style scoped> 

.grow{
    margin: 0px;
    font-size: 20px;
    border: 1px solid grey;
}

</style>