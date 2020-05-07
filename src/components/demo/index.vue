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
  methods: {
    handleCheck(data) {}
  }
}
</script>
