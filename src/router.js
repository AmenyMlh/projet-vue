import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/login.vue'
import Register from './components/register.vue'
import Registergerant from './components/registergerant.vue'
Vue.use(Router)

export default new Router({
    mode:'history',
  routes:[
    { path: '/', component: Login },
    { path: '/gerant', component: Registergerant },
    { path: '/register', component: Register },
  ]
})
