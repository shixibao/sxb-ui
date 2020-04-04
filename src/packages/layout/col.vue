<template>
  <div class="s-col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "s-col",
  data() {
    return { gutter: 0 };
  },
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number,
      default: null
    },
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },
  computed: {
    colClass() {
      // 统一管理我们的样式
      let classes = [];
      classes.push(`s-col-${this.span}`);
      if (this.offset) {
        // 说明用户传入了偏移量
        classes.push(`s-col-offset-${this.offset}`);
      }
      ["xs", "sm", "md", "lg", "xl"].forEach(type => {
        if (typeof this[type] === "object") {
          let { span, offset } = this[type];
          span && classes.push(`s-col-${type}-${span}`); // s-col-xs-1
          offset && classes.push(`s-col-${type}-offset-${offset}`); // s-col-xs-offset-1
        } else {
          this[type] && classes.push(`s-col-${type}-${this[type]}`); // s-col-xs-1
        }
      });
      return classes;
    },
    colStyle() {
      let style = {};
      if (this.gutter) {
        style = {
          ...style,
          paddingLeft: this.gutter / 2 + "px",
          paddingRight: this.gutter / 2 + "px"
        };
      }
      return style;
    }
  }
};
</script>

<style lang="scss">
@import '@/styles/_var.scss';
// 需要通过循环24 来创造出不同的宽度
@for $i from 1 through 24 {
  .s-col-#{$i} {
    width: $i/24 * 100%;
  }
  .s-col-offset-#{$i} {
    margin-left: $i/24 * 100%;
  }
}

@include res(xs) {
  @for $i from 1 through 24 {
    .s-col-xs-#{$i} {
      width: $i/24 * 100%;
    }
    .s-col-xs-offset-#{$i} {
      margin-left: $i/24 * 100%;
    }
  }
}
@include res(sm) {
  @for $i from 1 through 24 {
    .s-col-sm-#{$i} {
      width: $i/24 * 100%;
    }
    .s-col-sm-offset-#{$i} {
      margin-left: $i/24 * 100%;
    }
  }
}
@include res(md) {
  @for $i from 1 through 24 {
    .s-col-md-#{$i} {
      width: $i/24 * 100%;
    }
    .s-col-md-offset-#{$i} {
      margin-left: $i/24 * 100%;
    }
  }
}
@include res(lg) {
  @for $i from 1 through 24 {
    .s-col-lg-#{$i} {
      width: $i/24 * 100%;
    }
    .s-col-lg-offset-#{$i} {
      margin-left: $i/24 * 100%;
    }
  }
}
@include res(xl) {
  @for $i from 1 through 24 {
    .s-col-xl-#{$i} {
      width: $i/24 * 100%;
    }
    .s-col-xl-offset-#{$i} {
      margin-left: $i/24 * 100%;
    }
  }
}
</style>