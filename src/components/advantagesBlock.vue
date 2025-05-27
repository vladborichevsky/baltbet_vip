<template>
  <swiper
    :direction="'vertical'"
    :pagination="false"
    :autoplay="{ delay: 5500, disableOnInteraction: false }"
    :speed="500"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide @touchstart="touchStart" @touchend="touchEndFirstSlide">
      <div class="advantages_block_slide">
        <img src="/advantages_block_1.webp" alt="" loading="lazy" />
        <div class="advantages_block_slide_info">
          <h2 class="advantages_block_slide_info_title">Преимущества VIP статуса</h2>
          <div class="advantages_block_slide_info_descr">
            <p class="advantages_block_slide_info_descr_subtitle">VIP-клиент</p>
            <p class="advantages_block_slide_info_descr_text">
              Станьте обладателем эксклюзивного VIP статуса абсолютно бесплатно и сохраните его
              навсегда*!
            </p>
          </div>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="advantages_block_slide">
        <img src="/advantages_block_2.webp" alt="" loading="lazy" />
        <div class="advantages_block_slide_info">
          <div class="advantages_block_slide_info_descr">
            <p class="advantages_block_slide_info_descr_subtitle">Мощный кешбэк</p>
            <p class="advantages_block_slide_info_descr_text">
              Получайте возврат до 8% от каждой ставки*! Этот щедрый кешбэк позволит вам увеличить
              свой игровой баланс и продолжать наслаждаться азартными играми.
            </p>
          </div>
          <h2 class="advantages_block_slide_info_title">Преимущества VIP статуса</h2>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide @touchstart="touchStart" @touchend="touchEndLastSlide">
      <div class="advantages_block_slide">
        <img src="/advantages_block_3.webp" alt="" loading="lazy" />
        <div class="advantages_block_slide_info">
          <h2 class="advantages_block_slide_info_title">Преимущества VIP статуса</h2>
          <div class="advantages_block_slide_info_descr">
            <p class="advantages_block_slide_info_descr_subtitle">Золотой фрибет</p>
            <p class="advantages_block_slide_info_descr_text">
              Каждый месяц открывайте для себя новые возможности с бонусом «Ставка купоном»!
              Используйте этот ценный подарок, чтобы увеличить свои шансы на выигрыш.
            </p>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      startY: 0,
    }
  },

  methods: {
    touchStart(event) {
      this.startY = event.touches[0].clientY
    },
    touchEndLastSlide(event) {
      const endY = event.changedTouches[0].clientY
      const deltaY = this.startY - endY

      if (deltaY > 30) {
        // Прокрутка вниз на величину свайпа
        window.scrollBy({
          top: deltaY,
          behavior: 'smooth',
        })
      }
    },
    touchEndFirstSlide(event) {
      const endY = event.changedTouches[0].clientY
      const deltaY = this.startY - endY

      if (deltaY < 30) {
        // Прокрутка вверх на величину свайпа
        window.scrollBy({
          top: deltaY,
          behavior: 'smooth',
        })
      }
    },
  },

  setup() {
    return {
      modules: [Pagination, Autoplay],
    }
  },
}
</script>

<style scoped lang="scss">
.advantages {
  &_block {
    &_slide {
      cursor: grab;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;

      img {
        width: 40%;
        transform: translateX(-25%);
      }

      &_info {
        padding-right: 185px;

        &_title {
          font-size: 45px;
          font-weight: 900;
          text-align: right;
          text-shadow:
            1px 1px 20px #030513,
            1px 1px 20px #030513,
            1px 1px 20px #030513,
            1px 1px 20px #030513;
        }

        &_descr {
          display: flex;
          flex-direction: column;
          align-items: end;
          margin: 20px 0;

          &_subtitle {
            font-size: 35px;
            font-weight: 700;
            text-align: right;
          }

          &_text {
            width: 70%;
            font-size: 20px;
            text-align: right;
            text-shadow: 10px 10px 20px #030513;
          }
        }
      }
    }
  }
}

.swiper {
  width: 100%;
  height: 80%;
}

.swiper-slide {
  height: 100%;
  display: flex;
  align-items: center;
}

@media (max-width: 1200px) {
  .advantages_block_slide_info_title {
    font-size: 35px;
  }
}

@media (max-width: 992px) {
  .swiper {
    margin-top: 20px;
    height: 70%;
  }

  .advantages_block_slide_info {
    padding-right: 80px;

    &_title {
      font-size: 30px;
    }

    &_descr_subtitle {
      font-size: 22px;
    }
  }
}

@media (max-width: 767px) {
  .swiper {
    height: 55%;
  }

  .advantages_block_slide_info {
    padding-right: 55px;

    &_title {
      font-size: 25px;
    }

    &_descr_subtitle {
      font-size: 18px;
    }

    &_descr_text {
      font-size: 15px;
    }
  }
}

@media (max-width: 576px) {
  .swiper {
    height: 40%;
  }

  .advantages_block_slide_info {
    padding-right: 20px;

    &_title {
      font-size: 16px;
    }

    &_descr_subtitle {
      font-size: 15px;
    }

    &_descr_text {
      width: 90%;
      font-size: 15px;
    }
  }
}

@media (max-width: 400px) {
  .advantages_block_slide_info {
    padding-right: 30px;

    &_title {
      font-size: 14px;
    }

    &_descr_subtitle {
      font-size: 12px;
    }

    &_descr_text {
      font-size: 11px;
    }
  }
}
</style>
