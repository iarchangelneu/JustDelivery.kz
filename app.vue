<template>
  <TheHeader></TheHeader>

  <div>
    <NuxtPage />
  </div>

  <TheFooter></TheFooter>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jura:wght@300;400;500;600;700&display=swap');

@font-face {
  font-family: 'Tablon';
  font-style: normal;
  src: local('Tablon'), url('@/assets/fonts/Tablon-Medium.ttf')
}

@font-face {
  font-family: 'Tablon';
  font-style: normal;
  src: local('Tablon'), url('@/assets/fonts/Tablon-Medium.ttf')
}

.ymaps-2-1-79-map,
.ymaps-2-1-79-map ymaps,
.ymaps-2-1-79-map ymaps:before,
.ymaps-2-1-79-map ymaps:after {
  width: 740px !important;
  height: 678px !important;
}

:root {
  --jur: 'Jura', sans-serif;
  --tab: 'Tablon';
}

body {
  margin: 0;
}
</style>
