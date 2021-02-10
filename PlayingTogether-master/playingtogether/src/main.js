import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vueGeolocation from 'vue-browser-geolocation'
import * as VueGoogleMaps from 'vue2-google-maps'


Vue.config.productionTip = false
Vue.use(vueGeolocation)


Vue.use(VueGoogleMaps,  {
  load:{
    key:'AIzaSyCpKPsM0r9B2-3TB0OIVbkhE0oOwA84zBI'
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
