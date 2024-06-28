<template>
  <div class="modal" v-if="show">
    <div class="modal-overlay" @click="closeModal"></div>
    <div class="modal-content">
      <div class="modal-header">
        <button class="close-modal" aria-label="Close modal" @click="closeModal">X</button>
      </div>
      <div class="modal-body">
        <h2>Add domain name</h2>
        <form class="modal-form-domain">
          <Transition>
            <span v-if="!invalidDomain" class="validation-error"
              >Please, use valid domain name</span
            >
          </Transition>
          <input
            type="text"
            class="domain-name-input"
            placeholder="Type domain name"
            @change="getDomainNameInput"
          />
          <button class="button save-domain" @click.prevent="saveDomain">Save</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useModalsStore } from '@/stores/modalsStore'
import { useSitesStore } from '@/stores/sitesStore'

export default {
  props: ['show', 'siteID'],
  data() {
    return {
      currentDomainInput: ''
    }
  },
  methods: {
    closeModal() {
      this.modalsStore.toggleModalStatus('domain')
    },
    getDomainNameInput(event) {
      this.currentDomainInput = event.target.value
    },
    saveDomain() {
      const inputValid = this.domainNameValidation(this.currentDomainInput)
      if (inputValid) {
        this.sitesStore.changeSiteURL(this.siteID, this.currentDomainInput)
        this.modalsStore.toggleModalStatus('domain')
      }
    },
    domainNameValidation(input) {
      if (input.length > 0) {
        const regex =
          /^(?:(?:(?:[a-zA-z\-]+)\:\/{1,3})?(?:[a-zA-Z0-9])(?:[a-zA-Z0-9\-\.]){1,61}(?:\.[a-zA-Z]{2,})+|\[(?:(?:(?:[a-fA-F0-9]){1,4})(?::(?:[a-fA-F0-9]){1,4}){7}|::1|::)\]|(?:(?:[0-9]{1,3})(?:\.[0-9]{1,3}){3}))(?:\:[0-9]{1,5})?$/
        return regex.test(input)
      }
      return true
    }
  },
  computed: {
    invalidDomain() {
      return this.domainNameValidation(this.currentDomainInput)
    },
    ...mapStores(useModalsStore, useSitesStore)
  }
}
</script>
