<template>
  <li class="page-list__item">
    <div class="page__badge bg-1 clickable" tabindex="0" @click="goToPageEdit"></div>
    <div class="page__title">
      <span @click="goToPageEdit" class="clickable">{{ title }}</span>
    </div>
    <div class="button-wrapper">
      <button class="button page-setting-btn">Settings</button>
      <button class="button danger-btn page-remove-btn" @click="killMe">Delete</button>
    </div>
  </li>
</template>

<script>
import { mapStores } from 'pinia'
import { useSitesStore } from '@/stores/index'

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
      this.$router.push(`/editor/${this.belongTo}/${this.pageID}`)
    }
  },
  computed: {
    ...mapStores(useSitesStore)
  }
}
</script>
