export default defineNuxtConfig({
    devtools: {enabled: true},
    colorMode: {
        preference: 'light', // default value of $colorMode.preference
        fallback: 'light', // fallback value if not system preference found
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
      '@pinia/nuxt',
      '@pinia-plugin-persistedstate/nuxt'
    ],
    googleFonts: {
        families: {
            Poppins: [300, 400, 600, 700, 900]
        }
    }
})