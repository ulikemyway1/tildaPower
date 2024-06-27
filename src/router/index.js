import { createRouter, createWebHistory } from 'vue-router'
import ProfileView from '../views/ProfileView.vue'
import SitesView from '../views/SitesView.vue'
import SiteEditor from '../views/SiteEditorView.vue'
import PageEditor from '../views/PageEditorView.vue'
import PagePreview from '../views/PagePreviewView.vue'

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
    }
  ]
})

export default router
