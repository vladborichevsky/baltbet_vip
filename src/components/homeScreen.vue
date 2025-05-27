<template>
  <div class="home_screen">
    <div class="home_screen_header">
      <a href="https://baltbet.ru/" class="home_screen_logo">
        <img src="/logo_bb.svg" alt="Логотип компании Балтбет" />
      </a>

      <h1>Присоединяйтесь<br />к VIP статусу «Балтбет»</h1>

      <main-button id="desktop_btn" />
    </div>

    <div class="home_screen_image">
      <img class="home_screen_image_crown" src="/crown.webp" alt="" />
      <img class="home_screen_image_main" src="/picture.webp" alt="Игровой вип-зал" />
    </div>

    <div class="home_screen_image_mobile">
      <img class="home_screen_image_crown" src="/crown.webp" alt="" />
      <img class="home_screen_image_main" src="/picture_mobile.webp" alt="Игровой вип-зал" />

      <p class="home_screen_image_mobile_title">Стань частью<br />элиты с «Балтбет»</p>

      <div class="home_screen_image_mobile_infoblock">
        <div class="home_screen_image_mobile_infoblock_item">
          <img src="/mobile_icon_1.svg" alt="" />
          <p>Кешбэк до 8%</p>
        </div>

        <div class="home_screen_image_mobile_infoblock_item" id="dark_infoblock">
          <img src="/mobile_icon_2.svg" alt="" />
          <p>Количество фрибетов<br />не ограничено</p>
        </div>

        <div class="home_screen_image_mobile_infoblock_item">
          <img src="/mobile_icon_3.svg" alt="" />
          <p><br />Статус<br />остается<br />навсегда*</p>
        </div>
      </div>
    </div>

    <main-button-mob id="mobile_btn" />
  </div>
</template>

<script setup>
import mainButton from '@/components/ui/mainButton.vue'
import mainButtonMob from '@/components/ui/mainButtonMob.vue'
</script>

<style lang="scss" scoped>
.home_screen {
  width: 1200px;
  margin: 0 auto;
  padding-top: 20px;

  &_header {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    padding: 10px 0;
    z-index: 10;
    margin: 0 auto;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.5);
    box-shadow: inset 0px 0px 132.7px 0px rgba(0, 0, 0, 0.9);
  }

  &_logo {
    img {
      width: 200px;
    }
  }

  &_image {
    position: relative;
    width: 1200px;
    margin: 0 auto;
    margin-top: 210px;

    &_main {
      width: 100%;
    }

    &_crown {
      position: absolute;
      top: -125px;
      left: -50px;
      width: 180px;
    }

    &_mobile {
      display: none;
    }
  }
}

h1 {
  font-weight: 900px;
  font-size: 50px;
  line-height: 50px;
  background: linear-gradient(104.48deg, #d9a317 -4.75%, #ffe585 57.57%, #fbbc21 98.1%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
}

#mobile_btn {
  display: none;
}

@media (max-width: 1300px) {
  .home_screen {
    width: 85%;

    &_logo {
      img {
        width: 150px;
      }
    }

    &_image {
      width: 100%;

      &_crown {
        top: -120px;
        left: -55px;
        width: 180px;
      }
    }
  }

  h1 {
    font-size: 40px;
  }
}

@media (max-width: 1200px) {
  .home_screen {
    &_logo {
      img {
        width: 140px;
      }
    }

    &_image {
      margin-top: 205px;

      &_crown {
        top: -120px;
        left: -55px;
        width: 180px;
      }
    }
  }

  h1 {
    font-size: 35px;
  }
}

@media (max-width: 992px) {
  .home_screen {
    &_header {
      margin-top: 0;
      align-items: center;
    }

    &_logo {
      img {
        width: 110px;
      }
    }

    &_image {
      margin-top: 190px;

      &_crown {
        top: -100px;
        left: -45px;
        width: 150px;
      }
    }
  }

  h1 {
    font-size: 30px;
  }
}

@media (max-width: 767px) {
  .home_screen {
    &_image {
      &_crown {
        top: -60px;
        left: -26px;
        width: 90px;
      }
    }

    &_header {
      position: relative;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      background: inherit;
      box-shadow: none;
      padding: 0;
    }

    &_image {
      display: none;

      &_mobile {
        display: block;
        position: relative;
        padding: 20px;
        border-radius: 20px;
        background: rgba(0, 53, 148, 1);
        box-shadow: inset 0px 0px 132.7px 0px rgba(0, 0, 0, 0.9);

        &_title {
          font-size: 20px;
          font-weight: 700;
          margin-top: 15px;
          text-shadow:
            1px 1px 20px #030513,
            1px 1px 20px #030513,
            1px 1px 20px #030513,
            1px 1px 20px #030513;
        }

        &_infoblock {
          margin-top: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        &_infoblock_item {
          width: 25%;
          height: 130px;
          padding: 10px;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: rgba(33, 18, 97, 0.2);
          border: 0.4px solid rgba(33, 18, 97, 0.6);
          box-shadow: 0px 0px 12.77px 0px rgba(0, 0, 0, 0.8) inset;

          img {
            width: 30px;
            margin-bottom: 10px;
          }
        }
      }
    }
  }

  #dark_infoblock {
    background: rgba(33, 18, 97, 0.8);
  }

  h1 {
    font-size: 30px;
    line-height: 40px;
    margin-bottom: 20px;
  }

  #desktop_btn {
    display: none;
  }

  #mobile_btn {
    display: block;
    margin-top: 15px;
  }
}

@media (max-width: 576px) {
  .home_screen {
    &_image {
      &_crown {
        top: -50px;
        left: -23px;
        width: 75px;
      }

      &_mobile {
        padding: 10px;

        &_title {
          font-size: 16px;
          margin-top: 10px;
        }

        &_infoblock {
          margin-top: 10px;
        }

        &_infoblock_item {
          width: 25%;
          height: 140px;
          padding: 0 10px;
          font-size: 11px;
        }
      }
    }
  }

  h1 {
    width: 350px;
  }
}

@media (max-width: 370px) {
  h1 {
    font-size: 25px;
    width: 300px;
  }
}
</style>
