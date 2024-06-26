<template>
  <main class="page-editor">
    <div class="container">
      <h2 v-text="`Editing page ${pageId}`"></h2>
      <SitePageEditorContent />
      <SitePageEditorToolBar />
    </div>
  </main>
</template>

<script>
import SitePageEditorContent from '@/components/SitePageEditor/SitePageEditorContent.vue'
import SitePageEditorToolBar from '@/components/SitePageEditor/SitePageEditorToolBar.vue'

export default {
  props: {
    pageId: String
  },
  components: {
    SitePageEditorContent,
    SitePageEditorToolBar
  }
}
</script>
