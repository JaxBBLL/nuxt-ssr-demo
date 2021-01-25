<template>
  <div class="container mx-auto">
    <NavBar />
    <nuxt />
  </div>
</template>
<script>
import NavBar from '~/components/NavBar'
export default {
  components: {
    NavBar
  }
}
</script>
