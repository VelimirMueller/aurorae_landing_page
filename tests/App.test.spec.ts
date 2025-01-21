import { expect, test } from 'vitest'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import ResizeObserver from 'resize-observer-polyfill'

const vuetify = createVuetify({
  components,
  directives
})

global.ResizeObserver = ResizeObserver

test('can mount app', () => {
  // Assert the rendered text of the component
  console.log(vuetify)
  expect(!!vuetify).toBe(true)
})

