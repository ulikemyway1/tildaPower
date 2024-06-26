<template>
  <main class="site-editor">
    <div class="container">
      <SiteEditorToolBar :siteID="id" />
      <SiteEditorPageSelector :siteID="id" />
      <ChangeDomainName :show="this.modalsStore.getModalStatus('domain')" :siteID="id" />
      <EditSitePage :show="this.modalsStore.getModalStatus('editSitePage')" :siteID="id" />
    </div>
  </main>
</template>

<script>
import { mapStores } from 'pinia'
import { useModalsStore } from '@/stores/modalsStore'
import SiteEditorToolBar from '@/components/SiteEditor/SiteEditorToolBar.vue'
import SiteEditorPageSelector from '@/components/SiteEditor/SiteEditorPageSelector.vue'
import ChangeDomainName from '@/components/SiteEditor/Modals/ChangeDomainName.vue'
import EditSitePage from '@/components/SiteEditor/Modals/EditSitePage.vue'
export default {
  props: {
    id: String
  },
  components: {
    SiteEditorToolBar,
    SiteEditorPageSelector,
    ChangeDomainName,
    EditSitePage
  },
  computed: {
    ...mapStores(useModalsStore)
  }
}
</script>
