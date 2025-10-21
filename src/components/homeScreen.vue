<template>
  <section class="home">
    <header class="home__header">
      <a href="https://baltbet.ru/" class="home__logo">
        <img src="/logo_bb.svg" alt="Логотип компании Балтбет" class="home__logo-img" />
      </a>

      <h1 class="home__title">Присоединяйтесь<br />к VIP статусу «Балтбет»</h1>

      <my-btn id="desktop_btn">Участвовать</my-btn>
    </header>

    <figure class="home__image">
      <img class="home__image-crown" src="/crown.webp" alt="" />
      <img class="home__image-main" src="/pic.webp" alt="Игровой вип-зал" />
    </figure>

    <div class="home__image-mob">
      <img class="home__image-main" src="/pic_mob.webp" alt="Игровой вип-зал" />

      <p class="home__image-mob-title">Стань частью элиты с «Балтбет»</p>

      <div class="home__image-mob-infoblock">
        <div class="home__image-mob-infoblock-item">
          <p>Кешбэк до 8%</p>
        </div>

        <div class="home__image-mob-infoblock-item home__image-mob-infoblock-item--dark">
          <p>Количество фрибетов не ограничено</p>
        </div>

        <div class="home__image-mob-infoblock-item">
          <p>Статус остается навсегда*</p>
        </div>
      </div>
    </div>

    <my-btn-mob id="mobile_btn">Участвовать</my-btn-mob>
  </section>
</template>

<script setup>
import myBtn from '@/components/ui/myBtn.vue'
import myBtnMob from '@/components/ui/myBtnMob.vue'
</script>

<style lang="scss" scoped>
@use '@/assets/variables' as vars;

.home {
  width: 85%;
  margin: 0 auto;
  padding-top: 2rem;
}

.home__header {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  padding: 1rem 0;
  z-index: 10;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: inset 0px 0px 132.7px 0px rgba(0, 0, 0, 0.9);
}

.home__logo {
  width: 15%;
}

.home__logo-img {
  width: 100%;
}

.home__image {
  position: relative;
  width: 100%;
  margin: 0 auto;
  margin-top: 16%;
}

.home__image-main {
  width: 100%;
}

.home__image-crown {
  position: absolute;
  top: -23%;
  left: -4%;
  width: 15%;
}

.home__image-mob {
  display: none;
  margin: 0 auto;
  position: relative;
  padding: 2rem;
  border-radius: 2rem;
  background: rgba(0, 53, 148, 1);
  box-shadow: inset 0px 0px 132.7px 0px rgba(0, 0, 0, 0.9);
}

.home__image-mob-title {
  font-size: 2rem;
  font-weight: 700;
  margin-top: 1.5rem;
  text-shadow: vars.$title-text-shadow;
}

.home__image-mob-infoblock {
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.home__image-mob-infoblock-item {
  width: 25%;
  height: 100px;
  padding: 1rem;
  border-radius: 2rem;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(33, 18, 97, 0.2);
  border: 0.4px solid rgba(33, 18, 97, 0.6);
  box-shadow: 0px 0px 12.77px 0px rgba(0, 0, 0, 0.8) inset;
}

.home__image-mob-infoblock-item--dark {
  background: rgba(33, 18, 97, 0.8);
}

.home__title {
  font-weight: 900;
  font-size: 3rem;
  line-height: 1.1;
  text-transform: uppercase;
  background: vars.$linear-gradient;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

#mobile_btn {
  display: none;
  margin-top: 1.5rem;
}

@media (max-width: 1200px) {
  .home__image {
    margin-top: 20%;
  }
}

@media (max-width: 768px) {
  .home__header {
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    background: inherit;
    box-shadow: none;
    padding: 0;
  }

  .home__logo {
    width: 25%;
  }

  .home__image,
  #desktop_btn {
    display: none;
  }

  .home__image-mob,
  #mobile_btn {
    display: block;
  }

  .home__title {
    margin-bottom: 2rem;
  }
}

@media (max-width: 576px) {
  .home__logo {
    width: 30%;
  }

  .home__image-mob-infoblock {
    flex-direction: column;
  }

  .home__image-mob-infoblock-item {
    width: 90%;
    height: 55px;
    padding: 0 5%;
    margin: 5px 0;
  }
}
</style>
