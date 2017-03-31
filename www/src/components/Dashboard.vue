<template>  
    <div class="dashboard">
        <h3> {{msg}} </h3>

<router-link :to="'/AddNewKeep'">
  <p>Add new keep</p>
</router-link>

<router-link :to="'/AddNewVault'">
  <p>Add new Vault</p>
</router-link>


<div class="container">
<div class="row  ">
     <div class="publicKeeps  flexbx" v-for="keep in keeps" >
       <div class="card boxing col s3">
            <div>{{keep.title}}</div>
              <div> click to like:   
              <i class="material-icons" @click="addLikeCount(keep)">thumb_up</i>
              {{keep.likes}}
              </div>
              <img :src="keep.imageUrl"  width="75%"/>
             <button v-on:click="deleteKeep(keep)">Get rid of it</button>
            </div>
       </div>
    </div>
</div>
  </div>

</template>

<script>    
  export default {
    name: 'dashboard',
    data() {
      return {
        msg: 'Welcome to The publicKeeps Dashboard',
        keepShareCount: 0,
        activeKeep: '',
        
      }
    },
 mounted: function () {
   console.log('mounting')
      this.$root.$data.store.actions.getPublicKeeps()
      },

 computed:{
    keeps(){
      return this.$root.$data.store.actions.returnPublicKeeps()
      console.log('getting keeps')
    // return this.$root.data.store.actions.returnPublicKeeps
    }
    // likeCount(){
    //   return this.$root.$data.store.actions.getLikes()
    // }

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
     this.$root.$data.store.actions.deleteKeep(keep)
   }
 },



  
  }

</script>

<style scoped> 




.boxing{
 
  height: 250px;
}

</style>
