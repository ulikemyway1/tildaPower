import { defineStore } from 'pinia'

export const useToolbarStore = defineStore('toolbar', {
  state: () => ({
    categories: {
      textBlock: {
        title: 'Text Block',
        componentsID: 'set_1'
      },
      covers: {
        title: 'Covers',
        componentsID: 'set_2'
      },
      sliders: {
        title: 'Sliders',
        componentsID: 'set_3'
      }
    },
    components: {
      set_1: [
        {
          title: 'Text paragraph',
          descr: 'Simple text paragraph',
          type: 'paragraph',
          tag: 'p',
          textContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur gravida ante vel molestie. Quisque sed bibendum massa. Integer non sem dictum metus maximus scelerisque non id magna. Suspendisse vestibulum, diam et fermentum sollicitudin, ipsum lorem volutpat sem, sed tristique tortor mi ut sem. Mauris at fringilla augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris convallis, justo a semper condimentum, quam augue venenatis tortor, a dignissim magna mauris vel elit.`
        }
      ],
      set_2: [
        {
          title: 'Text block with image',
          type: 'text-block-with-image',
          descr: 'Text block with image is a good choice to make stylish pages!',
          textContent: 'Lorem ipsum dolor...',
          imgSrc:
            'https://uploads.dailydot.com/2023/12/crying-cat-meme.jpg?q=65&auto=format&w=1600&ar=2:1&fit=crop',
          tag: 'div',
          minHeight: '200px'
        }
      ],
      set_3: [
        {
          title: 'Image slider',
          type: 'slider',
          descr: 'Impress with slider!'
        }
      ]
    }
  }),
  actions: {
    getCategoriesList() {
      const categoriesList = []
      for (const [categoryID, categoryDescription] of Object.entries(this.categories)) {
        categoriesList.push(categoryDescription)
      }
      return categoriesList
    },
    getComponentsSetList() {
      const componentsSetList = []
      for (const [categoryID, categoryDescription] of Object.entries(this.categories)) {
        componentsSetList.push(categoryDescription.componentsID)
      }
      return componentsSetList
    },
    getComponentsSetItems(setID) {
      const targetSet = this.components[setID]
      return targetSet
    },
    persist: true
  }
})
