<template>
  <div class="vue-square-input">
    <div class="vue-square-input_list">
      <div
        class="vue-square-input_item"
        :style="itemStyle"
        v-for="(item, index) in list"
        :key="index"
        @click="handleItemClick({ item, index })"
      >
        <span v-show="item.val" class="vue-square-input_val">{{ item.val }}</span>
        <span v-show="showCursor && item.active" class="vue-square-input_cursor"></span>
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
      oldVal: this.value,
      activeIndex: this.value.length > 0 ? this.value.length - 1 : 0
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
      const values = this.model.split('').map(item => {
        return {
          val: item,
          active: false
        }
      })
      const list = [...values, ...this.createArray(this.length - values.length)].map((item, index) => {
        item.active = this.activeIndex === index
        return item
      })
      return list
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
        if (this.activeIndex < this.oldVal.length) {
          const endStr = this.model.substring(this.activeIndex)
          this.model = `${this.oldVal}${endStr}`
        }
      }
      this.$nextTick(() => {
        this.setActiveIndex()
      })
    },
    /**
     * 创建数组
     */
    createArray(length) {
      return Array.from({ length: length }).map(() => {
        return { val: '', active: false }
      })
    },
    /**
     * 点击块子项
     */
    handleItemClick(data) {
      let { index } = data
      const input = this.$refs.input
      if (this.oldVal.length > index) {
        index = this.oldVal.length > 0 ? this.oldVal.length - 1 : 0
      }
      input.focus()
      input.setSelectionRange(index + 1, index + 1)
      this.setActiveIndex()
      this.$emit('itemClick', data)
    },
    /**
     * 当前光标索引
     */
    setActiveIndex() {
      const input = this.$refs.input
      const selectionStart = input.selectionStart
      let index = this.oldVal.length > selectionStart ? this.oldVal.length : selectionStart
      this.activeIndex = index > 0 ? index - 1 : 0
      if (this.oldVal.length >= selectionStart) {
        input.setSelectionRange(this.oldVal.length, this.oldVal.length)
      }
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
    // position: absolute;
    // top: 50%;
    // left: 50%;
    width: 1px;
    height: 60%;
    background-color: #323233;
    // transform: translate(-50%, -50%);
    animation: 1s van-cursor-flicker infinite;
  }
  &_val {
    margin-right: 2px;
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

  @keyframes van-cursor-flicker {
    from {
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
}
</style>
