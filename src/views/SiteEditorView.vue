<template>
  <main class="site-editor">
    <div class="container">
      <h2>Site Editor</h2>
      <h3 v-text="`Site editor for  ${$route.params.id}`"></h3>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    id: String
  }
}
</script>
