import VueSquareInput from './vue-square-input'

const install = Vue => {
  Vue.component(VueSquareInput.name, VueSquareInput)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export { VueSquareInput }

export default { install }
