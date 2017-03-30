<template>  
<div class="vault">
<h3> {{msg}} "{{name}}"</h3>
  


        <div class="row">
          <div class="col s12 vault">
  <h5>Click on the vault name to go to the private vault</h5>
            <ul >
              <li class="card grow" v-for="vault in myVaults" @click="openClicked(vault)" v-model='vault.name'>>>>{{vault.name}} >>>> {{vault.keeps.length}}</li>
            </ul>
          </div>
        </div>

<router-link :to="'/AddNewKeep'">
  <p>Add new keep</p>
</router-link>

<router-link :to="'/AddNewVault'">
  <p>Add new Vault</p>
</router-link>
            
            
            
            
<!--           <div class="myVaults card">
                    <span  v-for="vault in this.$root.store.state.myVaults">  
                       <div>{{vault.name}}</div> -->
            <!--       <div>{{keep.title}}</div>
                        <img v-bind:src='keep.imgUrl' />    -->
 <!--               </span>           
              </div>  -->


</div>


</template>


<script>    
 import AddNewKeep from './AddNewKeep.vue'
 import router from '../router'

  export default {
    name: 'vault',
    data() {
      return {
        msg: 'Welcome to your Vaults',
        name: this.$root.store.state.user.name,
        
      }
    },
   mounted(){
    this.$root.store.actions.getMyVaults()
    // console.log(myVaults)
   },
   methods: {
   openClicked: function (vault){
    console.log("clicked", vault._id)
        // this.activeVault= vault
        this.$root.$data.store.actions.changeActiveVault(vault)
        return router.push('/PrivateVault')
   }
 },
  computed:{
    myVaults(){
    return this.$root.store.state.myVaults
    }
  }
 }
  
 

</script>

<style scoped>
  #scale-demo {
    position: fixed;
    right: 5px;
    bottom: 5px;
  }
  
  .flexing {
    display: flex;
    justify-content: space-around;
  }
  
 
.grow{
    margin: 0px;
    font-size: 20px;
    border: 1px solid grey;
}

.vault{
  display: center;
}
</style>

  
  