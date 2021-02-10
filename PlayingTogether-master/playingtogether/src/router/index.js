import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Join from '../views/Join.vue'
import Host from '../views/Host.vue'
import Game from '../views/Game.vue'
import Account from '../views/Account.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Join',
    name: 'Join',
    component: Join,
    beforeEnter: (to,from,next) => {
      if(sessionStorage.getItem('user')==null){
        if(sessionStorage.getItem('page')=='Home'){
          document.querySelector('#signinButton').style.background = 'red';
          alert("Please sign in below or create an account in the ACCOUNT section !");
        }
        else if (sessionStorage.getItem('page')=='Account')
          alert("Please sign in or create an account below");
          return
      }
      next(true);
    }
    }, 
  {
  path: '/host',
    name: 'Host',
    component:Host,
    beforeEnter: (to,from,next) => {
      if(sessionStorage.getItem('user')==null){
        if(sessionStorage.getItem('page')=='Home'){
          document.querySelector('#signinButton').style.background = 'red';
          alert("Please sign in below or create an account in the ACCOUNT section !");
        }
        else if (sessionStorage.getItem('page')=='Account')
          alert("Please sign in or create an account below");
          return
      }
      next(true);
    }
    },
  {
    path: '/game',
      name: 'Game',
      component: Game,
      beforeEnter: (to,from,next) => {
        if(sessionStorage.getItem('user')==null){
          if(sessionStorage.getItem('page')=='Home'){
            document.querySelector('#signinButton').style.background = 'red';
            alert("Please sign in below or create an account in the ACCOUNT section !");
          }
          else if (sessionStorage.getItem('page')=='Account')
            alert("Please sign in or create an account below");
            return
        }
        next(true);
      }
  },

  {
    path: '/account',
      name: 'Account',
      component: Account,
  }

]

const router = new VueRouter({
  routes
})

export default router
