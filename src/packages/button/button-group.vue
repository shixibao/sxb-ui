<template>
    <div class="button-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: "s-button-group",
  mounted() {
    // 检查内部子元素是我们的buttom元素
    console.log(this);
    let children = this.$el.children;
  }
};
</script>

<style lang="scss">
@import "../../styles/_var.scss";
.button-group {
  display: inline-block;
  vertical-align: middle;
  button {
    border-radius: 0;
    position: relative;
    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
    &:not(first-child) {
      margin-left: -1px;
    }
    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
    &:hover {
      z-index: 1;
    }
    &:focus {
      z-index: 2;
    }
  }
}
</style>
