<template>
  <HeaderApp username="Alexander" :disabledNow="this.sitesStore.getMainHeaderStatus()" />
  <RouterView />
</template>

<script>
import { mapStores } from 'pinia'
import { useSitesStore } from '@/stores/sitesStore'
import { RouterView } from 'vue-router'
import HeaderApp from './components/HeaderApp.vue'
export default {
  components: {
    HeaderApp
  },
  computed: {
    ...mapStores(useSitesStore)
  },
  watch: {
    $route(to, from) {
      if (to.href.includes('/page-editor/')) {
        this.sitesStore.setMainHeaderDisabled(true)
      } else {
        this.sitesStore.setMainHeaderDisabled(false)
      }
    }
  }
}
</script>
