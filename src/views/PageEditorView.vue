<template>
  <main class="page-editor">
    <div class="container">
      <h2 v-text="`Editing page ${pageId}`"></h2>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    pageId: String
  }
}
</script>
