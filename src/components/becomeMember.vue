<template>
  <section class="become-member">
    <h2 class="become-member__title">Как стать участником</h2>

    <div class="become-member__item become-member__item--first">
      <img class="become-member__image" src="/num-1.svg" alt="Шаг 1" role="presentation" />
      <p class="become-member__text">
        Быть клиентом «Балтбет», прошедшим регистрацию и идентификацию, или стать им, нажав кнопку
        «Участвовать».
      </p>
    </div>

    <div class="become-member__item become-member__item--second">
      <img class="become-member__image" src="/num-2.svg" alt="Шаг 2" role="presentation" />
      <p class="become-member__text">
        Заключить пари можно на сайте или в мобильном приложении «Балтбет».
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/variables' as vars;

.become-member {
  width: 70%;
  margin: 40px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(5, 1fr);
}

.become-member__item {
  position: relative;
  width: 80%;
  font-size: 2rem;
  text-align: left;
}

.become-member__image {
  height: 14rem;
  position: absolute;
  top: -3rem;
  left: -25%;
  z-index: -5;
}

.become-member__title {
  text-align: right;
  text-shadow: vars.$title-text-shadow;
  grid-column: 2 / 3;
  grid-row: 2 / 5;
  align-self: center;
}

.become-member__item--first {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
}

.become-member__item--second {
  grid-column: 1 / 2;
  grid-row: 4 / 6;
  align-self: end;
}

@media (max-width: 768px) {
  .become-member {
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .become-member__item {
    margin: 12px 0;
  }

  .become-member__image {
    left: -20%;
  }

  .become-member__item--first,
  .become-member__item--second {
    align-self: center;
  }
}
</style>
