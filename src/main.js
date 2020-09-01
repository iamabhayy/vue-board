import Vue from 'vue'
import App from './App.vue'
import VueSidebarMenu from 'vue-sidebar-menu'
import VueRouter from './plugins/router'

import './styles/styles.scss'
Vue.config.productionTip = false

Vue.use(VueSidebarMenu)
Vue.use(VueRouter)

new Vue({
  router: VueRouter,
  render: h => h(App),
}).$mount('#app')
