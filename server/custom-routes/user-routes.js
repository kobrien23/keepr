let Keeps = require('../models/keep')


export default {
   publicKeeps: {
    path: '/publicKeeps',
    reqType: 'get',
    method(req, res, next) {
      if (!req.session.uid) {
        return res.status(401).send(handleResponse(null, null, new Error("User Not Authenticated")))
      }
      let action = 'Find public Keeps'
      Keeps.find({ public: true })
        .then(data => {
          res.send(handleResponse(action, data))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
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