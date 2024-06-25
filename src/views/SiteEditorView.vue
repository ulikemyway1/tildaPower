<template>
  <main class="site-editor">
    <div class="container">
      <SiteEditorToolBar :siteID="id" />
    </div>
  </main>
</template>

<script>
import SiteEditorToolBar from '@/components/SiteEditor/SiteEditorToolBar.vue'
export default {
  props: {
    id: String
  },
  components: {
    SiteEditorToolBar
  }
}
</script>
