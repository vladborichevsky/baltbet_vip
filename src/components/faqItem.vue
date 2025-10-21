<template>
  <article class="faq-item">
    <h3 class="faq__question">{{ content?.question }}</h3>
    <p class="faq__answer">{{ content?.answer }}</p>
  </article>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  content: Object,
})
</script>

<style lang="scss" scoped>
.faq-item {
  text-align: center;
  border-radius: 2rem;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(48.2px);
  box-shadow: inset 0px 0px 132.7px 0px rgba(0, 0, 0, 0.8);
  margin: 1rem;
}

.faq__question {
  font-weight: 700;
  font-size: 2rem;
}

.faq__answer {
  margin-top: 1rem;
  font-weight: 300;
  font-size: 2rem;
}
</style>
