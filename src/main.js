import './assets/sass/main.scss'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import getAuthTokenFromCookie from '@/helpers/getAuthTokenFromCookie'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

router.beforeEach(async (to, from) => {
  const isAuthenticated = getAuthTokenFromCookie()

  if (!isAuthenticated && to.name !== 'pageLogin') {
    return { name: 'pageLogin' }
  }
})

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)

app.mount('#app')
