import router from '../router'
import axios from 'axios'

let api = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 2000,
  withCredentials: true
})

// REGISTER ALL DATA HERE
let state = {
  user: {},
  myVaults: [],
  myKeeps: [],
  activeAdmins: [],
  loggedInUser: {},
  publicKeeps: [],
  activeKeep: {},
  activeVault: {},
  privateKeeps: [],

  //Dummy Data
  keeps: [
    {
    title: 'Learn to Draw',
    imgUrl: 'https://s-media-cache-ak0.pinimg.com/564x/b0/7f/71/b07f713b8fa296e871dd8c169ff86fd5.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis',
    keepCount: 100,
    shareCount: 300,
    viewCount: 900,
    author: 'JimyJonJones'
  }, {
    title: 'Build Beautiful sites',
    imgUrl: 'https://s-media-cache-ak0.pinimg.com/236x/1b/81/b4/1b81b4d253053096b4097c53929f04c3.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis, doloribus eveniet sapiente perferendis nobis aliquid, quasi ipsa a repudiandae quaerat quos ex quod nemo',
    keepCount: 100,
    shareCount: 300,
    viewCount: 900,
    author: 'JimyJonJones'
  }, {
    title: 'Learn to Draw',
    imgUrl: 'https://s-media-cache-ak0.pinimg.com/564x/c7/80/e3/c780e34c14258f4087df410f03d76e83.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatisconsectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis',
    keepCount: 100,
    shareCount: 300,
    viewCount: 900,
    author: 'JimyJonJones'
  }, {
    title: 'Build Beautiful sites',
    imgUrl: 'https://s-media-cache-ak0.pinimg.com/236x/1b/81/b4/1b81b4d253053096b4097c53929f04c3.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis, doloribus eveniet sapiente perferendis nobis aliquid, quasi ipsa a repudiandae quaerat quos ex quod nemo',
    keepCount: 100,
    shareCount: 300,
    viewCount: 900,
    author: 'JimyJonJones'
  }, {
    title: 'Learn to Draw',
    imgUrl: 'https://s-media-cache-ak0.pinimg.com/564x/b0/7f/71/b07f713b8fa296e871dd8c169ff86fd5.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis',
    keepCount: 100,
    shareCount: 300,
    viewCount: 900,
    author: 'JimyJonJones'
  }, {
    title: 'Build Beautiful sites',
    imgUrl: 'https://s-media-cache-ak0.pinimg.com/236x/1b/81/b4/1b81b4d253053096b4097c53929f04c3.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis, doloribus eveniet sapiente perferendis nobis aliquid, quasi ipsa a repudiandae quaerat quos ex quod nemo',
    keepCount: 100,
    shareCount: 300,
    viewCount: 900,
    author: 'JimyJonJones'
  }
  ],
  error: {}
}

let handleError = (err) => {
  state.error = err
}

export default {
  // ALL DATA LIVES IN THE STATE
  state,
  // ACTIONS ARE RESPONSIBLE FOR MANAGING ALL ASYNC REQUESTS
  actions: {

       initAuth: function () {
            console.info("initAuth inside new store triggered.")
            //   axios.get('/authenticate').then(function(res){
            api.get('http://localhost:3000/authenticate').then(function (res) {
                console.log("This is res: ", res)
                state.user = res.data.data
            }).catch(function (error) {
                console.log("in catch.")
                // router.push('/login/')
            })
        },

           //REGISTER - LOGIN - LOGOUT - AUTHENTICATION
        register(body) {
            api.post('http://localhost:3000/register', body)
                .then(res => {
                  console.log(res)
                  console.log(body)
                    state.user = res.data.data
                    // Materialize.toast('You successfully registered', 4000)
                    return router.push('/login')
                }).catch(handleError)
        },
        logIn(user) {
            api.post('http://localhost:3000/login', user).then(res => {
                // state.loggedInData = res.data
                if (res.data.data) {
                  console.log("logged in")
                    state.loggedInUser = res.data.data
                    state.user = res.data.data
                    return router.push('/dashboard')
                } else if (!res.data.data.admin) {
                  console.log('not going to work')
                    // Materialize.toast('You do not have Administrative Permissions', 6000)
                }
            }).catch(err => {
                if (state.loggedInData.error == "Invalid Email or Password") {
                  console.log("Invalid")
                    // Materialize.toast(state.loggedInData.error, 6000)
                } 
                else { 
                       console.log("this is the else... what is it")
                    // Materialize.toast("Must Provide Email and Password", 6000)
                    // Materialize.toast("You may need to Register", 4000)
                }
                // If you need to call a function from a component use below method
                // router.getMatchedComponents('/AdminLogin')[0].methods.afterLogIn(state.loggedInData)
            }, handleError)
        },

        
        returnPublicKeeps(){
          return state.publicKeeps;
        },

        getPublicKeeps(){
          console.log('getting public keeps')
            api.get('http://localhost:3000/api/keep').then(res => {
              console.log('got public keeps', res.data)
              state.publicKeeps = res.data.data
              console.log('public keeps   ', state.publicKeeps)
              this.returnPublicKeeps()
            }).catch(handleError)
        },
        makeNewKeep(body){
          console.log(body)
          body.userId=state.user._id
          console.log(body.userId)
          api.post('http://localhost:3000/api/keep', body)
            .then(res => {
              state.activeKeep=res.data.data
              console.log('id',state.activeKeep._id)
              this.updateActiveVault(state.activeVault)
              this.getPublicKeeps()


            })
             .catch(handleError)
        },
        changeActiveVault(vault){
          state.activeVault = vault
          console.log(state.activeVault)
        },

        updateActiveVault(vault){
          state.activeVault = vault
          console.log(state.activeKeep._id)
          state.activeVault.keeps.push(state.activeKeep._id)
          api.put('http://localhost:3000/api/vault/' + vault._id, state.activeVault)
          .then(res => {
            console.log("updated server")
          })
          .catch(handleError)
        },


        showMyKeeps(){
          console.log("showmyKeeps")
          let myKeeps = []
          state.keeps.forEach(function(element) {
           if (element.user===state.user._id){
              myKeeps.push(element)
           }
          })
          state.myKeeps = myKeeps;
        },
        makeNewVault(body){
          console.log("making new vault")
          body.userId=state.user._id
          api.post('http://localhost:3000/api/vault', body)
            .then(res => {
              this.getMyVaults()
              return router.push('/vault')
            })
             .catch(handleError)
        },
        getMyVaults(){
          api.get('http://localhost:3000/api/vault')
          .then(res => {
              state.myVaults = res.data.data
            }).catch(handleError)
               console.log(this.myVaults)
         },
         returnActiveVault(){
          return state.activeVault;
        },
        returnPrivateKeeps(){
          console.log("running?", state.privateKeeps)
          return state.privateKeeps
        },

        getPrivateKeeps(){
          console.log('getting private keeps', state.activeVault._id)

            api.get('http://localhost:3000/api/privatevault/'+ state.activeVault._id)
            .then(res => {
              console.log('got private vault', res.data)
              state.activeVault = res.data.data
              console.log(state.activeVault.keeps)
              state.privateKeeps= state.activeVault.keeps
              this.returnPrivateKeeps()
            }).catch(handleError)
        },
        addLikeCount(keep){
          keep.likes++
        console.log("store keep object", keep)
        api.put('http://localhost:3000/api/keep/'+ keep._id, keep)
        .then(res => {
          console.log(res.data.data)
          state.activeKeep=keep
          console.log("s.ak", state.activeKeep)
          this.getPublicKeeps()
        })
      },
      deleteKeep(keep){
        console.log("deleting keep object", keep)
        api.delete('http://localhost:3000/api/keep/'+ keep._id, keep)
        .then(res => {
          console.log("delete",res.data.data)
           state.activeKeep=keep
          console.log("s.ak", state.activeKeep)
          this.getPublicKeeps()
      })
      },



  }
}

