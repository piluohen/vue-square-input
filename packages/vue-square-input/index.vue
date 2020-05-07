<template>
  <div class="vue-square-input">
    <div class="vue-square-input_list">
      <div
        class="vue-square-input_item"
        :style="itemStyle"
        v-for="(item, index) in list"
        :key="index"
        @click="handleItemClick(item, index)"
      >
        <span v-show="item">{{ item }}</span>
        <span v-show="model.length === index && showCursor" class="vue-square-input_cursor"></span>
      </div>
    </div>
    <input
      ref="input"
      class="vue-square-input_input"
      type="text"
      v-model="model"
      :maxlength="maxlength"
      :readonly="readonly"
      @focus="handleFocus"
      @blur="handleBlur"
      @keydown="handleKeyup"
      @keyup="handleKeyup"
    />
  </div>
</template>
<script>
export default {
  name: 'VueSquareInput',
  props: {
    value: {
      type: String,
      default: ''
    },
    length: {
      type: Number,
      default: 6
    },
    isUpperCase: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showCursor: false,
      oldVal: this.value
    }
  },
  computed: {
    itemStyle() {
      return {
        width: `${100 / this.length}%`
      }
    },
    maxlength() {
      return this.length
    },
    model: {
      get() {
        return this.value || ''
      },
      set(val) {
        const value = this.isUpperCase ? val.toUpperCase() : val
        this.$emit('input', value)
        if (value.length === this.length) {
          this.$emit('complete', value)
        }
      }
    },
    list() {
      let values = this.model.split('')
      return [...values, ...this.createArray(this.length - values.length)]
    }
  },
  methods: {
    /**
     * focus事件
     */
    handleFocus() {
      if (!this.readonly) {
        this.showCursor = true
      }
    },
    /**
     * blur事件
     */
    handleBlur() {
      this.showCursor = false
    },
    /**
     * 监听删除键
     */
    handleKeyup(event) {
      if (event.keyCode === 8) {
        if (this.model.length <= this.oldVal.length) {
          this.model = this.oldVal
        }
      }
    },
    /**
     * 创建数组
     */
    createArray(length) {
      return Array.from({ length: length }).map(() => {
        return ''
      })
    },
    /**
     * 点击块子项
     */
    handleItemClick(item, index) {
      this.$refs.input.focus()
      this.$emit('itemClick', { item, index })
    }
  }
}
</script>
<style lang="scss">
.vue-square-input {
  width: 100%;
  position: relative;
  &_list {
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
  }
  &_item {
    height: 30px;
    line-height: 30px;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    position: relative;
    border-radius: 2px;
    & + .vue-square-input_item {
      margin-left: 10px;
    }
  }
  &_cursor {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1px;
    height: 40%;
    background-color: #323233;
    transform: translate(-50%, -50%);
    animation: 1s van-cursor-flicker infinite;
  }
  &_input {
    width: 100%;
    height: 30px;
    position: absolute;
    top: -100vh;
    left: -100vw;
    opacity: 0;
    z-index: -2;
  }
}
</style>
