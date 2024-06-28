<template>
  <Transition>
    <section
      class="modal modal--absolute"
      v-show="this.getModalStatus('contentToolbar')"
      ref="modalRef"
    >
      <button type="button" class="button-link button-link--icon modal__close" @click="closeModal">
        <svg role="img" aria-hidden="true" width="30" height="30">
          <use xlink:href="#menu-icon-cross"></use>
        </svg>
      </button>
      <div class="modal-body edit-block-content-modal">
        <form action="" @submit.prevent="submitForm">
          <div v-if="!galeryVisible" class="edit-block-content-modal__fields">
            <label v-if="contentType === 'paragraph'" class="edit-block-content-modal__label"
              >Текст
              <textarea
                v-model="text"
                rows="5"
                class="edit-block-content-modal__textarea"
              ></textarea>
            </label>
            <label
              v-if="contentType === 'text-block-with-image'"
              class="edit-block-content-modal__label"
              >Заголовок
              <textarea
                v-model="text"
                rows="5"
                class="edit-block-content-modal__textarea"
              ></textarea>
            </label>
          </div>

          <div
            class="edit-block-content-modal__galery"
            v-if="contentType === 'text-block-with-image'"
          >
            <div v-if="!galeryVisible" class="edit-block-content-modal__img-container">
              <img class="background-img" :src="icon" alt="Beidge icon" />
              <button
                class="button-link edit-block-content-modal__open-unsplash-button"
                type="button"
                @click="galeryVisible = true"
              >
                Изменить изображение
              </button>
            </div>
            <div v-if="galeryVisible" class="badges-wrapper">
              <img
                v-for="img in imagesFetched"
                :key="img"
                :src="img"
                alt="Image Badge"
                class="image-badge"
                @click="selectIcon(img)"
              />
            </div>
          </div>

          <div class="edit-block-content-modal__galery" v-if="contentType === 'slider'">
            <div v-if="!galerySliderVisible" class="edit-block-content-modal__slides">
              <div
                v-for="(image, index) in imageArr"
                :key="index"
                class="edit-block-content-modal__img-container"
              >
                <img class="background-img" :src="image" alt="Beidge icon" />
                <button
                  class="button-link edit-block-content-modal__open-unsplash-button"
                  type="button"
                  @click="openSliderGalery(index)"
                >
                  Изменить изображение
                </button>
                <button
                  v-if="index === imageArr.length - 1"
                  type="button"
                  class="button-link button-link--icon edit-block-wrapper__add"
                  @click="addSlide"
                >
                  <svg
                    role="img"
                    aria-hidden="true"
                    width="50"
                    height="50"
                    aria-label="Add Element"
                  >
                    <use xlink:href="#plus-icon"></use>
                  </svg>
                </button>

                <button
                  type="button"
                  class="button-link button-link--icon edit-block-content-modal__slide-remove"
                >
                  <svg
                    role="img"
                    aria-hidden="true"
                    width="30"
                    height="30"
                    aria-label="Remove Element"
                    @click="removeSlide(index)"
                  >
                    <use xlink:href="#cart-icon"></use>
                  </svg>
                </button>
              </div>
            </div>

            <div v-if="galerySliderVisible" class="badges-wrapper">
              <img
                v-for="img in imagesFetched"
                :key="img"
                :src="img"
                alt="Image Badge"
                class="image-badge"
                @click="selectSliderImg(img)"
              />
            </div>
          </div>

          <button
            v-if="!galeryVisible && !galerySliderVisible"
            type="submit"
            class="button-link button-link--colored edit-block-content-modal__submit"
          >
            Сохранить
          </button>
        </form>
      </div>
    </section>
  </Transition>
  <Transition>
    <div class="overlay" v-show="this.getModalStatus('contentToolbar')" @click="closeModal"></div
  ></Transition>
</template>

<script>
import { useModalsStore } from '@/stores/modalsStore'
import { useSitesStore } from '@/stores/sitesStore'
import fetchBadges from '@/api/fetchBadges'
import { mapState, mapActions } from 'pinia'

export default {
  data() {
    return {
      pageID: '',
      siteID: '',
      modalType: 'editBlockContentModal',
      contentIndex: '',
      contentType: '',
      text: '',
      icon: '',
      imagesFetched: [],
      imageArr: [],
      galeryVisible: false,
      galerySliderVisible: false,
      galerySlideIndex: 0
    }
  },
  computed: {
    ...mapState(useModalsStore, ['contentToolbarID'])
  },

  methods: {
    ...mapActions(useModalsStore, ['toggleModalStatus', 'getModalStatus']),
    ...mapActions(useSitesStore, [
      'getEditingPageID',
      'getEditingSiteID',
      'getPageContentObject',
      'editBlockText',
      'editBlockImg',
      'editSlider'
    ]),

    closeModal() {
      this.galeryVisible = false
      this.galerySliderVisible = false
      this.toggleModalStatus('contentToolbar')
    },

    addSlide() {
      let copy = [...this.imageArr]
      copy.push('/src/assets/images/cat.jpg')
      this.imageArr = copy
    },

    removeSlide(index) {
      let copy = [...this.imageArr]
      copy.splice(index, 1)
      if (copy.length > 3) this.imageArr = copy
    },

    selectIcon(icon) {
      this.icon = icon
      this.galeryVisible = false
    },

    openSliderGalery(index) {
      this.galerySliderVisible = true
      this.galerySlideIndex = index
    },

    selectSliderImg(icon) {
      let copy = [...this.imageArr]
      copy[this.galerySlideIndex] = icon
      this.imageArr = copy
      this.galerySliderVisible = false
    },

    submitForm() {
      if (this.contentType === 'paragraph') {
        this.editBlockText(this.siteID, this.pageID, this.contentToolbarID, this.text)
      } else if (this.contentType === 'text-block-with-image') {
        this.editBlockImg(this.siteID, this.pageID, this.contentToolbarID, this.icon, this.text)
      } else if (this.contentType === 'slider') {
        this.editSlider(this.siteID, this.pageID, this.contentToolbarID, this.imageArr)
      }

      this.text = ''
      this.icon = ''
      this.imageArr = []
      this.galeryVisible = false
      this.galerySliderVisible = false
      this.toggleModalStatus('contentToolbar')
    }
  },
  async mounted() {
    this.pageID = this.getEditingPageID()
    this.siteID = this.getEditingSiteID()
    this.imagesFetched = await fetchBadges()
  },

  watch: {
    contentToolbarID: {
      handler() {
        this.galeryVisible = false
        this.galerySliderVisible = false
        this.contentIndex = this.contentToolbarID
        let pageContent = this.getPageContentObject(this.siteID, this.pageID)

        if (pageContent && this.contentIndex !== undefined) {
          if (pageContent.length) {
            let pageContentSelectedBlock = pageContent[this.contentIndex]
            this.contentType = pageContentSelectedBlock.type
            this.h2 =
              pageContentSelectedBlock.tag === 'h2' ? pageContentSelectedBlock.textContent : ''
            this.text = pageContentSelectedBlock.textContent || ''
            this.icon = pageContentSelectedBlock.imgSrc || '/src/assets/images/cat.jpg'
            this.imageArr = pageContentSelectedBlock.imageArr || [
              '/src/assets/images/cat.jpg',
              '/src/assets/images/cat2.jpg',
              '/src/assets/images/cat3.jpg'
            ]
          }
        }
      },
      immediate: true
    }
  }
}
</script>
