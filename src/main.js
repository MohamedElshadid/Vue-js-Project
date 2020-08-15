import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './routes'

Vue.use(VueRouter);
import vuetify from './plugins/vuetify' 
const router = new VueRouter({
  mode:'history',
  routes
});

new Vue({
  el: '#app',
  router,
  vuetify,
  render: h => h(App)
})
