<template>
  <SitePageEditorHeader />
  <main class="page-editor">
    <div class="container">
      <h2 v-text="`Editing page ${pageId}`"></h2>
      <SitePageEditorContent />
    </div>
  </main>
</template>

<script>
import SitePageEditorContent from '@/components/SitePageEditor/SitePageEditorContent.vue'
import SitePageEditorHeader from '@/components/SitePageEditor/sitePageEditorHeader.vue'

export default {
  props: {
    pageId: String
  },
  components: {
    SitePageEditorContent,
    SitePageEditorHeader
  }
}
</script>
