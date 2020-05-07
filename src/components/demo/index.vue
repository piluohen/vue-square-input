<template>
  <div class="vue-square-input-demo">
    <vue-square-input v-model="value" :length="length" :readonly="readonly"></vue-square-input>
  </div>
</template>
<script>
export default {
  name: 'demo-vue-square-input',
  data() {
    return {
      value: '豫A',
      length: 8,
      readonly: false
    }
  },
  mounted() {},
  methods: {}
}
</script>
<style lang="scss">
.vue-square-input-demo {
  padding: 20px 10px;
}
</style>
