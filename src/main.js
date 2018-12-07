import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//fa字体包
import 'font-awesome/scss/font-awesome.scss'
//
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)
//bootstrap

import 'bootstrap/dist/css/bootstrap.min.css'
import * as uiv from 'uiv'
Vue.use(uiv)
/**引入字体图标库**/
//import "./assets/css/font-awesome.min.css"
import "./assets/css/weui.css"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
