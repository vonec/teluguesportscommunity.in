export default {
  target: "static",
  dev: process.env.NODE_ENV !== "production",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Telugu eSports Community",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX",
        async: true,
      },
      {
        src: "js/ga.js",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/icofont.min.css", "~/assets/css/swiper.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '~/plugins/vue-awesome-swiper.js',
    {
      src: "~/plugins/vue-awesome-swiper.js",
      ssr: false,
    },
    "~/plugins/directive.client.js",
    {
      src: "~/plugins/vue-backtotop.js",
      ssr: false,
    },
    {
      src: "~/plugins/vue-js-modal",
      mode: "client",
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    [
      "@nuxtjs/moment",
      {
        /* module options */
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],
  axios: {
    // Optional: Set the base URL for your API
    baseURL: "https://teluguesportscommunity.in",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: "/assets/", // Replace '_nuxt' with 'custom_path'
  },
};
