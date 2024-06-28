<template>
  <main class="page-editor__content">
    <div class="rendered-page-wrapper" ref="renderedPageWrapper">
      <div v-for="(blockObject, index) in pageContentUpdated" :key="index">
        <SliderComponent
          v-if="blockObject.type === 'slider'"
          :index="index"
          :imageArr="blockObject?.imageArr"
        />
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
          class="edit-block"
          @blur="textEdit"
          ><BlockWrapper :index="index" />
          <div>{{ blockObject?.textContent }}</div>
        </component>
      </div>
    </div>
    <button v-if="!pageContent?.length" class="button add-block-btn" @click="toggleMenu">
      Add new block
    </button>
    <SitePageEditorToolBar />
    <SitePageEditorEditContentToolBar />
  </main>
  <EditSitePage />
</template>

<script>
import { mapStores } from 'pinia'
import { useModalsStore } from '@/stores/modalsStore'
import { useSitesStore } from '@/stores/sitesStore'
import SitePageEditorToolBar from '@/components/SitePageEditor/SitePageEditorToolBar.vue'
import SitePageEditorEditContentToolBar from '@/components/SitePageEditor/SitePageEditorEditContentToolBar.vue'
import EditSitePage from '@/components/SiteEditor/Modals/EditSitePage.vue'
import SliderComponent from '@/components/SitePageEditor/Components/SliderComponent.vue'
import BlockWrapper from '@/components/SitePageEditor/Components/BlockWrapper.vue'
export default {
  data() {
    return {
      menuIsShown: false,
      pageID: '',
      siteID: '',
      //eslint-disable-next-line
      pageContentUpdated: []
    }
  },
  components: {
    SitePageEditorToolBar,
    SitePageEditorEditContentToolBar,
    EditSitePage,
    SliderComponent,
    BlockWrapper
  },
  methods: {
    toggleMenu() {
      this.modalsStore.toggleModalStatus('toolbar')
    },
    textEdit(event) {
      const blockID = Number(event.target.id.split('-')[1])
      let newText = event.target.textContent
      if (newText.startsWith(' Контент')) {
        newText = event.target.textContent.slice(9)
      }

      this.sitesStore.editBlockText(this.siteID, this.pageID, blockID, newText)
    }
  },
  computed: {
    ...mapStores(useModalsStore, useSitesStore),

    emitsCounter() {
      return this.sitesStore.emitsCounter
    },
    pageContent() {
      return this.sitesStore.getPageContentObject(this.siteID, this.pageID)
    }
  },
  mounted() {
    this.pageID = this.sitesStore.getEditingPageID()
    this.siteID = this.sitesStore.getEditingSiteID()
    this.pageContentUpdated = this.sitesStore.getPageContentObject(this.siteID, this.pageID)
  },
  watch: {
    emitsCounter: {
      handler() {
        console.log('watch')
        this.pageContentUpdated = this.sitesStore.getPageContentObject(this.siteID, this.pageID)
        console.log(this.pageContentUpdated)
      }
    }
  }
}
</script>
