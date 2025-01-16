/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true, // Set to true for a dark theme
        colors: {
          primary: '#1A012C',
          secondary: '#087A8E',
          'secondary-light': '10bebe',
          accent: '#FF39D4',
          error: '#ED4E4E',
          info: '#2ED6E2',
          success: '#22CA68',
          warning: '#FFCA58',
          textDark: '#3c3c3c',
          textLight: '#D9D9D9',
          white: '#fff',
          grey: '#9a9a9a'
        },
      },
    }
  }
})
