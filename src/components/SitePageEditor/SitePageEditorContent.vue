<template>
  <main class="page-editor__content">
    <button class="button add-block-btn" @click="toggleMenu">Add new block</button>
    <SitePageEditorToolBar />
  </main>
</template>

<script>
import { mapStores } from 'pinia'
import { useModalsStore } from '@/stores/modalsStore'
import SitePageEditorToolBar from '@/components/SitePageEditor/SitePageEditorToolBar.vue'
export default {
  data() {
    return {
      menuIsShown: false
    }
  },
  components: {
    SitePageEditorToolBar
  },
  methods: {
    toggleMenu() {
      this.modalsStore.toggleModalStatus('toolbar')
    }
  },
  computed: {
    ...mapStores(useModalsStore)
  }
}
</script>
