<template>
  <li class="page-list__item">
    <div
      class="page__badge clickable"
      :style="`background-image:url(${pageBadgeURL})`"
      :class="pageBadgeClass"
      tabindex="0"
      @click="goToPageEdit"
    ></div>
    <div class="page__info-wrapper">
      <div class="page__title">
        <span class="clickable" @click="goToPageEdit">{{ title }}</span>
      </div>
      <div class="page__descr"><span>Page description: </span>{{ pageDescription }}</div>
      <div class="page__url"><span>Page address: </span>{{ pageURL }}</div>
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
    ...mapStores(useSitesStore, useModalsStore),
    pageBadgeClass() {
      return this.sitesStore.getPageBadge(this.belongTo, this.pageID) ? '' : 'bg-1'
    },
    pageBadgeURL() {
      return this.sitesStore.getPageBadge(this.belongTo, this.pageID)
    },
    pageDescription() {
      return this.sitesStore.getPageDescr(this.belongTo, this.pageID)
    },
    pageURL() {
      return this.sitesStore.getPageURL(this.belongTo, this.pageID)
    }
  }
}
</script>
