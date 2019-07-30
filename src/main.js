import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import AOS from 'aos'
import * as VueGoogleMaps from 'vue2-google-maps'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'aos/dist/aos.css'
import './assets/css/main.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCO2eIb77Jx2F7rvxwDDVnSzpsAIqC8uMQ'
  }
});

new Vue({
  created () {
    AOS.init({
      // animate on scroll only performs animations once
      once: true
    })
  },
  router,
  render: h => h(App)
}).$mount('#app')
