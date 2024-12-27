<template>
  <v-app>
    <v-main>
      <nav 
        role="navigation" 
        aria-label="Main navigation">
        <AppNavBar />
      </nav>
      <div class="app__wrapper--content">
        <div class="relative">
          <router-view />
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
    position: absolute;
  }
</style>
