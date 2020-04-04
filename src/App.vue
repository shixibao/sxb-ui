<template>
  <div id="app">
    <s-button type="primary">主要按钮</s-button>
    <s-button type="warning">警告按钮</s-button>
    <s-button type="danger">危险按钮</s-button>
    <s-button type="success">成功按钮</s-button>
    <s-button type="info">信息按钮</s-button>
    <s-icon icon="search"></s-icon>
    <br>
    <s-button type="success" icon="sousuo" icon-position="right">搜索按钮</s-button>
    <s-button type="success" @click="fn">test</s-button>
    <br>
    <s-button type="success" loading>加载中</s-button>
    <br>
    <!-- 触发事件 -->
    <s-button type="success" @click="fn">触发事件</s-button>
    <br>
    <!-- 按钮组 -->
    <s-button-group>
      <s-button type="" icon="left" @click="fn">上一页</s-button>
      <s-button type="" icon="right" icon-position="right" @click="fn">下一页</s-button>
    </s-button-group>
    <!-- input -->
    <br>
    <!-- <s-input v-model="value" type="text" placeholder="请输入内容" name="username"></s-input>
    <s-input v-model="value" type="password" placeholder="请输入内容" name="username"></s-input>
    <s-input v-model="value" type="password" :disabled="true" placeholder="请输入内容" name="username"></s-input>
    <s-input v-model="value" type="password" placeholder="请输入内容" name="username" clearable></s-input>
    <s-input v-model="value" type="password" placeholder="请输入内容" name="username" show-password></s-input>
    <s-input v-model="value" type="password" placeholder="请输入内容" name="username" prefix-icon="edit"></s-input>
    <s-input v-model="value" type="password" placeholder="请输入内容" name="username" suffix-icon="edit"></s-input>
    {{value}} -->
    <br>
    <!-- 上传的功能 input type="file" name="" form  ajax + formdata-->
    <!-- 
        name 输入框提交到后台的字段名字 
        action 提交到后端的路径
        limit 限制提交个数

        钩子函数
        on-exceed 用来如果超出限制后 会执行此方法
        on-change 如果当前上传文件的状态发生变化的时候 会触发 如果用户选择了文件，上传成功，失败
        on-success 在上传成功时候会触发
        on-error 在失败时会触发
        on-progress 上传时会多次触发

        file-list 显示已经上传过的文件
    -->
    <s-upload
      name="avatar"
      action="http://localhost:3000/upload"
      :file-list="fileList"
      :limit="3"
      accept="image/jpeg"
      :multiple="true"
      :on-exceed="handleExceed"
      :on-change="handleChange"
      :on-success="handleSuccess"
      :on-error="handleError"
      :on-progress="handleProgress"
      :beforeUpload="beforeUpload"
      :drag="false"
    >
      <s-button type="primary" icon="shangchuan">点击上传</s-button>
      <div slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </s-upload>
    <br>
    <!-- 语法糖的绑定 value @input -->
    <!-- {{value1}} -->
    <br>
    <s-date-picker v-model="value1"></s-date-picker>
    <!-- {{value2}}
    <s-date-range-picker v-model="value2"></s-date-range-picker>-->
    <br>
    <div style="margin:200px 0 0 300px">
      <!-- {{value}} -->
      <s-popover
        v-model="value"
        width="200px"
        title="标题"
        content="内容内容，这是一个popover"
        trigger="click"
        placement="right"
      >
        <s-button type="primary" slot="reference">点我弹框</s-button>
      </s-popover>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      value: "",
      value1: "",
      value2: [],
      fileList: [{ url: "xxx", name: "sxb" }]
    };
  },
  methods: {
    fn(e) {
      console.log(e);
    },
    handleExceed(files, fileList) {
      // 1.超过限制
      console.log("用户传递的已经超过预期");
    },
    handleChange(file) {
      console.log(file);
    },
    handleSuccess() {},
    handleError() {},
    handleProgress() {},
    // 增加一个校验 用户选择文件是否符合规范的钩子
    beforeUpload(rawFile) {
      let limitSize = rawFile.size / 1024 > 500;
      if (limitSize) {
        console.log("当前超过了500k");
        return false;
      } else if (!rawFile.name.endsWith(".jpg")) {
        console.log("文件类型不对");
        return false;
      }
      return true;
    }
  }
};
</script>

<style lang="scss">
</style>
