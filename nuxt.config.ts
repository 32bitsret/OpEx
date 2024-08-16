export default defineNuxtConfig({
    ssr: true,
    devtools: {enabled: true},
    colorMode: {
        preference: 'light',
        fallback: 'light',
        hid: 'nuxt-color-mode-script',
        globalName: '__NUXT_COLOR_MODE__',
        componentName: 'ColorScheme',
        classPrefix: '',
        classSuffix: '-mode',
        storageKey: 'edm-color-mode'
    },
    modules: [
        "@nuxt/ui",
        "@nuxt/image",
        '@nuxtjs/google-fonts',
        "@aleios10/nuxt-scroll-spy-composable",
        '@pinia-plugin-persistedstate/nuxt',
        '@nuxtjs/i18n',
        '@pinia/nuxt',
    ],
    googleFonts: {
        families: {
            Poppins: [300, 400, 600, 700, 900]
        }
    },
    i18n: {
        vueI18n: './i18n.config.ts'
    },
    nitro: {
        prerender: {
            crawlLinks: true,
            routes: ['/'],
            ignore: ['/ignore-this-route']
        },
        static: true
    },
    app: {
        baseURL: '/' // Ensure this matches your deployment URL structure
    },
    experimental: {
        payloadExtraction: false
    }
})