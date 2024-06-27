<template>
  <main class="page-preview">
    <div class="container">
      <PagePreviewWindow />
      <div class="button go-back" @click="handleBackNavigation">⬅ Go back to page editor</div>
    </div>
  </main>
</template>

<script>
import { mapStores } from 'pinia'
import { useSitesStore } from '@/stores/sitesStore'
import PagePreviewWindow from '@/components/PagePreview/PagePreviewWindow.vue'
export default {
  components: {
    PagePreviewWindow
  },
  methods: {
    handleBackNavigation() {
      const actualSite = this.$router.currentRoute.value.href.split('#')[1]
      const actualPage = this.$router.currentRoute.value.href.split('#')[3]
      this.sitesStore.setEditingSiteID(actualSite)
      this.sitesStore.setEditingPageID(actualPage)
      this.$router.push(`/editor/page-editor/${actualPage}-${actualSite}`)
    }
  },
  computed: {
    ...mapStores(useSitesStore)
  }
}
</script>
