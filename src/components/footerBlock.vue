<template>
  <footer class="footer">
    <div class="footer_logos">
      <a href="https://vk.com/rubaltbet" class="footer_logos_item">
        <img src="/vk.svg" alt="Логотип соц сети Вконтакте" />
      </a>
      <a href="https://t.me/rubaltbet" class="footer_logos_item">
        <img src="/telegram.svg" alt="Логотип мессенджера Телеграм" />
      </a>
    </div>

    <div class="footer_main">
      <a href="https://baltbet.ru/" class="footer_main_baltbet_logo">
        <img src="/logo_bb.svg" alt="Логотип компании Балтбет" />
      </a>
      <div class="footer_main_descr">
        © БАЛТБЕТ букмекерская компания, 2003-2025 (ООО «Санторин»)
      </div>
      <a href="https://baltbet.ru/faq/help/Aktsii/akciya_vip_status" class="footer_main_rules"
        >Правила и условия</a
      >
    </div>

    <div class="footer_descr">
      * статус действует до конца акции. Подробнее смотрите в
      <a href="https://baltbet.ru/faq/help/Aktsii/akciya_vip_status" class="footer_main_rules"
        >правилах</a
      >.<br />
      * подробнее о получении кешбека смотрите в
      <a href="https://baltbet.ru/faq/help/Aktsii/akciya_vip_status" class="footer_main_rules"
        >правилах</a
      >.<br /><br />

      Информация об организаторе, правилах проведения акции, сроках, месте и порядке получения
      призов или выигрышей указана на сайте <a href="https://baltbet.ru/">www.baltbet.ru</a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 2fr 1fr;
  padding: 10px;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: inset 0px 0px 132.7px 0px rgba(0, 0, 0, 0.9);

  &_logos {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    justify-self: center;
    align-self: center;

    img {
      width: 50px;
      margin: 5px;
    }
  }

  &_main {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    justify-self: center;
    align-self: center;

    img {
      width: 250px;
      margin-top: 15px;
    }

    &_descr {
      margin: 10px 0;
    }

    &_rules {
      color: #ffff;
    }
  }

  &_descr {
    grid-column: 1 / 4;
    grid-row: 2 / 3;
    justify-self: center;
    align-self: center;

    a {
      color: #ffff;
    }
  }
}

@media (max-width: 767px) {
  .footer {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 0.5fr 1.5fr 1.5fr 1fr;
    font-size: 12px;

    &_logos {
      grid-column: 2 / 6;
      grid-row: 1 / 2;

      img {
        width: 30px;
        margin: 5px;
      }
    }

    &_main {
      grid-column: 2 / 6;
      grid-row: 2 / 3;

      img {
        width: 140px;
        margin-top: 0;
      }
    }

    &_descr {
      grid-column: 1 / 7;
      grid-row: 3 / 4;
    }
  }
}
</style>
