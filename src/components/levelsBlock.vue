<template>
  <section class="levels">
    <article class="levels__info">
      <header class="levels__header">
        <h2 class="levels__title">Уровни и бонусы</h2>
      </header>
      <p class="levels__descr">{{ descrTxt }}</p>
    </article>

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
      class="levels__swiper"
    >
      <swiper-slide class="levels__slide">
        <levels-slide :info="slides[0]" />
      </swiper-slide>

      <swiper-slide class="levels__slide">
        <levels-slide :info="slides[1]" />
      </swiper-slide>

      <swiper-slide class="levels__slide">
        <levels-slide :info="slides[2]" />
      </swiper-slide>

      <swiper-slide class="levels__slide">
        <levels-slide :info="slides[3]" />
      </swiper-slide>

      <div class="levels__pagination swiper-pagination"></div>
    </swiper>
  </section>
</template>

<script setup>
import levelsSlide from '@/components/levelsSlide.vue'

import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/pagination'

import { EffectCube, Pagination, Autoplay } from 'swiper/modules'

const modules = [EffectCube, Pagination, Autoplay]

const descrTxt =
  'В нашей Акции вы можете повысить свой VIP статус до 60-го уровня и получать бонус «Ставка купоном» вне зависимости от уровня каждый месяц. Уровни символизируют ваш путь от первых шагов в мире ставок до абсолютного профессионализма, а каждое повышение уровня приносит больше уверенности и наград.'

const slides = [
  {
    title: 'Дебютант',
    subtitle: '(1–14 уровни)',
    descr:
      'Вы вступили в королевский мир азартных игр и делаете свои первые шаги для достижения главной вершины. Как новичку вам предоставляется начальный кешбэк в размере до 0,75%, а также бонус «Ставка купоном», который будет выдаваться один раз в месяц.',
  },
  {
    title: 'Знаток',
    subtitle: '(15–29 уровни)',
    descr:
      'Вы уже приобрели определённый опыт и начали чувствовать себя увереннее среди профессионалов. На этом этапе вам полагается повышенный кешбэк – до 1,5%, а бонус «Ставка купоном» будет выдаваться два раза в месяц.',
  },
  {
    title: 'Аналитик',
    subtitle: '(30–44 уровни)',
    descr:
      'Здесь начинается настоящая игра. Вы уже знаете все тонкости и умеете анализировать ситуацию на рынке ставок. Ваш кешбэк теперь составляет до 3%, а бонус «Ставка купоном» станет доступным трижды в месяц.',
  },
  {
    title: 'Гуру ставок',
    subtitle: '(45–60 уровни)',
    descr:
      'Вы достигли вершины мастерства. Ваше имя известно всем, кто интересуется ставками. Кешбэк достигает своего максимального значения – до 8%, а бонус «Ставка купоном» теперь доступен четыре раза в месяц.',
  },
]
</script>

<style lang="scss" scoped>
@use '@/assets/variables' as vars;

.levels {
  display: flex;
  width: 85%;
  margin: 6rem auto 0 auto;
}

.levels__info {
  width: 45%;
}

.levels__title {
  text-align: left;
  text-shadow: vars.$title-text-shadow;
}

.levels__descr {
  font-size: 2rem;
  text-align: left;
  margin-top: 1rem;
  text-align: justify;
}

.levels__swiper {
  width: 35rem;
  height: 35rem;
}

.levels__slide {
  background-color: rgba(9, 59, 154, 0.8);
  background-position: center;
  background-size: cover;
  border-radius: 1.5rem;
}

@media (max-width: 992px) {
  .levels {
    margin-top: 0;
  }
}

@media (max-width: 768px) {
  .levels {
    flex-direction: column;
  }

  .levels__info {
    width: 100%;
  }

  .levels__title {
    text-align: center;
  }

  .levels__descr {
    font-size: 2.5rem;
  }

  .levels__swiper {
    margin-top: 2rem;
    width: 45rem;
    height: 45rem;
  }
}

@media (max-width: 440px) {
  .levels__swiper {
    width: 40rem;
    height: 45rem;
  }
}
</style>
