<template>
  <footer class="footer">
    <div class="footer__social">
      <a href="https://vk.com/rubaltbet" class="footer__social-link">
        <img src="/vk.svg" alt="Логотип соц сети Вконтакте" class="footer__social-icon" />
      </a>
      <a href="https://t.me/rubaltbet" class="footer__social-link">
        <img src="/telegram.svg" alt="Логотип мессенджера Телеграм" class="footer__social-icon" />
      </a>
    </div>

    <div class="footer__main">
      <a href="https://baltbet.ru/" class="footer__main-logo">
        <img src="/logo_bb.svg" alt="Логотип компании Балтбет" class="footer__main-logo-img" />
      </a>
      <p class="footer__main-descr">
        © БАЛТБЕТ букмекерская компания, 2003-2025<br />(ООО «Санторин»)
      </p>
      <a href="https://baltbet.ru/faq/help/Aktsii/akciya_vip_status" class="footer__link">
        Правила и условия
      </a>
    </div>

    <section class="footer__info" aria-label="Описание условий акции">
      <p>
        * статус действует до конца акции. Подробнее смотрите в
        <a href="https://baltbet.ru/faq/help/Aktsii/akciya_vip_status" class="footer__link"
          >правилах</a
        >.
      </p>
      <p>
        Информация об организаторе, правилах проведения акции, сроках, месте и порядке получения
        призов или выигрышей указана на сайте
        <a href="https://baltbet.ru/" class="footer__link">www.baltbet.ru</a>
      </p>
    </section>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;
  padding: 2rem 1rem;
  font-size: 1.8rem;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: inset 0px 0px 132.7px 0px rgba(0, 0, 0, 0.9);
}

.footer__social {
  grid-column: 1 / 2;
  grid-row: 1;
  place-self: center;
}

.footer__social-icon {
  width: 15%;
  margin: 5px;
}

.footer__main {
  grid-column: 2 / 3;
  grid-row: 1;
  place-self: center;
  text-align: center;
}

.footer__main-logo-img {
  width: 40%;
}

.footer__main-descr {
  margin: 1rem 0;
}

.footer__link {
  color: #fff;
}

.footer__info {
  grid-column: 1 / 4;
  grid-row: 2;
  place-self: center;
  text-align: center;
}

@media (max-width: 768px) {
  .footer {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: auto auto auto;
    padding-bottom: 80px;
  }

  .footer__social {
    grid-column: 2 / 6;
    grid-row: 1;
  }

  .footer__main {
    grid-column: 2 / 6;
    grid-row: 2;
  }

  .footer__info {
    grid-column: 1 / 7;
    grid-row: 3;
  }
}
</style>
