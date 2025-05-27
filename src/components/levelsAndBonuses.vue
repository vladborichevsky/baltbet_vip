<template>
  <section class="levels_and_bonuses">
    <div class="levels_and_bonuses_left">
      <h2 class="levels_and_bonuses_left_title">Уровни и бонусы</h2>
      <p class="levels_and_bonuses_left_descr">
        В нашей Акции вы можете повысить свой VIP статус до 60-го уровня и получать бонус «Ставка
        купоном» вне зависимости от уровня каждый месяц. Уровни символизируют ваш путь от первых
        шагов в мире ставок до абсолютного профессионализма, а каждое повышение уровня приносит
        больше уверенности и наград.
      </p>
    </div>

    <swiper
      :effect="'cube'"
      :grabCursor="true"
      :cubeEffect="{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }"
      :pagination="true"
      :modules="modules"
      :autoplay="{
        delay: 4000,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      }"
      :speed="800"
      class="mySwiper"
    >
      <swiper-slide>
        <p class="swiper-slide_title">Дебютант</p>
        <p class="swiper-slide_subtitle">(1-14 уровни)</p>
        <p class="swiper-slide_descr">
          Вы вступили в королевский мир азартных игр и делаете свои первые шаги для достижения
          главной вершины. Как новичку вам предоставляется начальный кешбэк в размере до 0,75%, а
          также бонус «Ставка купоном», который будет выдаваться один раз в месяц.
        </p>
      </swiper-slide>

      <swiper-slide>
        <p class="swiper-slide_title">Знаток</p>
        <p class="swiper-slide_subtitle">(15-29 уровни)</p>
        <p class="swiper-slide_descr">
          Вы уже приобрели определённый опыт и начали чувствовать себя увереннее среди
          профессионалов. На этом этапе вам полагается повышенный кешбэк – до 1,5%, а бонус «Ставка
          купоном» будет выдаваться два раза в месяц.
        </p>
      </swiper-slide>

      <swiper-slide>
        <p class="swiper-slide_title">Аналитик</p>
        <p class="swiper-slide_subtitle">(30-44 уровни)</p>
        <p class="swiper-slide_descr">
          Здесь начинается настоящая игра. Вы уже знаете все тонкости и умеете анализировать
          ситуацию на рынке ставок. Ваш кешбэк теперь составляет до 3%, а бонус «Ставка купоном»
          станет доступным трижды в месяц.
        </p>
      </swiper-slide>

      <swiper-slide>
        <p class="swiper-slide_title">Гуру ставок</p>
        <p class="swiper-slide_subtitle">(45-60 уровни)</p>
        <p class="swiper-slide_descr">
          Вы достигли вершины мастерства. Ваше имя известно всем, кто интересуется ставками. Кешбэк
          достигает своего максимального значения – до 8%, а бонус «Ставка купоном» теперь доступен
          четыре раза в месяц.
        </p>
      </swiper-slide>

      <div class="swiper-pagination"></div>
    </swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'

import 'swiper/css/effect-cube'
import 'swiper/css/pagination'

import { EffectCube, Pagination, Autoplay } from 'swiper/modules'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCube, Pagination, Autoplay],
    }
  },
}
</script>

<style lang="scss" scoped>
.levels_and_bonuses {
  display: flex;
  width: 85%;
  margin: 0 auto;
  margin-top: 60px;

  &_left {
    &_title {
      font-weight: 900;
      font-size: 50px;
      text-align: left;
      text-shadow:
        1px 1px 20px #030513,
        1px 1px 20px #030513,
        1px 1px 20px #030513,
        1px 1px 20px #030513;
    }

    &_descr {
      width: 600px;
      font-size: 20px;
      text-align: left;
      margin-top: 10px;
    }
  }
}

.swiper {
  width: 350px;
  height: 350px;
}

.swiper-slide {
  background-color: rgba(9, 59, 154, 0.8);
  background-position: center;
  background-size: cover;
  border-radius: 15px;

  &_title {
    font-weight: 900;
    font-size: 28px;
    padding-top: 15px;
    background: linear-gradient(104.48deg, #d9a317 -4.75%, #ffe585 57.57%, #fbbc21 98.1%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &_subtitle {
    font-size: 16px;
    background: linear-gradient(104.48deg, #d9a317 -4.75%, #ffe585 57.57%, #fbbc21 98.1%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &_descr {
    text-align: justify;
    font-size: 20px;
    padding: 15px;
    background: linear-gradient(104.48deg, #d9a317 -4.75%, #ffe585 57.57%, #fbbc21 98.1%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.swiper-slide img {
  display: block;
  width: 100%;
}

@media (max-width: 1200px) {
  .levels_and_bonuses {
    &_left {
      &_title {
        font-size: 35px;
      }

      &_descr {
        width: 400px;
      }
    }
  }
}

@media (max-width: 992px) {
  .swiper {
    width: 300px;
    height: 400px;
  }

  .levels_and_bonuses {
    margin-top: 0;

    &_left {
      &_title {
        font-size: 30px;
      }

      &_descr {
        width: 320px;
      }
    }
  }
}

@media (max-width: 767px) {
  .swiper {
    margin-top: 20px;
  }

  .levels_and_bonuses {
    flex-direction: column;

    &_left {
      &_title {
        font-size: 20px;
        text-align: center;
      }

      &_descr {
        width: 100%;
      }
    }
  }
}

@media (max-width: 576px) {
  .swiper {
    width: 280px;
    height: 280px;
  }

  .levels_and_bonuses {
    &_left {
      &_descr {
        font-size: 15px;
      }
    }
  }

  .swiper-slide {
    &_title {
      font-size: 20px;
    }

    &_subtitle {
      font-size: 12px;
    }

    &_descr {
      font-size: 15px;
    }
  }
}
</style>
