export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,
  server: {
    port: process.env.PORT || 3000,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'MiniNetflix',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'description', content: 'Welcome to mini Netflix' },
      { name: 'title', content: 'MiniNetflix' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', type: 'image/x-icon', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', type: 'image/x-icon', href: 'https://fonts.gstatic.com' },
      { rel: 'preconnect', type: 'image/jpeg', href: 'https://m.media-amazon.com' },
      // { rel: 'icon', type: 'image/x-icon', href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet' },
    ]
  },

  serverMiddleware: [
    {
      path: '/api',
      handler: '~/routes/index.js'
    }
  ],

  router: {
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
  },
  
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    optimization: {
      minimize: true, // Ensure minification
    },
    // Enable CSS minification
    extractCSS: true, // Extract and minify CSS
  },
}
