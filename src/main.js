import Vue from 'vue'
import App from './App.vue'
import VueSidebarMenu from 'vue-sidebar-menu'
import { BootstrapVue } from 'bootstrap-vue'
import VueRouter from './plugins/router'
import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'


import './styles/styles.scss'

const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000/',
  headers: {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmN2Q3YzcxMTk5MWNkMzY4Y2YzZGNlNCIsImlhdCI6MTYwMjA1OTU1OSwiZXhwIjoxNzAyMDcxNTU5fQ.T5dvW1Hx0WZYjTkLA3nzcRJAkKUFKwrwPlNEcvqHW1A"
}});

Vue.config.productionTip = false

Vue.use(VueSidebarMenu)
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

new Vue({
  router: VueRouter,
  apolloProvider,
  render: h => h(App),
}).$mount('#app')
