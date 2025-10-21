<template>
  <p class="slide-title">{{ info.title }}</p>
  <p class="slide-subtitle">{{ info.subtitle }}</p>
  <p class="slide-descr">{{ info.descr }}</p>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  info: Object,
})
</script>

<style lang="scss" scoped>
@use '@/assets/variables' as vars;

.slide-title {
  font-size: 2.8rem;
  padding-top: 1.5rem;
}

.slide-subtitle {
  font-size: 1.6rem;
}

.slide-descr {
  text-align: justify;
  font-size: 2rem;
  padding: 1.5rem;
}

.slide-title,
.slide-subtitle,
.slide-descr {
  background: vars.$linear-gradient;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media (max-width: 768px) {
  .slide-subtitle {
    font-size: 2rem;
  }

  .slide-descr {
    font-size: 2.5rem;
  }
}
</style>
