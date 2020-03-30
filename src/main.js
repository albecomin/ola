import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import "bootstrap/dist/css/bootstrap.css"


import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from "./components/Home"
import Bio from "./components/Bio"
import Works from "./components/Works"
import About from "./components/About"

const router = new VueRouter({
  routes: [
    {
      path: "*",
      name: "home",
      component: Home
    },
    {
      path: "/works",
      name: "works",
      component: Works
    },
    {
      path: "/bio",
      name: "bio",
      component: Bio
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
  ]
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
