<template>
  <article class="site-card">
    <h3 class="site-card__title" v-text="title"></h3>
    <a :href="url" class="site-card__url" v-text="url"></a>
    <button @click="killMe">Delete</button>
  </article>
</template>

<script>
export default {
  props: {
    title: String,
    url: String
  },
  methods: {
    killMe() {
      this.$emit('killMe', this.url)
    }
  }
}
</script>
