<template>
  <div class="vue-square-input">
    <!-- {{length}}--{{list}} -->
    <div class="vue-square-input_list">
      <div
        class="vue-square-input_item"
        :style="itemStyle"
        v-for="(item, index) in list"
        :key="index"
        @click="handleItemClick(item, index)"
      >
        <span v-show="item">{{ item }}</span>
        <span v-show="model.length + keepValue.length === index && showCursor" class="vue-square-input_cursor"></span>
      </div>
    </div>
    <input
      ref="input"
      class="vue-square-input_input"
      type="text"
      :maxlength="maxlength"
      v-model="model"
      @focus="handleFocus"
      @blur="handleBlur"
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
    keepValue: {
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
    }
  },
  data() {
    return {
      showCursor: false
    }
  },
  computed: {
    itemStyle() {
      return {
        width: `${100 / this.length}%`
      }
    },
    maxlength() {
      return this.length - this.keepValue.length
    },
    model: {
      get() {
        return this.value || ''
      },
      set(val) {
        const value = this.isUpperCase ? val.toUpperCase() : val
        this.$emit('input', value)
        if (val.length === this.length - this.keepValue.length) {
          this.$emit('complete', `${this.keepValue}${value}`)
        }
      }
    },
    list() {
      let values = `${this.keepValue}${this.model}`.split('')
      return [...values, ...this.createArray(this.length - values.length)]
    }
  },
  methods: {
    handleFocus() {
      this.showCursor = true
    },
    handleBlur() {
      this.showCursor = false
    },
    createArray(length) {
      return Array.from({ length: length }).map(() => {
        return ''
      })
    },
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
    top: 0;
    left: 0;
    opacity: 0;
    z-index: -2;
  }
}
</style>
