<template>
  <swiper-container :slides-per-view="slidesPerView" pagination="true">
    <swiper-slide>
      <div :style="`background-image:url(${img_1_URL})`"></div>
    </swiper-slide>
    <swiper-slide>
      <div :style="`background-image:url(${img_2_URL})`"></div>
    </swiper-slide>
    <swiper-slide>
      <div :style="`background-image:url(${img_3_URL})`"></div>
    </swiper-slide>
  </swiper-container>
</template>

<script>
import { register } from 'swiper/element/bundle'

register()

export default {
  props: {
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
