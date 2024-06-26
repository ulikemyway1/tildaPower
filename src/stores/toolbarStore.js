import { defineStore } from 'pinia'

export const useToolbarStore = defineStore('toolbar', {
  state: () => ({
    categories: {
      textBlock: {
        title: 'Text Block',
        componentsID: 'set-1'
      },
      covers: {
        title: 'Covers',
        componentsID: 'set-2'
      }
    },
    components: {
      'set-1': [
        {
          title: 'Text paragraph',
          descr: 'Simple text paragraph',
          html: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur gravida ante vel molestie. Quisque sed bibendum massa. Integer non sem dictum metus maximus scelerisque non id magna. Suspendisse vestibulum, diam et fermentum sollicitudin, ipsum lorem volutpat sem, sed tristique tortor mi ut sem. Mauris at fringilla augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris convallis, justo a semper condimentum, quam augue venenatis tortor, a dignissim magna mauris vel elit.</p>`
        }
      ],
      'set-2': [
        {
          title: 'Text block with image',
          descr: 'Text block with image is a good choice to make stylish pages!',
          html: `<div style="background-image: url(});">Lorem ipsum...</div>`,
          imgSrc: ''
        }
      ]
    }
  }),
  actions: {
    getCategoriesList() {
      const categoriesList = []
      for (const [categoryID, categoryDescription] of Object.entries(this.categories)) {
        categoriesList.push(categoryDescription.title)
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
    }
  }
})
