<template>
  <main class="sites">
    <div class="container">
      <h2 class="sites__title">Explore your created sites.</h2>
      <SitesToolbar @createNewSiteEvent="handleCreateNewSiteEvent" />
      <KeepAlive>
        <SitesContentBox ref="sitesViewContentBox" />
      </KeepAlive>
    </div>
  </main>
</template>

<script>
import SitesToolbar from '@/components/SitesView/SitesToolbar.vue'
import SitesContentBox from '@/components/SitesView/SitesContentBox.vue'

export default {
  components: {
    SitesToolbar,
    SitesContentBox
  },
  methods: {
    handleCreateNewSiteEvent() {
      this.$refs.sitesViewContentBox.createNewSite()
    }
  }
}
</script>
