<template>
  <main>
    <ul v-if="sitePabesListLength !== 0" class="page-list">
      <SiteEditorPageListItem
        v-for="page in sitePages"
        :key="page.id"
        :title="page.title"
        :pageID="page.id"
        :belongTo="this.siteID"
      />
    </ul>
    <span v-else class="no-pages">No pages yet...</span>
  </main>
</template>

<script>
import { mapStores } from 'pinia'
import { useSitesStore } from '@/stores/sitesStore'
import SiteEditorPageListItem from '@/components/SiteEditor/SiteEditorPageListItem.vue'

export default {
  props: {
    siteID: String
  },
  components: {
    SiteEditorPageListItem
  },
  computed: {
    ...mapStores(useSitesStore),
    sitePabesListLength() {
      return this.sitesStore.getSitePages(this.siteID)?.length || 0
    },
    sitePages() {
      return this.sitesStore.getSitePages(this.siteID)
    }
  }
}
</script>
