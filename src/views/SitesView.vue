<template>
  <h2>Sites View</h2>
  <SitesToolbar @createNewSiteEvent="handleCreateNewSiteEvent" />
  <SitesContentBox ref="sitesViewContentBox" />
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
      console.log('parent hello')
      this.$refs.sitesViewContentBox.createNewSite()
    }
  }
}
</script>
