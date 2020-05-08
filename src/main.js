import Vue from 'vue'
import App from './App.vue'
import packages from '../packages'
// import Vconsole from 'vconsole'
// 全局引入按需引入UI库 vant
import Vant from '@/plugins/vant'

Vue.config.productionTip = false
Vue.use(Vant)
Vue.use(packages)

// let vConsole = new Vconsole()
// Vue.use(vConsole)

new Vue({
  render: h => h(App)
}).$mount('#app')
