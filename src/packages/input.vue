<template>
  <div class="s-input" :class="inputClass">
    <s-icon :icon="prefixIcon" v-if="prefixIcon"></s-icon>
    <s-icon :icon="suffixIcon" v-if="suffixIcon"></s-icon>
    <input
      :type="showPassword?(passwordVisible?'text':'password'):type"
      :value="value"
      :placeholder="placeholder"
      :name="name"
      :disabled="disabled"
      @input="$emit('input',$event.target.value)"
      ref="input"
      @focus="$emit('focus',$event.target.value)"
      @blur="$emit('blur',$event.target.value)"
      @change="$emit('change',$event)"
    />
    <!-- @mousedown.native.prevent  不会失去焦点 -->
    <s-icon
      icon="qingkong"
      v-if="clearable && value"
      @click.native="$emit('input','')"
      @mousedown.native.prevent
    ></s-icon>
    <!-- 先失去焦点 在获取焦点 -->
    <s-icon
      icon="eye"
      v-if="showPassword && value"
      @click.native="changeStatus"
    ></s-icon>

    <!-- 
        s-radio
        s-checkbox
        s-input
     -->
  </div>
</template>
<script>
export default {
  name: "s-input",
  props: {
    name: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: "请输入内容"
    },
    value: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    prefixIcon: String,
    suffixIcon: String
  },
  data() {
    return { passwordVisible: false };
  },
  computed: {
    inputClass() {
      let classes = [];
      if (this.clearable || this.showPassword || this.suffixIcon) {
        classes.push(`s-input-suffix-icon`);
      }
      if (this.prefixIcon) {
        classes.push(`s-input-prefix-icon`);
      }
      return classes;
    }
  },
  methods: {
    changeStatus() {
      this.passwordVisible = !this.passwordVisible;
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/_var.scss";
.s-input {
  display: inline-flex;
  position: relative;
  input {
    padding: 8px;
    width: 150px;
    height: 42px;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    &:focus {
      border: 1px solid $primary;
      outline: none;
      box-shadow: inset -1px 0px 2px $primary, inset 1px 1px 1px $primary;
    }
    &[disabled] {
      cursor: not-allowed;
      background: #eee;
    }
  }
}
.s-input-suffix-icon {
  input {
    padding-right: 25px;
  }
  .s-icon {
    right: 8px;
    top: 13px;
    position: absolute;
    cursor: pointer;
    width: 14.5px;
    height: 14.5px;
  }
}
.s-input-prefix-icon {
  input {
    padding-left: 25px;
  }
  .s-icon {
    left: 8px;
    top: 13px;
    position: absolute;
    cursor: pointer;
    width: 14.5px;
    height: 14.5px;
  }
}
</style>