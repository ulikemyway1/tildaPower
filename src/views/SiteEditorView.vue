<template>
  <main class="site-editor">
    <div class="container">
      <h2>Site Editor</h2>
      <h3 v-text="`Site editor for  ${$route.params.id}`"></h3>
      <button
        class="button site-editor__btn-main"
        @click="this.$router.push(`/editor/${$route.params.id}/main`)"
      >
        Edit Main
      </button>

      <SiteEditorToolBar />
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
