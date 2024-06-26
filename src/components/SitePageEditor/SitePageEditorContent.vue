<template>
  <main class="page-editor__content">
    <div class="rendered-page-wrapper" ref="renderedPageWrapper">
      <component
        :id="`custom-${blockObject.id}`"
        v-for="blockObject in pageContent"
        :key="blockObject.id"
        :is="blockObject.tag"
        >{{ blockObject.textContent }}</component
      >
    </div>
    <button class="button add-block-btn" @click="toggleMenu">Add new block</button>
    <SitePageEditorToolBar />
  </main>
</template>

<script>
import { mapStores } from 'pinia'
import { useModalsStore } from '@/stores/modalsStore'
import { useSitesStore } from '@/stores/sitesStore'
import SitePageEditorToolBar from '@/components/SitePageEditor/SitePageEditorToolBar.vue'
export default {
  data() {
    return {
      menuIsShown: false,
      pageID: '',
      siteID: '',
      pageContentUpdateObserver: this.pageContent
    }
  },
  components: {
    SitePageEditorToolBar
  },
  methods: {
    toggleMenu() {
      this.modalsStore.toggleModalStatus('toolbar')
    },
    createElement() {
      const div = document.createElement('h2')
      div.textContent = 'Heksksks'
      return div
    }
  },
  computed: {
    ...mapStores(useModalsStore, useSitesStore),

    pageContent() {
      return this.sitesStore.getPageContentObject(this.siteID, this.pageID)
    }
  },
  mounted() {
    this.pageID = this.sitesStore.getEditingPageID()
    this.siteID = this.sitesStore.getEditingSiteID()
  }
}
</script>
