// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:[ '@unocss/nuxt',],
  target: 'static',
  base: "https://bre01.github.io/HackerNewsNuxt/",
  app: {
    baseURL: "/HackerNewsNuxt/",
  },

  


  
})
