<template>  
    <div class="dashboard">
        <h3> {{msg}} </h3>




        <div class="publicKeeps" v-for="keep in keeps" >
<div class="card">
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

