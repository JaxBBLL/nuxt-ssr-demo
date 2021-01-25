console.log('MY_ENV', process.env.MY_ENV)
export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#9c27b0' },
  /*
   ** Global CSS
   */
  css: ['~assets/style/common.less'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/axios',
    {
      src: '~/plugins/element-ui',
      ssr: true,
    },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:9527',
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true,
    credentials: true,
    // retry: { retries: 3 },
    // 开发模式下开启debug
    // debug: process.env._ENV !== 'production',
    // 设置不同环境的请求地址
    // baseURL:
    //   process.env._ENV === 'production'
    //     ? 'http://admin.test.kucdn.cn'
    //     : 'http://localhost:9527'
  },
  proxy: {
    '/api': {
      target: 'http://admin.test.kucdn.cn',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api',
      },
    },
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extractCSS: process.env.NODE_ENV === 'production',
    vendor: ['element-ui'],
    extend(config, ctx) {},
  },
  server: {
    port: 9527, // default: 3000
    host: '0.0.0.0', // default: localhost,
  },
}
