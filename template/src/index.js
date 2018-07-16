import 'normalize.css/normalize.css'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '~/App.vue'
import routes from '~/routes'
import store from './stores'
import api from './plugins/axios'

Vue.use(api)
Vue.use(VueRouter)
const router = new VueRouter({ routes })

/* eslint-disable */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
/* eslint-enable */
