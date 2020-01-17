<template>
  <div class="container">
    <div>
      <h1>用户详情</h1>
      <p>{{ userInfo.name }}</p>
      <p>{{ userInfo.age }}</p>
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
    const data = await $axios.$get('https://api.myjson.com/bins/66s9a')
    return { userInfo: data }
  }
}
</script>
