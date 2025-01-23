import { shallowMount } from '@vue/test-utils'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { DefineComponent } from 'vue'
import { createPinia, Pinia, setActivePinia } from 'pinia'

const vuetify = createVuetify({
  components,
  directives
})

const pinia: Pinia = createPinia()
setActivePinia(pinia)

export const vuetifyShallowWrapper = (component: DefineComponent, ...attrs: any): ReturnType<typeof shallowMount> => {
  return shallowMount(component, {
    global: {
      plugins: [
        vuetify
      ]
    },
    ...attrs
  })
}

