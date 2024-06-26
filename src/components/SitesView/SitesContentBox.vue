<template>
  <h3 class="sites__title title">Your existing sites:</h3>
  <main v-if="this.sitesStore.getSites().length > 0" class="sites__content-wrapper">
    <KeepAlive>
      <SitesSiteCard
        v-for="site in this.sitesStore.getSites()"
        :key="site.id"
        :title="site.title"
        :id="site.id"
        :url="site.url"
        :ref="site.url"
        @killMe="deleteSiteCard"
      />
    </KeepAlive>
  </main>
  <div class="spread-text" v-else>You have not created any site yet...</div>
</template>

<script>
import SitesSiteCard from '@/components/SitesView/SitesSiteCard.vue'
import generateID from '@/helpers/generateID'
import { mapStores } from 'pinia'
import { useSitesStore } from '@/stores/sitesStore'

export default {
  methods: {
    createNewSite() {
      const newSiteDescr = {
        id: generateID(),
        title: this.siteTitle,
        url: `my-project-${this.calcIndex()}.tilda.prod`,
        pages: [
          {
            pageID: `${this.id}-${generateID()}`,
            title: 'Page'
          }
        ]
      }
      this.sitesStore.addSite(newSiteDescr)
    },
    calcIndex() {
      return this.sitesStore.getSitesTotal() + 1
    },
    deleteSiteCard(id) {
      this.sitesStore.deleteSite(id)
    }
  },
  components: {
    SitesSiteCard
  },
  computed: {
    siteTitle() {
      return `My project ${this.sitesStore.getSitesTotal() + 1}`
    },
    ...mapStores(useSitesStore)
  }
}
</script>
