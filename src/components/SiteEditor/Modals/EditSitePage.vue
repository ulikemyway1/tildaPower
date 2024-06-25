<template>
  <div class="modal page-edit" v-if="show">
    <div class="modal-overlay" @click="closeModal"></div>
    <div class="modal-content">
      <div class="modal-header">
        <button @click="closeModal" class="close-modal" aria-label="Close modal">X</button>
        <h2>Change site page</h2>
        <div class="modal-toggle">
          <span class="modal-toggle__item active" tabindex="0" @click="openMainTab">Main</span>
          <span class="modal-toggle__item" tabindex="0" @click="openBadgeTab">Badge</span>
        </div>
      </div>
      <div class="modal-body">
        <!-- Not working KeepAlive :C -->
        <KeepAlive>
          <form :is="openMain" v-if="openMain" class="modal-form-edit-main">
            <label for="title" class="label"
              >Page Title
              <input
                ref="title"
                type="text"
                name="title"
                id="title"
                class="input"
                :value="
                  this.sitesStore.getPageTitle(
                    this.modalsStore.getEditSiteID(),
                    this.modalsStore.getEditPageID()
                  )
                "
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
                :value="
                  this.sitesStore.getPageDescr(
                    this.modalsStore.getEditSiteID(),
                    this.modalsStore.getEditPageID()
                  )
                "
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
                :value="
                  this.sitesStore.getPageURL(
                    this.modalsStore.getEditSiteID(),
                    this.modalsStore.getEditPageID()
                  )
                "
                @input="checkValidation"
              />
            </label>

            <button @click.prevent="saveChanges" class="button save-changes">Save changes</button>
            <Transition v-if="notValid">
              <span class="validation-error">Please, fill all fields</span>
            </Transition>
          </form>
        </KeepAlive>
        <KeepAlive>
          <form :is="openBadge" v-if="openBadge" class="modal-form-edit-main">
            <button @click.prevent="saveChanges" class="button save-changes">Save changes</button>
            <Transition v-if="notValid">
              <span class="validation-error">Please, fill all fields</span>
            </Transition>
          </form>
        </KeepAlive>
      </div>
    </div>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useModalsStore } from '@/stores/modalsStore'
import { useSitesStore } from '@/stores/index'

export default {
  props: ['show', 'siteID'],
  data() {
    return {
      currentDomainInput: '',
      openMain: true,
      openBadge: false,
      notValid: false
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
      if (allValid) {
        this.sitesStore.setPageTitle(
          this.modalsStore.getEditSiteID(),
          this.modalsStore.getEditPageID(),
          newTitle
        )
        this.sitesStore.setPageDescr(
          this.modalsStore.getEditSiteID(),
          this.modalsStore.getEditPageID(),
          newDescr
        )
        this.sitesStore.setPageURL(
          this.modalsStore.getEditSiteID(),
          this.modalsStore.getEditPageID(),
          newURL
        )
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
    }
  },
  computed: {
    ...mapStores(useModalsStore, useSitesStore)
  }
}
</script>
