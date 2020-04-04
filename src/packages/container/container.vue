<template>
  <section class="s-container" :class="{isVertical}">
    <slot></slot>
  </section>
</template>
<script>
export default {
  name: "s-container",
  data() {
    return { isVertical: true };
  },
  mounted() {
    this.isVertical = this.$children.some(child =>
      ["s-footer", "s-header"].includes(child.$options.name)
    );
  }
};
</script>
<style lang="scss">
.s-container {
  display: flex;
  flex-direction: row;
  flex:1
}
.s-container.isVertical {
  flex-direction: column;
}
</style>