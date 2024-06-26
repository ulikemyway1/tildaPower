<template>
  <HeaderApp username="Alexander" />
  <RouterView />
</template>

<script>
import { RouterView } from 'vue-router'
import HeaderApp from './components/HeaderApp.vue'
export default {
  components: {
    HeaderApp
  }
}
</script>
