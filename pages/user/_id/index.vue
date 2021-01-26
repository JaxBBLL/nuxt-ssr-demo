<template>
  <Layout>
    <div>
      <p>姓名：{{ userInfo.name }}</p>
      <p>年龄：{{ userInfo.age }}</p>
      <p>性别：{{ userInfo.gender == 1 ? '男' : '女' }}</p>
      <p>地址：{{ userInfo.region }}</p>
    </div>
  </Layout>
</template>
<script>
import Layout from '@/components/Layout'
export default {
  components: {
    Layout
  },
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
  async asyncData({ $axios }) {
    const data = await $axios.$get('/json/user_detail.json')
    return { userInfo: data }
  },
  data() {
    return {}
  }
}
</script>
<style lang="less" scoped></style>
