<template>
  <main>
    <ul class="page-list">
      <SiteEditorPageListItem
        v-for="page in this.sitesStore.getSitePages(this.siteID)"
        :key="page.id"
        :title="page.title"
      />
    </ul>
  </main>
</template>

<script>
import { mapStores } from 'pinia'
import { useSitesStore } from '@/stores/index'
import SiteEditorPageListItem from '@/components/SiteEditor/SiteEditorPageListItem.vue'

export default {
  props: {
    siteID: String
  },
  components: {
    SiteEditorPageListItem
  },
  computed: {
    ...mapStores(useSitesStore)
  }
}
</script>
