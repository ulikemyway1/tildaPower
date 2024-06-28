import { createRouter, createWebHistory } from 'vue-router'
import ProfileView from '../views/ProfileView.vue'
import SitesView from '../views/SitesView.vue'
import SiteEditor from '../views/SiteEditorView.vue'
import PageEditor from '../views/PageEditorView.vue'
import PagePreview from '../views/PagePreviewView.vue'
import PageLogin from '../views/LoginView.vue'
import getAuthTokenFromCookie from '@/helpers/getAuthTokenFromCookie'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'sites',
      component: SitesView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/editor/:id',
      name: 'siteEditor',
      component: SiteEditor,
      props: true
    },
    {
      path: '/editor/:id/:pageId',
      name: 'pageEditor',
      component: PageEditor,
      props: true
    },
    {
      path: '/page-preview/:pageId',
      name: 'pagePreview',
      component: PagePreview,
      props: true
    },
    {
      path: '/login',
      name: 'pageLogin',
      component: PageLogin,
      props: true
    }
  ]
})

router.beforeEach(async (to, from) => {
  const isAuthenticated = getAuthTokenFromCookie()

  if (!isAuthenticated && to.name !== 'pageLogin') {
    return { name: 'pageLogin' }
  }
})

export default router
