// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-simple-sitemap'],
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-02-19',
  devServer: {
    host: '0.0.0.0',
    port: 3000,
  },
  postcss: {
    plugins: {
      'postcss-import': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    baseURL: '/',
    buildAssetsDir: 'assets/',
    cdnURL: '',
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=3' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png?v=3' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png?v=3' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png?v=3' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ],
      script: [
        { src: 'https://www.googletagmanager.com/gtag/js?id=G-93881479ZC', async: true },
        { type: 'text/javascript', innerHTML: "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-93881479ZC');" } as any
      ]
    }
  },
  ssr: false,
  nitro: {
    preset: 'github-pages',
    routeRules: {
      '/': { static: false, prerender: false },
      '/dubaifw/**': { static: true },
      '/offer/tr': { redirect: '/offer?tr' },
      '/sitemap.xml': { static: true },
      '/__sitemap__/**': { static: true }
    },
    prerender: {
      // Не генерируем Nuxt-HTML для этих роутов, чтобы использовались файлы из public/*/index.html
      ignore: [
        '/trial',
        '/features',
        '/offer',
        '/gallery',
        '/request',
        '/faq',
        '/team',
        '/approved',
        '/station',
        '/calendar',
        '/visit',
        '/EFW_AICONTEST',
        '/welcome',
        '/home',
        '/widget'
      ]
    },
    static: true,
    experimental: {
      wasm: false
    }
  },
  sitemap: {
    autoLastmod: true,
    exclude: ['/api/**'],
    urls: [
      '/',
      '/home',
      '/features',
      '/gallery',
      '/request',
      '/faq',
      '/team',
      '/approved',
      '/station',
      '/visit',
      '/calendar',
      '/offer',
      '/EFW_AICONTEST',
      '/welcome',
      '/widget'
    ]
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: undefined
        }
      }
    }
  },
  experimental: {
    payloadExtraction: false
  },
  site: {
    url: 'https://emiratesfashionweeks.com'
  },
  runtimeConfig: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    public: {
      apiBase: process.env.NODE_ENV === 'production' 
        ? 'https://api.emiratesfashionweeks.com/api'
        : 'http://localhost:3000/api'
    }
  }
});
