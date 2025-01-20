<template>
  <BackgroundLogo />
  <div class="d-flex justify-center text-center dots">
    <div class="w-100 w-md-75 w.lg-66 mt-6 mt-md-12">
      <h1 class="mx-2 mx-md-0 px-2 px-sm-4 text-h3 text-left text-md-center text-sm-h3 text-md-h2 text-lg-h1 text-primary">
        EXPLORE <span class="headline-highlight">AURORAE</span> IN YOUR AI WEB <span class="headline-highlight">APPLICATION</span>
      </h1>
      <div>
        <h2 class="mx-2 mx-md-0 padding mt-4 mb-4 px-2 px-md-12 text-left text-md-center text-colorDark">
          Unleash your business 
          <span class="text-secondary">potential</span> with AI <span class="text-secondary">power</span>. 
          Upgrade your <span class="text-secondary">productivity</span> with AI
          <span class="text-secondary">empowered</span> tooling.
        </h2>
      </div>
      <v-row class="d-flex justify-center px-1">
        <v-col
          cols="12"
          md="6">
          <v-btn
            class="mb-n8 btn-outline-highlight text-primary text-h4 h-auto rounded-lg px-12 w-100 bg-white border-t-lg border-secondary"
            href="/signin">
            Explore now!
            <v-icon
              color="info"
              size="x-large"
              class="mb-2 icon">
              mdi-gesture-double-tap
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <div class="w-100">
        <img 
          class="w-100 hero-img w-lg-75"
          src="../../../assets/heroimage.webp" 
          alt="AI generated girl with an analyzer screen">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .headline-highlight {
    border: solid 4px rgb(var(--v-theme-secondary));
    border-radius: 25px;
    padding: 0 5px;

    &:first-child {
      animation: anim 7s infinite alternate;
    }

    &:last-child {
      animation: anim 5s infinite;
      animation-delay: 0.5s;
    }
  }
</style>
