<template>
  <Layout>
    这是首页
  </Layout>
</template>

<script>
import Layout from '@/components/Layout'
export default {
  components: {
    Layout
  },
  data() {
    return {}
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
