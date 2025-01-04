<template>
  <v-app>
    <v-main>
      <nav 
        role="navigation" 
        aria-label="Main navigation">
        <AppNavBar />
      </nav>
      <div class="app__wrapper--content">
        <div>
          <router-view />
          <AppFooter />
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<style lang="scss" scoped>
  .app__wrapper--content {
    width: 100%;
    height: 100%;
    padding: 0 10px;
    background-color: none;
  }
</style>
