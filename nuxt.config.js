
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    { src: '~/assets/scss/style.scss', lang: 'scss' }
  ],

  styleResources: {
    scss: [
      '~/assets/scss/_variables.scss',
      '~/assets/scss/_mixins.scss'
    ]
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/coreui' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    
    '@nuxtjs/auth-next'
    
    
    
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    axios: {
      baseURL: 'http://127.0.0.1:8000/api/',
  },
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      transpile: [/^gmap-vue($|\/)/]
    }
  },
//   auth: {
//     strategies: {
//         local: {
//             endpoints: {
//                 login: {
//                     url: 'auth/login',
//                     method: 'post',
//                     propertyName: 'access'
//                 },
//                 user: {
//                     url: 'user',
//                     method: 'get',
//                     propertyName: 'user'
//                 },
//                 logout: false
//             }
//         },
//     }
//   },
//   router: {
//     middleware: ['auth']
// },
// build: {
//   transpile: ['@nuxtjs/auth']
// }
}
