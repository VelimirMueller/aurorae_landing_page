/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import useAuthenticationStore from '@/stores'
import { routes } from 'vue-router/auto-routes'
import { type Store, storeToRefs } from 'pinia'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(routes),
})

const protectedRoutes = ['/admin', '/public']

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})


router.beforeEach((to, from, next) => {
  // @ts-expect-error - pinia type error
  const authStore = useAuthenticationStore() as Store<"authentication", { isAuthenticated: boolean }>
  const { isAuthenticated } = storeToRefs(authStore)
  isAuthenticated.value = sessionStorage.getItem('isAuthenticated') === 'true'

  if (protectedRoutes.some(route => to.path.startsWith(route))) {
    if (!isAuthenticated) {
      next({ path: '/signin' })
    } else {
      debugger
      next()
    }
  } else {
    next()
  }
})

export default router
