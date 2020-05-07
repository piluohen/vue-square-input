<template>
  <div id="app">
    <demo-vue-square-input></demo-vue-square-input>
  </div>
</template>

<script>
import DemoVueSquareInput from './components/demo/index.vue'

export default {
  name: 'app',
  components: {
    DemoVueSquareInput
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
