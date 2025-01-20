declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module 'vuetify/styles' {
  export const variables: {
    '--v-theme-white': string
    '--v-theme-accent': string
    '--v-theme-primary': string
    '--v-theme-secondary': string
    '--v-theme-error': string
    '--v-theme-info': string
    '--v-theme-success': string
    '--v-theme-warning': string
    '--v-theme-textDark': string
    '--v-theme-textLight': string
    '--v-theme-grey': string
    '--v-theme-opacityWhite': string
  }
}
