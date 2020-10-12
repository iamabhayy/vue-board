import Vue from 'vue'
import App from './App.vue'
import VueSidebarMenu from 'vue-sidebar-menu'
import { BootstrapVue } from 'bootstrap-vue'
import VueRouter from './plugins/router'
import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'


import './styles/styles.scss'

const token = localStorage.getItem('GQ_AUTH_TOKEN')
const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000/',
  headers: {
    "token": token || ''
  }
})


Vue.config.productionTip = false

Vue.use(VueSidebarMenu)
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

const  userId = localStorage.getItem('GQ_USER_ID')

VueRouter.beforeEach((to, from, next) => {
 
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !userId) {
    next('/login');
  } else if (requiresAuth && userId) {
    next();
  } else {
    next();
  }
});

new Vue({
  router: VueRouter,
  apolloProvider,
  data: {
    userId
  },
  render: h => h(App),
}).$mount('#app')
