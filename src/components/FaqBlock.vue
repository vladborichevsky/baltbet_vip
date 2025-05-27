<template>
  <section class="faq">
    <h2 class="h2_desc">Часто<br />задаваемые<br />вопросы (FAQ)</h2>
    <h2 class="h2_mob">Часто задаваемые вопросы (FAQ)</h2>

    <faq-item id="question_1">
      <div class="faq_item_question">
        Могу ли я участвовать в других акциях одновременно с этой?
      </div>
      <div class="faq_item_answer">Да, ограничений нет.</div>
    </faq-item>

    <faq-item id="question_2">
      <div class="faq_item_question">Как принять участие в акции?</div>
      <div class="faq_item_answer">
        Для того чтобы принять участие в Акции необходимо совершать пари в разделах «Линии» или
        «LIVE» на сайте baltbet.ru или мобильном приложение «Балтбет».
      </div>
    </faq-item>

    <faq-item id="question_3">
      <div class="faq_item_question">Сколько времени действует VIP статус после получения?</div>
      <div class="faq_item_answer">Cтатус действует до окончания акции.</div>
    </faq-item>

    <faq-item id="question_4">
      <div class="faq_item_question">
        Какие ставки учитываются для повышения VIP статуса/получения кешбэка?
      </div>
      <div class="faq_item_answer">
        В рамках настоящей Акции учитываются ординары (одиночное пари) с коэффициентами не менее 1.1
        и экспрессы с коэффициентами каждого исхода не менее 1.1.
      </div>
    </faq-item>
  </section>
</template>

<script setup>
import FaqItem from '@/components/ui/FaqItem.vue'
</script>

<style lang="scss" scoped>
.h2_desc {
  font-weight: 900;
  font-size: 50px;
  text-align: right;
  margin: 10px;
  text-shadow:
    1px 1px 20px #030513,
    1px 1px 20px #030513,
    1px 1px 20px #030513,
    1px 1px 20px #030513;
  grid-column: 1 / 3;
  grid-row: 1 / 1;
  justify-self: center;
}

.h2_mob {
  display: none;
}

.faq {
  width: 85%;
  margin: 0 auto;
  display: grid;
  margin-top: 20px;
  grid-template-columns: 1fr 1fr 1fr 0.8fr;
  grid-template-rows: repeat(2, 1fr);
}

.faq_item {
  &_question {
    font-weight: 700;
    font-size: 20px;
  }

  &_answer {
    margin-top: 10px;
    font-weight: 300;
    font-size: 20px;
  }
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

@media (max-width: 1300px) {
  .h2_desc {
    font-size: 45px;
  }

  .faq {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 1200px) {
  .h2_desc {
    font-size: 35px;
  }
}

@media (max-width: 992px) {
  .faq {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 0.5fr 1fr 1fr 1fr;
  }

  .h2_desc {
    display: none;
  }

  .h2_mob {
    display: block;
    font-size: 30px;
    font-weight: 900;
    text-align: center;
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    margin: 10px;
    text-shadow:
      1px 1px 20px #030513,
      1px 1px 20px #030513,
      1px 1px 20px #030513,
      1px 1px 20px #030513;
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

@media (max-width: 768px) {
  .faq_item {
    padding: 10px;

    &_question,
    &_answer {
      font-size: 15px;
    }
  }
}

@media (max-width: 576px) {
  .h2_mob {
    font-size: 20px;
    margin: 0;
    align-self: center;
  }

  .faq {
    margin: 0 auto;

    &_item_question,
    &_item_answer {
      font-size: 11px;
    }
  }
}
</style>
