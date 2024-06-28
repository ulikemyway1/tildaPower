<template>
  <article class="site-card" @click="this.handleCardClick">
    <div class="context-menu" v-if="contextMenuShown" @click.stop>
      <div class="close-btn" @click="this.contextMenuShown = false">X</div>
      <button class="button options" title="Rename Site Title">Rename</button>
      <button class="button danger-btn" title="Delete Site" @click="killMe">Delete</button>
    </div>

    <div class="site-card__header">
      <h3 class="site-card__title">{{ title }}</h3>

      <div
        v-if="!this.contextMenuShown"
        class="site-card__context-menu-btn"
        title="Show context menu"
        @click.stop="showContextMenu"
      >
        <div class="dot" aria-hidden="true"></div>
        <div class="dot" aria-hidden="true"></div>
        <div class="dot" aria-hidden="true"></div>
      </div>
    </div>
    <div class="site-card__footer">
      <button class="button edit-btn">Edit</button>
      <a class="site-card__url link">{{ url }}</a>
    </div>
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
    id: String,
    title: String,
    url: String
  },
  mounted() {
    document.addEventListener('click', this.hideContextMenu)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.hideContextMenu)
  },

  methods: {
    killMe() {
      this.$emit('killMe', this.id)
      this.hideContextMenu()
    },
    showContextMenu() {
      this.contextMenuShown = true
    },
    handleCardClick() {
      this.hideContextMenu()
      this.redirectToEditor()
    },
    hideContextMenu() {
      if (this.contextMenuShown) {
        this.contextMenuShown = false
      }
    },
    redirectToEditor() {
      this.$router.push(`/editor/${this.id}`)
    }
  }
}
</script>
