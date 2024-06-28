<template>
  <div class="modal page-edit" v-if="show || this.checkIfCanOpen">
    <div class="modal-overlay" @click="closeModal"></div>
    <div class="modal-content">
      <div class="modal-header">
        <button class="close-modal" aria-label="Close modal" @click="closeModal">X</button>
        <h2>Change site page</h2>
        <div class="modal-toggle">
          <span
            class="modal-toggle__item"
            :class="this.openMain ? 'active' : ''"
            tabindex="0"
            @click="openMainTab"
            >Main</span
          >
          <span
            class="modal-toggle__item"
            :class="this.openBadge ? 'active' : ''"
            tabindex="0"
            @click="openBadgeTab"
            >Badge</span
          >
        </div>
      </div>
      <div class="modal-body">
        <form v-if="openMain" class="modal-form-edit-main">
          <label for="title" class="label"
            >Page Title
            <input
              ref="title"
              type="text"
              name="title"
              id="title"
              class="input"
              :value="pageTitle"
              @input="checkValidation"
            />
          </label>

          <label for="descr" class="label"
            >Page Description
            <input
              ref="descr"
              type="text"
              name="descr"
              id="descr"
              class="input"
              :value="pageDescription"
              @input="checkValidation"
            />
          </label>

          <label for="url" class="label"
            >Page URL
            <input
              ref="url"
              type="text"
              name="url"
              id="url"
              class="input"
              :value="pageURL"
              @input="checkValidation"
            />
          </label>

          <button class="button save-changes" @click.prevent="saveChanges">Save changes</button>
          <Transition>
            <span v-if="notValid" class="validation-error">Please, fill all fields</span>
          </Transition>
        </form>

        <form v-if="openBadge" class="modal-form-edit-main">
          <div class="badges-wrapper">
            <img
              v-for="img in this.images"
              :key="img"
              :src="img"
              alt="Image Badge"
              class="image-badge"
              @click="setBadgeURL"
            />
          </div>

          <button class="button save-changes" @click.prevent="saveNewBadge">Save changes</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useModalsStore } from '@/stores/modalsStore'
import { useSitesStore } from '@/stores/sitesStore'
import fetchBadges from '@/api/fetchBadges'

export default {
  props: ['show', 'siteID'],
  data() {
    return {
      currentDomainInput: '',
      openMain: true,
      openBadge: false,
      notValid: false,
      images: [],
      newBadgeURL: ''
    }
  },
  methods: {
    closeModal() {
      this.modalsStore.toggleModalStatus('editSitePage')
    },
    saveChanges() {
      const newTitle = this.$refs.title.value
      const newDescr = this.$refs.descr.value
      const newURL = this.$refs.url.value
      const allValid = newTitle.length > 0 && newDescr.length > 0 && newURL.length > 0
      const siteID = this.modalsStore.getEditSiteID()
      const pageID = this.modalsStore.getEditPageID()
      if (allValid) {
        this.sitesStore.setPageTitle(siteID, pageID, newTitle)
        this.sitesStore.setPageDescr(siteID, pageID, newDescr)
        this.sitesStore.setPageURL(siteID, pageID, newURL)
        this.notValid = false
        this.modalsStore.toggleModalStatus('editSitePage')
      } else {
        this.notValid = true
      }
    },
    openMainTab() {
      this.openMain = true
      this.openBadge = false
    },
    openBadgeTab() {
      this.openMain = false
      this.openBadge = true
    },
    setBadgeURL(event) {
      this.newBadgeURL = event.target?.src
      this.resetActive(event.target)
      event.target.classList.add('active')
    },
    saveNewBadge() {
      if (this.newBadgeURL !== '') {
        const siteID = this.modalsStore.getEditSiteID()
        const pageID = this.modalsStore.getEditPageID()
        this.sitesStore.setPageBadge(siteID, pageID, this.newBadgeURL)
        this.modalsStore.toggleModalStatus('editSitePage')
      }
    },
    resetActive(target) {
      if (target instanceof HTMLElement) {
        const parent = target.parentElement
        for (const child of parent.children) {
          if (child instanceof HTMLElement) {
            child.classList.remove('active')
          }
        }
      }
    }
  },
  computed: {
    ...mapStores(useModalsStore, useSitesStore),
    checkIfCanOpen() {
      return this.modalsStore.getModalStatus('editSitePage')
    },
    pageTitle() {
      return this.sitesStore.getPageTitle(
        this.modalsStore.getEditSiteID(),
        this.modalsStore.getEditPageID()
      )
    },
    pageDescription() {
      return this.sitesStore.getPageDescr(
        this.modalsStore.getEditSiteID(),
        this.modalsStore.getEditPageID()
      )
    },
    pageURL() {
      return this.sitesStore.getPageURL(
        this.modalsStore.getEditSiteID(),
        this.modalsStore.getEditPageID()
      )
    }
  },
  async mounted() {
    this.images = await fetchBadges()
  }
}
</script>
