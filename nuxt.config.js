require('dotenv').config();

export default {
  ssr: true,
  target: 'server',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - MrTheBank Discord Bot',
    title: '',
    htmlAttrs: {
      lang: 'th'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'MrTheBank Discord Bot'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: process.env.URL
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: process.env.URL+'/uploads/official/mrthebank.png'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'MrTheBank Discord Bot - A multi-purpose bot for your discord server.'
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.15.3/css/all.css' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/styles.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/mdbootstrap.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/dotenv',
    //'@nuxtjs/ngrok'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/axios'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    //extractCSS: true
  },

  router: {
    linkActiveClass: '',
    linkExactActiveClass: 'active'
  },

  // i18n
  i18n: {
    locales: [
      {
        name: 'ไทย',
        flag: 'th',
        code: 'th',
        iso: 'th-TH',
        file: 'th-TH.js'
      },
      {
        name: 'ENG',
        flag: 'us',
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js'
      }
    ],
    langDir: 'lang/',
    defaultLocale: 'th',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'mrthebank_nuxtjs_i18n',
      onlyOnRoot: true,
      alwaysRedirect: true,
    }
  },

  colorMode: {
    preference: 'system',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  },

  // ngrok: {
  //   region: 'ap', // one of ngrok regions (us, eu, au, ap, sa, jp, in), defaults to us
  // }

  // server: {
  //   host: '192.168.1.104',
  //   port: '3000'
  // }
}
