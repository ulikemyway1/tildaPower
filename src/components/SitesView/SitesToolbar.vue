<template>
  <div class="toolbar">
    <span>My sites:</span>
    <button class="create-new-btn" @click="createNewSite">Create New Site</button>
  </div>
</template>

<script>
export default {
  methods: {
    createNewSite() {
      this.$emit('createNewSiteEvent')
    }
  }
}
</script>
