<template>
  <section class="hero">
    <LandingHero />
  </section>

  <section class="logo-line">
    <LogoLine />
  </section>

  <section class="cards pa-md-12">
    <LandingCards />
  </section>
</template>

<style scoped>
.hero, .cards {
  background-color: #fff;
}

.logo-line {
  background-color: rgb(var(--v-theme-primary));
}
</style>
