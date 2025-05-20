<template>
  <section class="become_member">
    <h2>Как стать участником</h2>

    <div class="become_member_item" id="bm_1">
      <img src="/num-1.svg" alt="" />
      <p>
        Быть клиентом «Балтбет», прошедшим регистрацию и идентификацию, или стать им, нажав кнопку
        «Участвовать».
      </p>
    </div>

    <div class="become_member_item" id="bm_2">
      <img src="/num-2.svg" alt="" />
      <p>Заключить пари можно на сайте или в мобильном приложении «Балтбет».</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.become_member {
  width: 55%;
  margin: 0 auto;
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(5, 1fr);

  &_item {
    position: relative;
    width: 250px;
    font-size: 20px;
    text-align: left;

    img {
      height: 150px;
      position: absolute;
      top: -30px;
      left: -50px;
      z-index: -5;
    }
  }
}

h2 {
  font-weight: 900;
  font-size: 50px;
  text-align: left;
  text-shadow:
    1px 1px 20px #030513,
    1px 1px 20px #030513,
    1px 1px 20px #030513,
    1px 1px 20px #030513;
  grid-column: 2 / 3;
  grid-row: 2 / 5;
  align-self: center;
}

#bm_1 {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
}

#bm_2 {
  grid-column: 1 / 2;
  grid-row: 4 / 6;
  align-self: flex-end;
}

@media (max-width: 1300px) {
  h2 {
    font-size: 45px;
  }
}

@media (max-width: 1200px) {
  h2 {
    font-size: 35px;
    justify-self: center;
    align-self: center;
  }
}

@media (max-width: 992px) {
  h2 {
    font-size: 30px;
  }

  .become_member {
    width: 75%;
    margin-bottom: 40px;

    &_item {
      width: 250px;
      font-size: 16px;
      justify-self: center;

      img {
        height: 120px;
      }
    }
  }
}

@media (max-width: 767px) {
  .become_member {
    width: 85%;
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    &_item {
      width: 90%;
      font-size: 15px;

      img {
        height: 120px;
      }
    }

    #bm_1,
    #bm_2 {
      align-self: center;
    }
  }
}

@media (max-width: 576px) {
  h2 {
    font-size: 20px;
  }

  .become_member {
    width: 95%;
    margin: 20px auto;

    &_item {
      width: 70%;

      img {
        height: 80px;
        left: -30px;
        top: -15px;
      }
    }
  }
}
</style>
