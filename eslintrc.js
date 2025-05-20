module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended', // включает prettier как плагин и конфиг
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    // Примеры дополнительных правил:
    'vue/multi-word-component-names': 'off', // отключить требование для имен компонентов
  },
}
