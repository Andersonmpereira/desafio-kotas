// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      title: 'Desafio Kotas - Pokemons'
    }
  },
  css: ['~/assets/sass/style.scss'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ]
})
