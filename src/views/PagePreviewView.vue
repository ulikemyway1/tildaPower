<template>
  <main class="page-preview">
    <div class="container">
      <PagePreviewWindow />
      <div class="button go-back" @click="$router.back()">⬅ Go back to page editor</div>
    </div>
  </main>
</template>

<script>
import PagePreviewWindow from '@/components/PagePreview/PagePreviewWindow.vue'
export default {
  components: {
    PagePreviewWindow
  }
}
</script>
