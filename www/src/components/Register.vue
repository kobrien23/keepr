<template>  

<div class="register-container">
<h1>Welcome to KO Keepr Register</h1>

<form @submit.prevent="register" >
email: <input type="email" v-model="email" required>
password: <input type="password" v-model="password" required>
name: <input type="text" v-model="name" required><br>
<button type="submit">submit register</button>
{{email}}




</form>



</div>


</template>

<script>    

export default {
    name: 'register',
    data(){
          return {
      email: '',
      password: '',
      name: ''

    }

    },
    methods: {
        logIn(email, pw) {
               var user = {
                    email: email,
                    password: pw
                }
                this.$root.$data.store.actions.logIn(user)
            },
        },
        computed: {
            admin() {
                return this.$root.$data.store.state.activeAdmin
            },
            loggedInData() {
                return this.$root.$data.store.state.loggedInData

            }
        }
}


</script>