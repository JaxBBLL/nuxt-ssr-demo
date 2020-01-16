<template>
  <div class="container">
    <p>{{ $route.params.id }}</p>
    <nuxt-link to="/user">
      user
    </nuxt-link>
    <div>
      {{ info.name }}
      {{ info.age }}
    </div>
  </div>
</template>

<script>
export default {
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },
  data () {
    return {}
  },
  async asyncData ({ $axios }) {
    const data = await $axios.$get('https://api.myjson.com/bins/66s9a')
    return { info: data }
  }
}
</script>
