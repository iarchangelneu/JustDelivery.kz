// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [],
    pages: true,
    app: {
        head: {
          charset: 'utf-8',
          viewport: 'width=device-width, initial-scale=1',
          link:[
            {
              rel: 'stylesheet',
              href: 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css',
              integrity : 'sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N',
              crossorigin: 'anonymous'
            },
            
           
          ],
          script:[
            {
              src: 'https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js'
            },
            {
              src: 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js'
            },
            // {
            //   src: 'https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=e1123dd2-7120-43ba-a123-575d432f9366'
            // },
          
                     
          ]
        }
      }
})
