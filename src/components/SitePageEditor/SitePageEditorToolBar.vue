<template>
  <main class="page-editor__toolbar" :class="{ shown: this.modalsStore.getModalStatus('toolbar') }">
    <div class="toolbar__menu">
      <header class="toolbar__header">
        <input type="search" class="search-input" placeholder="Components Library" />
        <button class="search-btn">Search</button>
        <button class="close-btn" @click="closeModal">X</button>
      </header>
      <ul class="toolbar-menu__list">
        <li
          v-for="category of this.toolbarStore.getCategoriesList()"
          :key="category"
          class="toolbar-menu__list-item"
          :class="{ active: currentTabID === category.componentsID }"
          :id="`toggle-${category.componentsID}`"
          @click="toggleCategory"
        >
          {{ category.title }}
        </li>
      </ul>
    </div>
    <div class="toolbar__content" ref="toolbarContent"></div>
    <div class="toolbar__back-drop"></div>
  </main>
</template>

<script>
import { mapStores } from 'pinia'
import { useToolbarStore } from '@/stores/toolbarStore'
import { useModalsStore } from '@/stores/modalsStore'
import { useSitesStore } from '@/stores/sitesStore'
export default {
  data() {
    return {
      currentTabID: 'set_1'
    }
  },
  props: {
    shown: Boolean
  },
  methods: {
    toggleCategory(event) {
      const tab = event.target
      if (tab instanceof HTMLElement) {
        const tabID = tab.id.split('-')[1]
        this.currentTabID = tabID
        this.renderCategoryTools(tabID)
      }
    },
    renderCategoryTools(categoryID) {
      const toolbarContent = this.$refs.toolbarContent
      while (toolbarContent.lastElementChild) {
        toolbarContent.lastElementChild.remove()
      }

      const ol = document.createElement('ol')

      for (const setItem of this.toolbarStore.getComponentsSetItems(categoryID)) {
        const li = document.createElement('li')
        const div = document.createElement('div')

        div.classList.add('component-description-wrapper')

        const spanTitle = document.createElement('span')
        spanTitle.classList.add('component-title')
        spanTitle.textContent = setItem.title

        const spanDescr = document.createElement('span')
        spanDescr.classList.add('component-descr')
        spanDescr.textContent = setItem.descr

        div.append(spanTitle, spanDescr)
        li.append(div)

        li.addEventListener('click', () => {
          console.log(setItem)
          const pageObjectDescr = {
            type: setItem.type,
            textContent: setItem.textContent,
            tag: setItem.tag
          }
          this.sitesStore.addPageContentObject(
            this.sitesStore.getEditingSiteID(),
            this.sitesStore.getEditingPageID(),
            pageObjectDescr
          )
        })

        ol.append(li)
      }

      toolbarContent.append(ol)
    },
    closeModal() {
      this.modalsStore.toggleModalStatus('toolbar')
    }
  },
  computed: {
    ...mapStores(useToolbarStore, useModalsStore, useSitesStore),
    shouldRender(setID) {
      return this.currentTab === setID
    }
  },
  mounted() {
    this.renderCategoryTools('set_1')
  }
}
</script>
