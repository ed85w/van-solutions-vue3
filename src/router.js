import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Service from './views/Service.vue'
import Security from './views/Security.vue'
import Parts from './views/Parts.vue'
import Contact from './views/Contact.vue'
import orangeFooter from './components/FooterOrange.vue'
import greyFooter from './components/FooterGrey.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: Home,
        pageFooter: orangeFooter
      }
    },
    {
      path: '/about',
      name: 'about',
      components: {
        default: About,
        pageFooter: greyFooter
      }
    },
    {
      path: '/service',
      name: 'service',
      components: {
        default: Service,
        pageFooter: orangeFooter
      }
    },
    {
      path: '/parts',
      name: 'parts',
      components: {
        default: Parts,
        pageFooter: orangeFooter
      }
    },
    {
      path: '/security',
      name: 'security',
      components: {
        default: Security,
        pageFooter: orangeFooter
      }
    },
    {
      path: '/contact',
      name: 'contact',
      components: {
        default: Contact
        // no footer
      }
    },
  ]
})
