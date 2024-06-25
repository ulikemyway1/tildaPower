<template>
  <main class="site-editor">
    <div class="container">
      <SiteEditorToolBar :siteID="id" />
      <SiteEditorPageSelector :siteID="id" />
    </div>
  </main>
</template>

<script>
import SiteEditorToolBar from '@/components/SiteEditor/SiteEditorToolBar.vue'
import SiteEditorPageSelector from '@/components/SiteEditor/SiteEditorPageSelector.vue'
export default {
  props: {
    id: String
  },
  components: {
    SiteEditorToolBar,
    SiteEditorPageSelector
  }
}
</script>
