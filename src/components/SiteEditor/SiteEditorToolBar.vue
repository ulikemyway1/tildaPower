<template>
  <div class="site-editor__header">
    <a href="#" class="link add-domain" @click="openDomainModal">Link a domain</a>
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
    <button class="button create-new-page-btn" @click="createNewPage(this.siteID)">
      Create a new page
    </button>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useSitesStore } from '@/stores/index'
import { useModalsStore } from '@/stores/modalsStore'
export default {
  props: {
    siteID: String
  },
  computed: {
    ...mapStores(useSitesStore, useModalsStore)
  },
  methods: {
    createNewPage(id) {
      const index = this.sitesStore.getSitePagesAmount(id) + 1
      const pageDescriptionObject = {
        title: `New Default Page  ${index}`,
        descr: 'New Default Page Descr',
        url: `new-page-${index}`
      }
      this.sitesStore.addSitePage(id, pageDescriptionObject)
    },
    openDomainModal() {
      this.modalsStore.toggleModalStatus('domain')
    }
  }
}
</script>
