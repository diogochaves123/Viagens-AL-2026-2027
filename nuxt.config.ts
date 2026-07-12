// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  modules: ['@nuxtjs/tailwindcss'],

  nitro: {
    preset: 'static',
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Pasta de Viagens | LEO Clube Soledade AL 2026/2027',
      htmlAttrs: { lang: 'pt-BR' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Pasta de Viagens do LEO Clube Soledade — AL 2026/2027. Equilíbrio para liderar, União para transformar. Conheça nosso planejamento, objetivos e como fazer parte dessa caminhada.',
        },
        { name: 'theme-color', content: '#258CE6' },
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/images/logo-al-2026.png' }],
    },
  },
})
