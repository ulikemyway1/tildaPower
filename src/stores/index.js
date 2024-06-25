import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import generateID from '@/helpers/generateID'

export const useSitesStore = defineStore('sites', {
  state: () => ({
    sites: [
      {
        id: '1',
        title: 'Potato jam',
        url: 'potato-jam.tilda.io'
      },
      {
        id: '2',
        title: 'My project 2',
        url: 'project-2.tilda.io'
      },
      {
        id: '3',
        title: 'My project 3',
        url: 'project-3.tilda.io'
      },
      {
        id: '4',
        title: 'My project 4',
        url: 'project-4.tilda.io'
      }
    ]
  }),
  actions: {
    getSitesTotal() {
      return this.sites.length
    },
    getSites() {
      return Object.values(this.sites)
    },
    addSite(siteDescriptionObject) {
      this.sites.push(siteDescriptionObject)
    },

    deleteSite(siteID) {
      const index = this.sites.findIndex((site) => site.id === siteID)
      if (index !== -1) {
        this.sites.splice(index, 1)
        this.updateDefaultSiteTitle()
      }
    },

    updateDefaultSiteTitle() {
      this.sites.forEach((site, index) => {
        if (site.title.includes('My project')) {
          site.title = `My project ${index + 1}`
        }
      })
    },

    changeSiteTitle(siteID, newTitle) {
      const targetSite = this._findSite(siteID)
      if (targetSite) {
        targetSite.title = newTitle
      }
    },

    changeSiteBadge(siteID, newBadge) {
      const targetSite = this._findSite(siteID)
      if (targetSite) {
        targetSite.badge = newBadge
      }
    },
    changeSiteDescr(siteID, newDescr) {
      const targetSite = this._findSite(siteID)
      if (targetSite) {
        targetSite.descr = newDescr
      }
    },
    addSitePage(siteID, pageID, pageDescriptionObject) {
      const targetSite = this._findSite(siteID)
      if (targetSite) {
        targetSite.pages[pageID] = pageDescriptionObject
      }
    },
    _findSite(targetID) {
      return this.sites.find((site) => site.id === targetID)
    }
  }
})
