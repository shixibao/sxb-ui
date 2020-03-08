<template>
  <div id="app">
    <s-button type="primary">主要按钮</s-button>
    <s-button type="warning">警告按钮</s-button>
    <s-button type="danger">危险按钮</s-button>
    <s-button type="success">成功按钮</s-button>
    <s-button type="info">信息按钮</s-button>
    <s-icon icon='search'></s-icon>
    <br/>
    <s-button type="success" icon='sousuo' icon-position='right'>搜索按钮</s-button>
    <s-button type="success"  @click="fn">test</s-button>
    <br/>
    <s-button type="success" loading>加载中</s-button>
    <br/>
    <!-- 触发事件 -->
    <s-button type="success" @click="fn">触发事件</s-button>
    <br>
    <!-- 按钮组 -->
    <s-button-group>
      <s-button type="" icon="left" @click="fn">上一页</s-button>
      <s-button type="" icon="right" icon-position='right' @click="fn">下一页</s-button>
    </s-button-group>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    fn(e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss">

</style>
