<template>
  <div class="page_wrapper">
    <div v-for="blockObject in pageContent" :key="blockObject.id">
      <SliderComponent v-if="blockObject.type === 'slider'" :slides-per-view="'1'" />
      <component v-else :id="`custom-${blockObject.id}`" :is="blockObject.tag" :src="blockObject?.imgSrc" :style="{
        background: `url(${blockObject?.imgSrc}) center center/cover no-repeat`,
        minHeight: blockObject?.minHeight
      }">{{ blockObject?.textContent }}
      </component>
    </div>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useSitesStore } from '@/stores/sitesStore'
import SliderComponent from '@/components/SitePageEditor/Components/SliderComponent.vue'
export default {
  data() {
    return {
      pageContentUpdateObserver: this.pageContent
    }
  },
  computed: {
    ...mapStores(useSitesStore),

    pageContent() {
      return this.sitesStore.getPageContentObject(
        this.sitesStore.getEditingSiteID(),
        this.sitesStore.getEditingPageID()
      )
    }
  },
  components: {
    SliderComponent
  }
}
</script>
