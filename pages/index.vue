<template>
  <div class="container">
    <h1>这是首页</h1>
    <table class="table mt10">
      <thead>
        <tr>
          <th>ID</th>
          <th>用户</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.userName }}</td>
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
    const send = {
      pageNo: 1,
      pageSize: 15
    }
    try {
      const { data } = await $axios.post('/api/v1/admin/agent/success', send)
      return { list: data.data.result }
    } catch (e) {
      return { list: [] }
    }
  },
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="less">
.table {
  border: 1px solid #ddd;
  border-collapse: collapse;
  width: 100%;

  td,
  th {
    border: 1px solid #ddd;
    padding: 10px 15px;
  }
}
</style>
