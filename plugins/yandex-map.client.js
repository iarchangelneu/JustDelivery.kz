import plugin from 'vue-yandex-maps'
import { defineNuxtPlugin } from 'nuxt/app'

const settings = {
apiKey: 'e1123dd2-7120-43ba-a123-575d432f9366', // Индивидуальный ключ API
lang: 'ru_RU', // Используемый язык
coordorder: 'latlong', // Порядок задания географических координат
debug: false, // Режим отладки
version: '2.1',
controls: ['routePanelControl'], // Версия Я.Карт
}

export default defineNuxtPlugin((nuxtApp) => {
nuxtApp.vueApp.use(plugin, settings)
})