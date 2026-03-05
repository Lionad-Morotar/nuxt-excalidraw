import {
  addComponent,
  createResolver,
  defineNuxtModule,
} from '@nuxt/kit'
import react from '@vitejs/plugin-react'

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-excalidraw',
    configKey: 'excalidraw',
    compatibility: {
      nuxt: '^3.16.0 || ^4.0.0',
    },
  },

  defaults: {},

  setup(_options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // Add Vite React plugin
    nuxt.hooks.hook('vite:extendConfig', (config) => {
      config.plugins = config.plugins || []
      config.plugins.push(react())
    })

    // Register component
    addComponent({
      name: 'ExcalidrawBoard',
      filePath: resolver.resolve('./runtime/components/ExcalidrawBoard.vue'),
    })
  },
})
