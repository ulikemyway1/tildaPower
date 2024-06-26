<template>
  <li class="page-list__item">
    <div
      class="page__badge clickable"
      :style="`background-image:url(${this.sitesStore.getPageBadge(this.belongTo, this.pageID)})`"
      :class="this.sitesStore.getPageBadge(this.belongTo, this.pageID) ? '' : 'bg-1'"
      tabindex="0"
      @click="goToPageEdit"
    ></div>
    <div class="page__info-wrapper">
      <div class="page__title">
        <span @click="goToPageEdit" class="clickable">{{ title }}</span>
      </div>
      <div class="page__descr">
        <span>Page description: </span
        >{{ this.sitesStore.getPageDescr(this.belongTo, this.pageID) }}
      </div>
      <div class="page__url">
        <span>Page address: </span>{{ this.sitesStore.getPageURL(this.belongTo, this.pageID) }}
      </div>
    </div>

    <div class="button-wrapper">
      <button class="button page-setting-btn" @click="openPageEditor">Settings</button>
      <button class="button danger-btn page-remove-btn" @click="killMe">Delete</button>
    </div>
  </li>
</template>

<script>
import { mapStores } from 'pinia'
import { useSitesStore } from '@/stores/sitesStore'
import { useModalsStore } from '@/stores/modalsStore'

export default {
  props: {
    pageID: String,
    title: String,
    belongTo: String
  },
  methods: {
    killMe() {
      this.sitesStore.deleteSitePage(this.belongTo, this.pageID)
    },
    goToPageEdit() {
      this.$router.push(`/editor/page-editor/${this.pageID}-${this.belongTo}`)
      this.sitesStore.setEditingPageID(this.pageID)
      this.sitesStore.setEditingSiteID(this.belongTo)
      this.modalsStore.hideModal('toolbar')
    },
    openPageEditor() {
      this.modalsStore.toggleModalStatus('editSitePage')
      this.modalsStore.setEditSiteID(this.belongTo)
      this.modalsStore.setEditPageID(this.pageID)
    }
  },
  computed: {
    ...mapStores(useSitesStore, useModalsStore)
  }
}
</script>
