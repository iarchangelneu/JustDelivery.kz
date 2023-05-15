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



:root {
  --jur: 'Jura', sans-serif;
  --tab: 'Tablon';
}

body {
  margin: 0;
  overflow-x: hidden;
}
</style>
