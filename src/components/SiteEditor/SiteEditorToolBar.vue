<template>
  <div class="site-editor__header">
    <a href="#" class="link add-domain">Link a domain</a>
    <div class="site-url">
      <span
        >Site address:
        <a :href="this.sitesStore.getSiteURL(this.siteID)" class="link site-url__link">{{
          this.sitesStore.getSiteURL(this.siteID)
        }}</a></span
      >
      <span></span>
    </div>
    <div class="site-title">
      <span>Project Title:</span>
      {{ this.sitesStore.getSiteTitle(this.siteID) }}
    </div>
    <button class="button create-new-page-btn">Create a new page</button>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useSitesStore } from '@/stores/index'
export default {
  props: {
    siteID: String
  },
  computed: {
    ...mapStores(useSitesStore)
  }
}
</script>
