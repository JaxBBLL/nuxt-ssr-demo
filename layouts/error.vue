<template>
  <div class="notfound-wrap">
    <section class="notfound">
      <div v-if="error.statusCode === 404">
        <img class="inline-block" src="~@/assets/images/404.jpg" />
        <p>您访问的页面不存在！</p>
      </div>
      <div v-else>
        访问页面出错
      </div>
      <nuxt-link to="/" class="el-button el-button--default el-button--small"
        >返回首页</nuxt-link
      >
      <el-button type="primary" @click="back">后退</el-button>
    </section>
  </div>
</template>
<script>
export default {
  name: 'NotFound',
  props: {
    error: {
      type: Object
    }
  },
  data() {
    return {}
  },
  methods: {
    back() {
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="less">
.notfound-wrap {
  height: 100vh;
  width: 100vw;
  padding-top: 150px;
  background: linear-gradient(
    0deg,
    rgba(232, 215, 190, 1) 0%,
    rgba(255, 255, 255, 1) 50%
  );
}
.notfound {
  text-align: center;
  p {
    font-size: 24px;
    padding: 30px 0;
    color: #d79d09;
  }
}
</style>
