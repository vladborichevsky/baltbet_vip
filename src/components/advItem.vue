<template>
  <div class="adv__slide">
    <img :src="content?.image" alt="" loading="lazy" class="adv__image" />
    <section class="adv__info">
      <h2 class="adv__title">{{ content?.title }}</h2>
      <div class="adv__descr">
        <p class="adv__subtitle">{{ content?.subtitle }}</p>
        <p class="adv__text">{{ content?.text }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  content: Object,
})
</script>

<style lang="scss" scoped>
@use '@/assets/variables' as vars;

.adv__slide {
  cursor: grab;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.adv__image {
  width: 35%;
}

.adv__info {
  padding-right: 5%;
}

.adv__title {
  text-align: right;
  text-shadow: vars.$title-text-shadow;
}

.adv__subtitle {
  font-size: 2.5rem;
}

.adv__descr {
  display: flex;
  flex-direction: column;
  align-items: end;
  text-align: right;
  margin: 2rem 0;
}

.adv__text {
  width: 70%;
  font-size: 2rem;
  text-shadow: 1rem 1rem 2rem #030513;
}

@media (max-width: 576px) {
  .adv__text {
    width: 100%;
  }
}
</style>
