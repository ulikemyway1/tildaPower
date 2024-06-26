<template>
  <main class="page-editor__toolbar">
    <div class="toolbar__menu">
      <header class="toolbar__header">
        <input type="search" class="search-input" placeholder="Components Library" />
        <button class="search-btn">Search</button>
        <button class="close-btn">X</button>
      </header>
      <ul class="toolbar-menu__list">
        <li
          v-for="category of this.toolbarStore.getCategoriesList()"
          :key="category"
          class="toolbar-menu__list-item"
        >
          {{ category }}
        </li>
      </ul>
    </div>
    <div class="toolbar__content">
      <ol
        v-for="setID of this.toolbarStore.getComponentsSetList()"
        :key="setID"
        :id="setID"
        class="toolbar-category-wrapper"
      >
        <li v-for="setItem of this.toolbarStore.getComponentsSetItems(setID)">
          <div class="component-description-wrapper">
            <span class="component-title">{{ setItem.title }}</span>
            <span class="component-descr">{{ setItem.descr }}</span>
          </div>
        </li>
      </ol>
    </div>
  </main>
</template>

<script>
import { mapStores } from 'pinia'
import { useToolbarStore } from '@/stores/toolbarStore'

export default {
  computed: {
    ...mapStores(useToolbarStore)
  }
}
</script>
