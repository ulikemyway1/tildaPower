<template>
  <div class="page_wrapper">
    <component
      :id="`custom-${blockObject.id}`"
      v-for="blockObject in pageContent"
      :key="blockObject.id"
      :is="blockObject.tag"
      :src="blockObject.imgSrc"
      :style="{
        background: `url(${blockObject.imgSrc}) center center/cover no-repeat`,
        minHeight: blockObject.minHeight
      }"
      >{{ blockObject.textContent }}
    </component>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useSitesStore } from '@/stores/sitesStore'
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
  }
}
</script>
