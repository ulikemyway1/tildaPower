<template>
  <main class="page-editor__content">
    <div class="rendered-page-wrapper" ref="renderedPageWrapper">
      <div v-for="blockObject in pageContent">
        <SliderComponent v-if="blockObject.type === 'slider'" />
        <component
          v-else
          contenteditable="true"
          :id="`custom-${blockObject.id}`"
          :key="blockObject.id"
          :is="blockObject.tag"
          :src="blockObject?.imgSrc"
          :style="{
            background: `url(${blockObject?.imgSrc}) center center/cover no-repeat`,
            minHeight: blockObject?.minHeight
          }"
          @blur="textEdit"
          >{{ blockObject?.textContent }}
        </component>
      </div>
    </div>
    <button class="button add-block-btn" @click="toggleMenu">Add new block</button>
    <SitePageEditorToolBar />
  </main>
  <EditSitePage />
</template>

<script>
import { mapStores } from 'pinia'
import { useModalsStore } from '@/stores/modalsStore'
import { useSitesStore } from '@/stores/sitesStore'
import SitePageEditorToolBar from '@/components/SitePageEditor/SitePageEditorToolBar.vue'
import EditSitePage from '@/components/SiteEditor/Modals/EditSitePage.vue'
import SliderComponent from '@/components/SitePageEditor/Components/SliderComponent.vue'
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
    SitePageEditorToolBar,
    EditSitePage,
    SliderComponent
  },
  methods: {
    toggleMenu() {
      this.modalsStore.toggleModalStatus('toolbar')
    },
    textEdit(event) {
      const blockID = Number(event.target.id.split('-')[1])
      const newText = event.target.textContent
      this.sitesStore.editBlockText(this.siteID, this.pageID, blockID, newText)
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
