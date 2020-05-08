<template>
  <div class="vue-square-input-demo">
    <van-form>
      <div class="title">基本示例</div>
      <van-field label="验证码">
        <template #input>
          <vue-square-input v-model="code" :length="6"></vue-square-input>
        </template>
      </van-field>
      <van-field label="车牌号">
        <template #input>
          <vue-square-input v-model="lpn" :length="8"></vue-square-input>
        </template>
      </van-field>
      <div class="title">配置项</div>
      <van-field label="是否只读">
        <template #input>
          <van-radio-group v-model="readonly" direction="horizontal">
            <van-radio name="false">不只读</van-radio>
            <van-radio name="true">只读</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field label="长度">
        <template #input>
          <van-stepper v-model="length" step="1" min="1" max="10" />
        </template>
      </van-field>
      <van-field label="自定义">
        <template #input>
          <vue-square-input v-model="value" :length="length" :readonly="readonly === 'true'"></vue-square-input>
        </template>
      </van-field>
    </van-form>
  </div>
</template>
<script>
export default {
  name: 'demo-vue-square-input',
  data() {
    return {
      code: '',
      lpn: '豫A',
      value: '',
      length: 6,
      readonly: 'false'
    }
  },
  mounted() {},
  methods: {}
}
</script>
<style lang="scss">
.vue-square-input-demo {
  .van-field__label {
    display: flex;
    align-items: center;
    flex: inherit;
  }
  .title {
    padding: 10px 20px;
    background-color: #f8f8f8;
  }
}
</style>
