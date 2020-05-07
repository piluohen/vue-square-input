import Vue from 'vue'
import App from './App.vue'
import packages from '../packages'
import Vconsole from 'vconsole'

Vue.config.productionTip = false
Vue.use(packages)

let vConsole = new Vconsole()
Vue.use(vConsole)

new Vue({
  render: h => h(App)
}).$mount('#app')
