<template>
    <transition name="modal" @click.delete="showModal()">
        <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-container">
                <div class="modal-header">
                    <div class="row">
                        <div class="col s4">
                            <h3>{{ myVaults }}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
          <div class="col s3">
            <ul >
              <li v-for="vault in myVaults" @click.capture="A_Clicked(vault)" v-model='vault.name'>{{vault.name}} ></li>
            </ul>
          </div>
        </div>


        
            <button type="submit" @click.prevent="text" class="col s4 waves-effect waves-teal btn-flat">Choose Vault</button>
        <input type="text" placeholder="Days to Completion" class="col s4" v-model="daysPriceCustom">

        <div class="modal-body row">
            <button class="waves-effect waves-teal btn-flat" @click="showModal()">Close</button>
        </div>
    <br>
        <br>
            <br>
              
      </div>
   </div>
  </div>
    
</template >

<script>    

 export default {
    name: 'vaultmodal',
    data() {
      return {
     msg: 'modal',
     myVaults: this.$root.store.state.myVaults,
     vaultId: '',
     keepId: '',
     makePrivate: false,
     activeKeep: this.$root.$data.store.state.activeKeep
     }
   },
   methods: {
                text: function (vault) {
                if (vault._id == "On Bench") {
                    var body = {
                        to: "208-250-1154",
                        body: "Your " + this.modalJob.make + " " + this.modalJob.model + " has hit the bench and is now being worked on!"
                    }
                    this.$root.store.actions.sms(body)
    }
   }

</script>