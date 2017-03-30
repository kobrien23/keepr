const actions = {
  create: 'Create',
  update: 'Update',
  remove: 'Remove',
  find: 'Find',
  findAll: 'Find All'
}

const models = {
  user: {
    name: 'User',
    endpoint: 'users',
    preventDefaultApi: true,
    useCustomRoutes: true
  },
  keep:{
    name: 'keep',
    endpoint: 'keep',
    preventDefaultApi: false,
    // useCustomRoutes: true
     },
  vault:{
    name: 'vault',
    endpoint: 'vault',
    preventDefaultApi: false,
    useCustomRoutes: true
     }
}


export  {
  actions,
  models
}