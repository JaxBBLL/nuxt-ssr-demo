<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>用户</th>
          <th>年龄</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in userList" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>
            <nuxt-link :to="{ name: 'user-id', params: { id: item.id } }" class="link">详情</nuxt-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  async asyncData({ $axios }) {
    const userList = await $axios.$get('https://api.myjson.com/bins/87q12')
    return { userList }
  }
}
</script>
<style lang="less" scoped>
.table {
  border:1px solid #ddd;
  border-collapse: collapse;
  width: 100%;

  td,th {
    border:1px solid #ddd;
    padding: 10px 15px;
  }
}
</style>
