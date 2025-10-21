<template>
  <a href="https://baltbet.ru/account/register">
    <button>
      <slot></slot>
    </button>
  </a>
</template>

<style lang="scss" scoped>
@use '@/assets/variables' as vars;

button {
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  font-size: 2rem;
  font-weight: 700;
  padding: 1rem 2.5rem;
  border-radius: 2.5rem;
  background: vars.$linear-gradient;
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  text-transform: uppercase;
}
</style>
