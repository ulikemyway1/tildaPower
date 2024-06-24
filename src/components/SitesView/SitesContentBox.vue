<template>
  <h3 class="sites__title title">Your existing sites:</h3>
  <main v-if="this.sites.length > 0" class="sites__content-wrapper">
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
  <div class="spread-text" v-else>You have not created any site yet...</div>
</template>

<script>
import SitesSiteCard from '@/components/SitesView/SitesSiteCard.vue'

export default {
  data() {
    return {
      sites: [
        {
          title: 'Lolly Jolly',
          url: 'lolly-jolly.tilda.prod'
        },
        {
          title: 'Hot Potato',
          url: 'hot-potato.tilda.prod'
        },
        {
          title: 'Moby Dick',
          url: 'moby-dick.tilda.prod'
        },
        {
          title: 'Milf Hunter',
          url: 'just-joke.or.tilda.prod'
        }
      ]
    }
  },
  methods: {
    createNewSite() {
      this.sites.push({
        title: this.siteTitle,
        url: `my-project-${this.calcIndex()}.tilda.prod`
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
          site.url = `my-project-${index + 1}.tilda.prod`
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
