// let Keeps = require('../models/keep')
let Vaults = require('../models/vault')

export default {
   privateVault: {
    path: '/privatevault/:id',
    reqType: 'get',
    method(req, res, next) {
        console.log('in a custom route ')
      let action = 'get private keeps from one vault'
      Vaults.findById(req.params.id).populate('keeps')
      .exec(function(err, vault){
          if(err){
              console.log(err)
          }else{
          res.send(handleResponse(action, vault))
          }
      })
      
      }

//       Keeps.find({ public: true })
//         .then(data => {
//         }).catch(error => {
//           return next(handleResponse(action, null, error))
//         })
    }
  }



function handleResponse(action, data, error) {
    var response = {
      action: action,
      data: data
    }
    if (error) {
      response.error = error
    }
    return response
  }