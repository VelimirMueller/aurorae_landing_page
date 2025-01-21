import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    server: {
      deps: {
        inline: ['vuetify']
      }
    },
    coverage: {
      reportsDirectory: './tests/coverage'
    }
  }
})
