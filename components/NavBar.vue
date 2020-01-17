<template>
  <ul class="container">
    <li>
      <nuxt-link to="/" exact-active-class="active">首页</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/user" exact-active-class="active">用户列表</nuxt-link>
    </li>
  </ul>
</template>
<style scoped lang="less">
@import '~assets/style/common/var.less';
@import '~assets/style/common/mixin.less';

ul {
  overflow: hidden;
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
  li {
    float: left;
    a {
      display: block;
      height: 40px;
      line-height: 40px;
      text-align: center;
      padding: 0 20px;
      font-size: 16px;
      &.active {
        color: @primary-color;
        border-bottom: 2px solid @primary-color;
      }
    }
  }
}
</style>
