<template>
  <div class="container">
    <div>
      用户列表接口：<a href="https://api.myjson.com/bins/87q12" class="link" target="_blank">https://api.myjson.com/bins/87q12</a>
    </div>
    <table class="table mt10">
      <thead>
        <tr>
          <th>ID</th>
          <th>用户</th>
          <th>年龄</th>
          <th width="180">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in userList" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>
            <a @click="lookItem" class="mr10 link" href="javascript:;" type="button">查看详情</a>
            <nuxt-link :to="{ name: 'user-id', params: { id: item.id } }" class="link">进入详情</nuxt-link>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="dialogVisble" class="dialog">
      <div class="dialog-content">
        <div class="dialog-header clearfix">
          <span @click="dialogVisble=false" class="fr pointer fz18">&times;</span>
        </div>
        <div class="dialog-body">
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
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userInfo: {},
      dialogVisble: false
    }
  },
  async asyncData({ $axios }) {
    const userList = await $axios.$get('https://api.myjson.com/bins/87q12')
    return { userList }
  },
  methods: {
    async lookItem() {
      this.userInfo = await this.$axios.$get('https://api.myjson.com/bins/mj06m')
      this.dialogVisble = true
    }
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
.dialog {
  position: fixed;
  display: flex;
  left: 0;
  top: 0;
  background: rgba(10, 10, 10, 0.5);
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  .dialog-content {
    background: #fff;
  }
  .dialog-header {
    padding: 5px;
  }
  .dialog-body {
    padding: 15px;
  }
}
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
