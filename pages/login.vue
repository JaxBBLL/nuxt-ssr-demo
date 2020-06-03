<template>
  <div class="container">
    <button @click="login">login</button>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      const send = {
        userName: 'zjadmin',
        password: 123456,
        captcha: 'ssss',
        rememberMe: false
      }
      this.$axios.post('/api/v1/admin/login', send).then(res => {
        // this.$router.push('/')
        location.href = '/'
      })
    }
  }
}
</script>
