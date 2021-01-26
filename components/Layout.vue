<template>
  <div class="container mx-auto">
    <NavBar />
    <slot></slot>
  </div>
</template>
<script>
import NavBar from '~/components/NavBar'
export default {
  name: 'Layout',
  components: {
    NavBar
  }
}
</script>
