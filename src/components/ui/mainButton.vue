<template>
  <a href="https://baltbet.ru/account/register">
    <button>Участвовать</button>
  </a>
</template>

<style lang="scss" scoped>
button {
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  font-size: 35px;
  font-weight: 700;
  padding: 10px 25px;
  border-radius: 25px;
  background: linear-gradient(
    91.48deg,
    #fbbc21 0.42%,
    #d09806 19.95%,
    #ffe585 59.36%,
    #ffb500 97.68%
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
  border: 3px #d09806 solid;
}

button:hover {
  background: linear-gradient(
    91.48deg,
    #fbbc21 0.42%,
    #d09806 19.95%,
    #ffe585 59.36%,
    #ffb500 97.68%
  );
  background-clip: inherit;
  -webkit-text-fill-color: inherit;
  color: #09103c;
}

@media (max-width: 1300px) {
  button {
    font-size: 30px;
  }
}

@media (max-width: 1200px) {
  button {
    font-size: 25px;
  }
}

@media (max-width: 992px) {
  button {
    font-size: 20px;
    padding: 7px 15px;
  }

  button:hover {
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: none;
  }
}
</style>
