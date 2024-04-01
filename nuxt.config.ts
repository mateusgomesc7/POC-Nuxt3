// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [
    '~/plugins/formatDate.ts'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-primevue',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
  ],
  css: [
    'primeicons/primeicons.css',
    '@/assets/css/base.css'
  ],
  i18n: {
    vueI18n: '~/i18n/i18n.config.ts'
  },
  primevue: {
    options: {
      unstyled: true
    },
    importPT: { as: 'Presets', from: '~/presets/' },
    components: {
        exclude: ["Editor", "Chart"]
    }
  },
  tailwindcss: {
    config: {
      content: [
        "presets/**/*.{js,vue,ts}"
      ],
      theme: {
          extend: {
              colors: {
                  'primary-50': 'rgb(var(--primary-50))',
                  'primary-100': 'rgb(var(--primary-100))',
                  'primary-200': 'rgb(var(--primary-200))',
                  'primary-300': 'rgb(var(--primary-300))',
                  'primary-400': 'rgb(var(--primary-400))',
                  'primary-500': 'rgb(var(--primary-500))',
                  'primary-600': 'rgb(var(--primary-600))',
                  'primary-700': 'rgb(var(--primary-700))',
                  'primary-800': 'rgb(var(--primary-800))',
                  'primary-900': 'rgb(var(--primary-900))',
                  'primary-950': 'rgb(var(--primary-950))',
                  'surface-0': 'rgb(var(--surface-0))',
                  'surface-50': 'rgb(var(--surface-50))',
                  'surface-100': 'rgb(var(--surface-100))',
                  'surface-200': 'rgb(var(--surface-200))',
                  'surface-300': 'rgb(var(--surface-300))',
                  'surface-400': 'rgb(var(--surface-400))',
                  'surface-500': 'rgb(var(--surface-500))',
                  'surface-600': 'rgb(var(--surface-600))',
                  'surface-700': 'rgb(var(--surface-700))',
                  'surface-800': 'rgb(var(--surface-800))',
                  'surface-900': 'rgb(var(--surface-900))',
                  'surface-950': 'rgb(var(--surface-950))'
              }
          }
      }
    }
  }
})
