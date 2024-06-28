<template>
  <div class="site-editor__header">
    <a href="#" class="link add-domain" @click="openDomainModal">Link a domain</a>
    <div class="site-url">
      <span
        >Site address: <a :href="siteURL" class="link site-url__link">{{ siteURL }}</a></span
      >
      <span></span>
    </div>
    <div class="site-title">
      <span>Project Title:</span>
      {{ siteTitle }}
    </div>
    <button class="button create-new-page-btn" @click="createNewPage(this.siteID)">
      Create a new page
    </button>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useSitesStore } from '@/stores/sitesStore'
import { useModalsStore } from '@/stores/modalsStore'
export default {
  props: {
    siteID: String
  },
  methods: {
    createNewPage(id) {
      const index = this.sitesStore.getSitePagesAmount(id) + 1
      const pageDescriptionObject = {
        id: `new-page-${index}`,
        title: `New Default Page  ${index}`,
        descr: 'New Default Page Descr',
        url: `new-page-${index}`,
        badgeURL: '',
        pageContent: [{ id: 0, type: 'paragraph', html: '<h2>Hello!</h2>' }]
      }
      this.sitesStore.addSitePage(id, pageDescriptionObject)
    },
    openDomainModal() {
      this.modalsStore.toggleModalStatus('domain')
    }
  },
  computed: {
    ...mapStores(useSitesStore, useModalsStore),
    siteURL() {
      return this.sitesStore.getSiteURL(this.siteID)
    },
    siteTitle() {
      return this.sitesStore.getSiteTitle(this.siteID)
    }
  }
}
</script>
