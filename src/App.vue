<template>
  <home-screen/>
  <become-member/>
  <levels-and-bonuses/>
  <advantages-block/>

  <!-- динамически загружаем компоненты через mutationObserver -->
  <div ref="lowerPart">
    <component v-if="showLowerPart" :is="faq" />
    <component v-if="showLowerPart" :is="footerBlock" />
  </div>
</template>


<script setup>
  import { ref, onMounted, defineAsyncComponent } from 'vue'

  import homeScreen from '@/components/homeScreen.vue'
  import becomeMember from '@/components/becomeMember.vue'
  import levelsAndBonuses from '@/components/levelsAndBonuses.vue'

  const advantagesBlock = defineAsyncComponent(() => import('@/components/advantagesBlock.vue'))
  const faq = defineAsyncComponent(() => import('@/components/Faq.vue')) // динамически загружаем компонент через mutationObserver
  const footerBlock = defineAsyncComponent(() => import('@/components/footerBlock.vue')) // динамически загружаем компонент через mutationObserver
  
  // динамически загружаем компоненты через mutationObserver
  const showLowerPart = ref(false)
  const lowerPart = ref(null) // обёртка-триггер

  onMounted(() => {
    const observer = new IntersectionObserver(([entry]) => {
        if(entry.isIntersecting) {
          showLowerPart.value = true
          observer.disconnect() // Отключаем наблюдение после загрузки
        }
      },
      { threshold: 0.1, rootMargin: '200px' }
    )

    if (lowerPart.value) observer.observe(lowerPart.value)
  })
</script>