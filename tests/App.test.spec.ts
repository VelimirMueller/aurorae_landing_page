import { describe, expect, test } from 'vitest'
import { DefineComponent } from 'vue'
import ResizeObserver from 'resize-observer-polyfill'
import { vuetifyShallowWrapper } from './helpers/shallowVuetiyWrapper'
import LandingPage from '../src/pages/index.vue'
import AboutPage from '../src/pages/about/index.vue'
import AdminPage from '../src/pages/admin/index.vue'
import ProductsPage from '../src/pages/products/index.vue'
import Signin from '../src/pages/signin/index.vue'
import WikiPage from '../src/pages/wiki/index.vue'

type Page = { name: string, component: DefineComponent }
const pages: Page[] = [
  { name: 'LandingPage', component: LandingPage as unknown as DefineComponent },
  { name: 'AboutPage', component: AboutPage as unknown as DefineComponent },
  { name: 'AdminPage', component: AdminPage as unknown as DefineComponent },
  { name: 'ProductsPage', component: ProductsPage as unknown as DefineComponent },
  { name: 'Signin', component: Signin as unknown as DefineComponent },
  { name: 'WikiPage', component: WikiPage as unknown as DefineComponent }
]

global.ResizeObserver = ResizeObserver

describe('Basic app functionality testing', () => {
  let wrapper: ReturnType<typeof vuetifyShallowWrapper>

  pages.forEach((page) => {
    test(`Can mount ${page.name}`, () => {
      wrapper = vuetifyShallowWrapper(page.component)
      expect(wrapper.exists()).toBe(true)
      wrapper.unmount()
    })
  })
})
