import { expect, test } from 'vitest'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import ResizeObserver from 'resize-observer-polyfill'

import LandingPage from '../src/pages/index.vue'
import { shallowMount } from '@vue/test-utils'

const vuetify = createVuetify({
  components,
  directives
})

global.ResizeObserver = ResizeObserver

describe('Basic app functionality testing', () => {
  test('Can mount landing page', () => {
    const wrapper = shallowMount(LandingPage, {
      props: {},
      global: {
        plugins: [vuetify]
      }
    })

    expect(wrapper.html()).toBeDefined()
  })
})
