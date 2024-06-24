<template>
  <article class="site-card" @click="hideContextMenu">
    <div class="context-menu" v-if="contextMenuShown" @click.stop="">
      <div class="close-btn" @click="this.contextMenuShown = false">X</div>
      <button class="button options">Rename</button>
      <button class="button danger-btn" @click="killMe">Delete</button>
    </div>

    <div class="site-card__header">
      <h3 class="site-card__title" v-text="title"></h3>
      <div
        v-if="!this.contextMenuShown"
        class="site-card__context-menu-btn"
        @click.stop="showContextMenu"
      >
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>
    <a :href="url" class="site-card__url link" v-text="url"></a>
  </article>
</template>

<script>
export default {
  data() {
    return {
      contextMenuShown: false
    }
  },
  props: {
    title: String,
    url: String
  },
  mounted() {
    document.addEventListener('click', this.hideContextMenu)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.hideContextMenu)
  },

  methods: {
    killMe() {
      this.$emit('killMe', this.url)
    },
    showContextMenu() {
      this.contextMenuShown = true
    },
    hideContextMenu() {
      if (this.contextMenuShown) {
        this.contextMenuShown = false
      }
    }
  }
}
</script>
