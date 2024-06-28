<template>
  <HeaderApp username="Alexander" :disabledNow="mainHeaderStatus" />
  <RouterView />
</template>

<script>
import { useSitesStore } from '@/stores/sitesStore'
import { RouterView } from 'vue-router'
import HeaderApp from './components/HeaderApp.vue'
export default {
  components: {
    HeaderApp
  },
  computed: {
    mainHeaderStatus() {
      const sitesStore = useSitesStore()
      return sitesStore.getMainHeaderStatus()
    }
  }
}
</script>
