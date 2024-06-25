<template>
  <h3 class="sites__title title">Your existing sites:</h3>
  <main v-if="this.sites.length > 0" class="sites__content-wrapper">
    <SitesSiteCard
      v-for="site in sites"
      :key="site.id"
      :title="site.title"
      :id="site.id"
      :url="site.url"
      :ref="site.url"
      @killMe="deleteSiteCard"
    />
  </main>
  <div class="spread-text" v-else>You have not created any site yet...</div>
</template>

<script>
import SitesSiteCard from '@/components/SitesView/SitesSiteCard.vue'
import generateID from '@/helpers/generateID'

export default {
  data() {
    return {
      sites: [
        // TODO: Resolve issue with the same initial ID in this array
        {
          id: `${generateID()}-1`,
          title: 'Lolly Jolly',
          url: 'lolly-jolly.tilda.prod'
        },
        {
          id: `${generateID()}-2`,
          title: 'Hot Potato',
          url: 'hot-potato.tilda.prod'
        },
        {
          id: `${generateID()}-3`,
          title: 'Moby Dick',
          url: 'moby-dick.tilda.prod'
        },
        {
          id: `${generateID()}-4`,
          title: 'Milf Hunter',
          url: 'just-joke.or.tilda.prod'
        }
      ]
    }
  },
  methods: {
    createNewSite() {
      this.sites.push({
        id: generateID(),
        title: this.siteTitle,
        url: `my-project-${this.calcIndex()}.tilda.prod`
      })
    },
    calcIndex() {
      return this.sites.length + 1
    },
    deleteSiteCard(id) {
      this.sites = this.sites.filter((site) => site.id !== id)
      this.sites.forEach((site, index) => {
        if (site.title.includes('My project')) {
          site.title = `My project ${index + 1}`
          site.url = `my-project-${index + 1}.tilda.prod`
        }
      })
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
