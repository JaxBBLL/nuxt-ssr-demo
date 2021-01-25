<template>
  <table class="table-auto w-full">
    <thead>
      <tr>
        <th class="border">ID</th>
        <th class="border">用户</th>
        <th class="border">年龄</th>
        <th class="border" width="180">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in userList" :key="item.id">
        <td class="border">{{ item.id }}</td>
        <td class="border">{{ item.name }}</td>
        <td class="border">{{ item.age }}</td>
        <td class="border">
          <nuxt-link
            :to="{ name: 'user-id', params: { id: item.id } }"
            class="text-primary"
          >
            进入详情
          </nuxt-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  async asyncData({ $axios }) {
    const userList = await $axios.$get('/json/user.json')
    return { userList }
  },
  data() {
    return {
      userInfo: {}
    }
  },
  methods: {}
}
</script>
<style lang="less" scoped>
td,
th {
  padding: 10px 15px;
}
</style>
