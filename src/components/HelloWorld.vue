<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>sass</p>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  mounted() {
    // 全局自定义方法  isMobile 组件里面使用
    let isMobile1 = this.isMobile();
    console.log(isMobile1);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$base-color: red;

p {
  color: $base-color;
}
</style>
