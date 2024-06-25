<template>
  <div class="site-editor__header">
    <a href="#" class="add-domain">Link a domain</a>
    <div class="site-url">
      <span>Site address:</span>
      <span>Site title:</span>
    </div>
    <div class="site-title">{{ siteTitle }}</div>
    <button class="button create-new-page-btn">Create a new page</button>
    <span>{{ this.sitesStore.getSitesTotal() }}</span>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useSitesStore } from '@/stores/index'
export default {
  props: {
    siteTitle: String,
    siteURL: String
  },
  computed: {
    ...mapStores(useSitesStore)
  }
}
</script>
