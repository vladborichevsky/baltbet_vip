<template>
  <section class="faq">
    <h2 class="faq__title">Часто задаваемые вопросы (FAQ)</h2>

    <faq-item id="question_1" :content="faqItem1" />

    <faq-item id="question_2" :content="faqItem2" />

    <faq-item id="question_3" :content="faqItem3" />

    <faq-item id="question_4" :content="faqItem4" />
  </section>
</template>

<script setup>
import faqItem from '@/components/faqItem.vue'

const faqItem1 = {
  question: ' Могу ли я участвовать в других акциях одновременно с этой?',
  answer: 'Да, ограничений нет.',
}

const faqItem2 = {
  question: 'Как принять участие в акции?',
  answer:
    'Для того чтобы принять участие в Акции, необходимо совершать пари в разделах «Линии» или «LIVE» на сайте baltbet.ru или в мобильном приложении «Балтбет».',
}

const faqItem3 = {
  question: 'Сколько времени действует VIP статус после получения?',
  answer: 'Cтатус действует до окончания акции.',
}

const faqItem4 = {
  question: 'Какие ставки учитываются для повышения VIP статуса/получения кешбэка?',
  answer:
    'В рамках настоящей Акции учитываются ординары (одиночное пари) с коэффициентами не менее 1.1 и экспрессы с коэффициентами каждого исхода не менее 1.1.',
}
</script>

<style lang="scss" scoped>
@use '@/assets/variables' as vars;

.faq {
  width: 85%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
}

.faq__title {
  text-shadow: vars.$title-text-shadow;
  grid-column: 1 / 3;
  grid-row: 1 / 1;
  align-self: center;
}

#question_1 {
  grid-column: 3 / 4;
  grid-row: 1 / 2;
}

#question_2 {
  grid-column: 4 / 5;
  grid-row: 1 / 3;
}

#question_3 {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}

#question_4 {
  grid-column: 2 / 4;
  grid-row: 2 / 3;
}

@media (max-width: 992px) {
  .faq {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 0.5fr 1fr 1fr 1fr;
  }

  .faq__title {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }

  #question_1 {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }

  #question_2 {
    grid-column: 2 / 3;
    grid-row: 2 / 4;
  }

  #question_3 {
    grid-column: 2 / 3;
    grid-row: 4 / 5;
  }

  #question_4 {
    grid-column: 1 / 2;
    grid-row: 3 / 5;
  }
}

@media (max-width: 576px) {
  .faq {
    grid-template-rows: 0.2fr 1fr 1fr 1fr;
  }
}
</style>
