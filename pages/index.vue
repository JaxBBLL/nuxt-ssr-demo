<template>
  <div class="container">
    <h1>这是首页</h1>
    <nuxt-link :to="{ name: 'user-id-name', params: { id: 9527, name: 'JaxBBLL'} }" class="link">动态路由</nuxt-link>
  </div>
</template>

<script>
export default {}
</script>
<style></style>
