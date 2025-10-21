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
  background-clip: text;
  -webkit-text-fill-color: transparent;
  border: 3px #d09806 solid;
  text-transform: uppercase;
}

button:hover {
  background: vars.$linear-gradient;
  background-clip: inherit;
  -webkit-text-fill-color: inherit;
  color: #09103c;
}

@media (max-width: 992px) {
  button:hover {
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: none;
  }
}
</style>
