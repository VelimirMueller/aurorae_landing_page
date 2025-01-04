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

.text-dark {
  color: rgb(var(--v-theme-textDark));
  width: 100%;
}

.text-highlight {
  color: rgb(var(--v-theme-secondary));
}

.logo-line {
  background-color: rgb(var(--v-theme-primary));
}
</style>
