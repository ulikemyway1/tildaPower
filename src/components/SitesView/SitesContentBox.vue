<template>
  <h3 class="sites__title title">Your existing sites.</h3>
  <main class="sites__content-wrapper">
    <SitesSiteCard
      v-for="site in sites"
      :title="site.title"
      :url="site.url"
      :key="site.url"
      :ref="site.url"
      @killMe="deleteSiteCard"
      @open-siblings="closeAnotherContextMenu"
    />
  </main>
</template>

<script>
import SitesSiteCard from '@/components/SitesView/SitesSiteCard.vue'

export default {
  data() {
    return {
      sites: [
        {
          title: 'Lolly Jolly',
          url: 'https://lolly-jolly.com'
        },
        {
          title: 'Hot Potato',
          url: 'https://hot-potato.by'
        },
        {
          title: 'Moby Dick',
          url: 'https://moby-dick.io'
        },
        {
          title: 'Milf Hunter',
          url: 'https://just-joke.or.net'
        }
      ]
    }
  },
  methods: {
    createNewSite() {
      this.sites.push({
        title: this.siteTitle,
        url: `https://my-project-${this.calcIndex()}`
      })
    },
    calcIndex() {
      return this.sites.length + 1
    },
    deleteSiteCard(url) {
      this.sites = this.sites.filter((site) => site.url !== url)
      this.sites.forEach((site, index) => {
        if (site.title.includes('My project')) {
          site.title = `My project ${index + 1}`
          site.url = `https://my-project-${index + 1}`
        }
      })
    },
    closeAnotherContextMenu(url) {
      console.log(this.$refs[url].hideContextMenu())
      console.log(url)
    }
  },
  components: {
    SitesSiteCard
  },
  computed: {
    siteTitle() {
      return `My project ${this.sites.length + 1}`
    }
  }
}
</script>
