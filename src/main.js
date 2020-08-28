import Vue from 'vue'
import App from './App.vue'
import VueSidebarMenu from 'vue-sidebar-menu'
import './styles/styles.scss'

Vue.config.productionTip = false

Vue.use(VueSidebarMenu)

new Vue({
  render: h => h(App),
}).$mount('#app')
