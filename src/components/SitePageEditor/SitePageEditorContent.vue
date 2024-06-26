<template>
  <main class="page-editor__content">
    <div class="rendered-page-wrapper" ref="renderedPageWrapper">
      <!-- <div v-for="(contentObject) of this.sitesStore.getPageContentObject(this.siteID, this.pageID)" class="div">
            {{ contentObject.html }}
         </div> -->
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
      siteID: ''
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
    ...mapStores(useModalsStore, useSitesStore)
  },
  mounted() {
    this.pageID = this.sitesStore.getEditingPageID()
    this.siteID = this.sitesStore.getEditingSiteID()
    for (const blockObject of this.sitesStore.getPageContentObject(this.siteID, this.pageID)) {
      const div = document.createElement('div')
      div.innerHTML = blockObject.html
      div.id = `customBlock-${blockObject.id}`
      div.setAttribute('data-type', blockObject.type)
      this.$refs.renderedPageWrapper.append(div)
    }
  }
}
</script>
