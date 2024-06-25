import { defineStore } from 'pinia'

export const useModalsStore = defineStore('modals', {
  state: () => ({
    modals: {
      domain: false
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
    }
  }
})
