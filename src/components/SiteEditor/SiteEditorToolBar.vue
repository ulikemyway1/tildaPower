<template>
  <div class="site-editor__header">
    <a href="#" class="add-domain">Link a domain</a>
    <div class="site-url">
      <span>Site address:</span>
      <span>{{ siteURL }}</span>
    </div>
    <div class="site-title">{{ siteTitle }}</div>
    <button class="button create-new-page-btn">Create a new page</button>
  </div>
</template>

<script>
export default {
  props: {
    siteTitle: String,
    siteURL: String
  }
}
</script>
