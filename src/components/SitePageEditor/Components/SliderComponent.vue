<template>
  <div class="edit-block">
    <BlockWrapper :index />
    <swiper-container :slides-per-view="slidesPerView" pagination="true">
      <swiper-slide v-for="(img, index) in imageArr" :key="index">
        <div :style="`background-image:url(${img})`"></div>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script>
import { register } from 'swiper/element/bundle'
import BlockWrapper from './BlockWrapper.vue'

register()

export default {
  components: {
    BlockWrapper
  },
  props: {
    index: {
      type: Number,
      required: true
    },
    imageArr: {
      type: Array,
      default: () => {
        return [
          '/src/assets/images/cat.jpg',
          '/src/assets/images/cat2.jpg',
          '/src/assets/images/cat3.jpg'
        ]
      }
    },
    img_1_URL: {
      type: String,
      default:
        'https://geek.justjoin.it/wp-content/uploads/2021/08/191748854_2860332700871857_8861298208624190856_n.jpg'
    },
    img_2_URL: {
      type: String,
      default: 'https://wedlugplanu.pl/wp-content/uploads/2015/10/57398326.jpg'
    },
    img_3_URL: {
      type: String,
      default:
        'https://www.googleapis.com/download/storage/v1/b/kaggle-forum-message-attachments/o/inbox%2F10465213%2Ff478514d0ae831503a43720576d7fda6%2Fprogrammerhumor-io-programming-memes-stackoverflow-memes-3e46dd23d62da91-608x805.webp?generation=1660784154835315&alt=media'
    },
    slidesPerView: {
      type: String,
      default: '3'
    }
  }
}
</script>
