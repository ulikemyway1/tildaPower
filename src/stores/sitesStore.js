import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import generateID from '@/helpers/generateID'

export const useSitesStore = defineStore('sites', {
  state: () => ({
    sites: [
      {
        id: '1',
        title: 'Potato jam',
        url: 'potato-jam.tilda.io',
        pages: [
          {
            id: '1-1',
            title: 'New Default Page 1',
            descr: 'Page descr',
            url: 'page-1',
            badgeURL: '',
            pageContent: [{ id: 0, type: 'paragraph', tag: 'h2', textContent: 'Hello!' }]
          },
          {
            id: '1-2',
            title: 'New Default Page 2',
            descr: 'Page descr',
            url: 'page-2',
            badgeURL: '',
            pageContent: [{ id: 0, type: 'paragraph', tag: 'h2', textContent: 'Hello!' }]
          }
        ]
      },
      {
        id: '2',
        title: 'My project 2',
        url: 'project-2.tilda.io',
        pages: [
          {
            id: '2-1',
            title: 'New Default Page',
            descr: 'Page descr',
            url: 'page-1',
            badgeURL: '',
            pageContent: [{ id: 0, type: 'paragraph', tag: 'h2', textContent: 'Hello!' }]
          }
        ]
      },
      {
        id: '3',
        title: 'My project 3',
        url: 'project-3.tilda.io',
        pages: [
          {
            id: '3-1',
            title: 'New Default Page',
            descr: 'Page descr',
            url: 'page-1',
            badgeURL: '',
            pageContent: [{ id: 0, type: 'paragraph', tag: 'h2', textContent: 'Hello!' }]
          }
        ]
      },
      {
        id: '4',
        title: 'My project 4',
        url: 'project-4.tilda.io',
        pages: [
          {
            id: '4-1',
            title: 'New Default Page',
            descr: 'Page descr',
            url: 'page-1',
            badgeURL: '',
            pageContent: [{ id: 0, type: 'paragraph', tag: 'h2', textContent: 'Hello!' }]
          }
        ]
      }
    ],
    editingSiteID: undefined,
    editingPageID: undefined
  }),
  actions: {
    getSitesTotal() {
      return this.sites.length
    },
    getSites() {
      return this.sites
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
    getSiteTitle(siteID) {
      const targetSite = this._findSite(siteID)
      if (targetSite) {
        return targetSite.title
      }
    },
    changeSiteTitle(siteID, newTitle) {
      const targetSite = this._findSite(siteID)
      if (targetSite) {
        targetSite.title = newTitle
      }
    },

    getSiteURL(siteID) {
      const targetSite = this._findSite(siteID)
      if (targetSite) {
        return targetSite.url
      }
    },
    changeSiteURL(siteID, newURL) {
      const targetSite = this._findSite(siteID)
      if (targetSite) {
        targetSite.url = newURL
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

    getSitePages(siteID) {
      const targetSite = this._findSite(siteID)
      if (targetSite) {
        return targetSite.pages
      }
    },
    getSitePagesAmount(siteID) {
      const targetSite = this._findSite(siteID)
      if (targetSite) {
        return targetSite.pages.length
      }
    },
    addSitePage(siteID, pageDescriptionObject) {
      const targetSite = this._findSite(siteID)
      if (targetSite) {
        const pageDescription = {
          id: generateID()
        }
        Object.assign(pageDescription, pageDescriptionObject)
        targetSite.pages.push(pageDescription)
      }
    },
    deleteSitePage(siteID, pageID) {
      const targetSite = this._findSite(siteID)
      if (targetSite) {
        const index = targetSite.pages.findIndex((page) => page.id === pageID)
        if (index !== -1) {
          targetSite.pages.splice(index, 1)
          this.updateDefaultPageTitle(targetSite)
          this.updateDefaultPageURL(targetSite)
        }
      }
    },
    _findSite(targetID) {
      return this.sites.find((site) => site.id === targetID)
    },
    _findPage(targetSite, pageID) {
      return targetSite.pages.find((page) => page.id === pageID)
    },
    updateDefaultPageTitle(targetSite) {
      targetSite.pages.forEach((page, index) => {
        if (page.title.includes('New Default Page')) {
          page.title = `New Default Page ${index + 1}`
        }
      })
    },
    updateDefaultPageURL(targetSite) {
      targetSite.pages.forEach((page, index) => {
        if (page.url.includes('new-page-')) {
          page.url = `new-page-${index + 1}`
        }
      })
    },

    getPageTitle(siteID, pageID) {
      const targetSite = this._findSite(siteID)
      if (targetSite) {
        const targetPage = this._findPage(targetSite, pageID)
        if (targetPage) {
          return targetPage.title
        }
      }
    },
    setPageTitle(siteID, pageID, newTitle) {
      const targetSite = this._findSite(siteID)
      if (targetSite) {
        const targetPage = this._findPage(targetSite, pageID)
        if (targetPage) {
          targetPage.title = newTitle
        }
      }
    },
    getPageDescr(siteID, pageID) {
      const targetSite = this._findSite(siteID)
      if (targetSite) {
        const targetPage = this._findPage(targetSite, pageID)
        if (targetPage) {
          return targetPage.descr
        }
      }
    },
    setPageDescr(siteID, pageID, newDescr) {
      const targetSite = this._findSite(siteID)
      if (targetSite) {
        const targetPage = this._findPage(targetSite, pageID)
        if (targetPage) {
          targetPage.descr = newDescr
        }
      }
    },
    getPageURL(siteID, pageID) {
      const targetSite = this._findSite(siteID)
      if (targetSite) {
        const targetPage = this._findPage(targetSite, pageID)
        if (targetPage) {
          return targetPage.url
        }
      }
    },
    setPageURL(siteID, pageID, newURL) {
      const targetSite = this._findSite(siteID)
      if (targetSite) {
        const targetPage = this._findPage(targetSite, pageID)
        if (targetPage) {
          targetPage.url = newURL
        }
      }
    },
    getPageBadge(siteID, pageID) {
      const targetSite = this._findSite(siteID)
      if (targetSite) {
        const targetPage = this._findPage(targetSite, pageID)
        if (targetPage) {
          return targetPage.badgeURL
        }
      }
    },
    setPageBadge(siteID, pageID, newBadgeURL) {
      const targetSite = this._findSite(siteID)
      if (targetSite) {
        const targetPage = this._findPage(targetSite, pageID)
        if (targetPage) {
          targetPage.badgeURL = newBadgeURL
        }
      }
    },
    getEditingPageID() {
      return this.editingPageID
    },
    setEditingPageID(pageID) {
      this.editingPageID = pageID
    },
    getEditingSiteID() {
      return this.editingSiteID
    },
    setEditingSiteID(siteID) {
      this.editingSiteID = siteID
    },
    getPageContentObject(siteID, pageID) {
      const targetSite = this._findSite(siteID)
      if (targetSite) {
        const targetPage = this._findPage(targetSite, pageID)
        return targetPage.pageContent
      }
    },
    addPageContentObject(siteID, pageID, pageObjectDescr) {
      const targetSite = this._findSite(siteID)
      if (targetSite) {
        const targetPage = this._findPage(targetSite, pageID)
        const index = targetPage.pageContent.length
        const newPageContentObject = {
          id: index,
          type: pageObjectDescr.type,
          textContent: pageObjectDescr.textContent,
          tag: pageObjectDescr.tag,
          imgSrc: pageObjectDescr.imgSrc,
          minHeight: pageObjectDescr.minHeight
        }
        targetPage.pageContent.push(newPageContentObject)
      }
    }
  }
})
