import { defineStore } from 'pinia'

export const useModalsStore = defineStore('modals', {
  state: () => ({
    modals: {
      domain: false,
      editSitePage: false,
      editSiteID: '',
      editPageID: ''
    }
  }),
  actions: {
    toggleModalStatus(modal) {
      this.modals[modal] = !this.modals[modal]
    },

    getModalStatus(modal) {
      const targetModal = this.modals[modal]
      if (targetModal) {
        return targetModal
      }
      return false
    },
    setEditSiteID(id) {
      this.editSiteID = id
    },
    setEditPageID(id) {
      this.editPageID = id
    },
    getEditSiteID() {
      return this.editSiteID
    },
    getEditPageID() {
      return this.editPageID
    }
  }
})
