<template>
  <div class="hello">

  
  <div class="card">
  <div class="col s6">
    <h1 class="blue-text text-darken-2">Welcome to KO Keepr</h1>
    
    <p> </p>
    <ul>
      <li><router-link class="login blue-text text-darken-2" to='/login'>Login</router-link></li>
      <li><router-link class="login blue-text text-darken-2" to='/register'>Register</router-link></li>
    </ul>
    <hr>
   </div>
   </div>
    
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.login{
  color: blue;
  font-size: 26px;
}
</style>
