import { shallowMount } from '@vue/test-utils'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { DefineComponent } from 'vue'
import { createPinia, setActivePinia } from 'pinia'

const vuetify = createVuetify({
  components,
  directives
})

const pinia = createPinia()
setActivePinia(pinia)

export const vuetifyShallowWrapper = (component: DefineComponent, plugins: any[] = [], ...attrs: any): ReturnType<typeof shallowMount> => {
  return shallowMount(component, {
    global: {
      plugins: [
        vuetify,
        setActivePinia(pinia),
        ...plugins
      ]
    },
    ...attrs
  })
}

