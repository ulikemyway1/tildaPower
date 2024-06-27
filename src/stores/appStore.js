import { defineStore } from 'pinia'
import CryptoJS from 'crypto-js'

export const useAppStore = defineStore('app', {
  state: () => ({
    hashedPassword: '5907f5042553e8c38c54823c35adece4d3946a8423fe0f4b84690b23ae7b225d'
  }),
  getters: {
    gethashedPassword: (state) => state.hashedPassword
  }
})
