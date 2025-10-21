<template>
  <swiper
    :direction="'vertical'"
    :pagination="false"
    :autoplay="{ delay: 5500, disableOnInteraction: false }"
    :speed="500"
    :modules="modules"
    class="swiper"
  >
    <swiper-slide @touchstart="touchStart" @touchend="touchEndFirstSlide">
      <adv-item :content="advItem1" />
    </swiper-slide>

    <swiper-slide>
      <adv-item :content="advItem2" />
    </swiper-slide>

    <swiper-slide @touchstart="touchStart" @touchend="touchEndLastSlide">
      <adv-item :content="advItem3" />
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { ref } from 'vue'
import advItem from '@/components/advItem.vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const advItem1 = {
  image: '/adv_1.webp',
  title: 'Преимущества VIP статуса',
  subtitle: 'VIP-клиент',
  text: 'Станьте обладателем эксклюзивного VIP статуса абсолютно бесплатно и сохраните его навсегда*!',
}

const advItem2 = {
  image: '/adv_2.webp',
  title: 'Преимущества VIP статуса',
  subtitle: 'Мощный кешбэк',
  text: 'Получайте возврат до 8% от каждой ставки*! Этот щедрый кешбэк позволит вам увеличить свой игровой баланс и продолжать наслаждаться азартными играми.',
}

const advItem3 = {
  image: '/adv_3.webp',
  title: 'Преимущества VIP статуса',
  subtitle: 'Золотой фрибет',
  text: 'Каждый месяц открывайте для себя новые возможности с бонусом «Ставка купоном»! Используйте этот ценный подарок, чтобы увеличить свои шансы на выигрыш.',
}

const modules = [Pagination, Autoplay]
const startY = ref(0)

function touchStart(event) {
  startY.value = event.touches[0].clientY
}

function touchEndLastSlide(event) {
  const endY = event.changedTouches[0].clientY
  const deltaY = startY.value - endY
  if (deltaY > 30) {
    window.scrollBy({ top: deltaY, behavior: 'smooth' })
  }
}

function touchEndFirstSlide(event) {
  const endY = event.changedTouches[0].clientY
  const deltaY = startY.value - endY
  if (deltaY < 30) {
    window.scrollBy({ top: deltaY, behavior: 'smooth' })
  }
}
</script>

<style scoped lang="scss">
.swiper {
  width: 100%;
  height: 80%;
}

.swiper-slide {
  height: 100%;
  display: flex;
  align-items: center;
}

@media (max-width: 992px) {
  .swiper {
    margin-top: 2rem;
    height: 70%;
  }
}

@media (max-width: 768px) {
  .swiper {
    height: 55%;
  }
}

@media (max-width: 576px) {
  .swiper {
    height: 40%;
  }
}
</style>
