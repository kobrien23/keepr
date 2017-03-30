import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import Vault from '@/components/Vault'
import AddNewKeep from '@/components/AddNewKeep'
import AddNewVault from '@/components/AddNewVault'
import PrivateVault from '@/components/PrivateVault'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
        {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/vault',
      name: 'Vault',
      component: Vault
    },
    {
      path: '/AddNewKeep',
      name: 'AddNewKeep',
      component: AddNewKeep
    },
    {
      path: '/AddNewVault',
      name: 'AddNewVault',
      component: AddNewVault
    },
    {
      path: '/PrivateVault',
      name: 'PrivateVault',
      component: PrivateVault
    },
  ]
})
