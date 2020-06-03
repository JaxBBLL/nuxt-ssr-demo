<template>
  <div class="container">
    <div class="mb20">
      用户详情接口：<a href="https://api.myjson.com/bins/mj06m" class="link" target="_blank">https://api.myjson.com/bins/mj06m</a>
    </div>
    <div class="flex">
      <img :src="userInfo.avatar" class="mr20" />
      <div class="flex-item">
        <p>姓名：{{ userInfo.name }}</p>
        <p>年龄：{{ userInfo.age }}</p>
        <p>性别：{{ userInfo.gender==1 ? "男" : "女" }}</p>
        <p>地址：{{ userInfo.region }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
  data() {
    return {}
  },
  async asyncData({ $axios }) {
    const data = await $axios.$get('https://api.myjson.com/bins/mj06m')
    return { userInfo: data }
  }
}
</script>
<style lang="less" scoped>
.flex {
  display: flex;
  img {
    border-radius: 50%;
    vertical-align: middle;
    height: 60px;
    width: 60px;
  }
  .flex-item {
    flex: 1;
  }
}
</style>
