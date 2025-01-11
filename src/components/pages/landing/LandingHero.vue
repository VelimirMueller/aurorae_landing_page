<template>
  <div class="d-flex justify-center text-center dots">
    <div class="w-100 w-md-75 w.lg-66 mt-6 mt-md-12">
      <h1 class="px-2 px-sm-4 text-h3 text-left text-md-center text-sm-h3 text-md-h2 text-lg-h1 text-primary">
        EXPLORE <span class="headline-highlight">AURORAE</span> IN YOUR AI WEB <span class="headline-highlight">APPLICATION</span>
      </h1>
      <div>
        <h2 class="padding mt-4 mb-4 px-2 px-md-12 text-left text-md-center text-colorDark">
          Unleash your business 
          <span class="text-secondary">potential</span> with AI <span class="text-secondary">power</span>. 
          Upgrade your <span class="text-secondary">productivity</span> with AI
          <span class="text-secondary">empowered</span> tooling.
        </h2>
      </div>
      <button 
        class="btn-outline relative mb-n15 bg-white text-primary">
        <span class="headline-highlight-cta">Try</span>Out
        <v-icon
          color="secondary"
          size="x-small"
          class="mb-2 icon">
          mdi-gesture-double-tap
        </v-icon>
      </button>
      <div clss="w-100">
        <img 
          class="w-100 hero-img w-lg-75"
          src="../../../assets/heroimage.webp" 
          alt="AI generated image of a girl with an analyzer screen">
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

    &-cta::after {
      content: '';
      width: 70%;
      height: 80%;
      position: absolute;
      left: 15%;
      top: 10%;
      border-radius: 8px;
    }
  }

  h2 {
    padding: 0 110px;
    line-height: normal;
    text-align: center;
  }

  .hero-img {
    border: solid 4px rgb(var(--v-theme-secondary));
    border-radius: 8px;
    padding: 0;
  }

  @media screen and (min-width:971px) and (max-width: 1200px) {
    .hero-img {
      width: 80%;
    }
  }

  @media screen and (max-width:970px) {
    .hero-img {
      width: 100%;
    }

    h2 {
      padding: 5px;
      text-align: left;
    }

    .hero-img {
      width: 100%;
    }
  }

  .relative {
    position: relative;
  }

  @media screen and (max-width: 600px) {
    .relative {
      margin: 20px 0;
    }

    .btn-outline, .hero-img {
      width: 98%;
    }

    .hero-img {
      margin-top: -45px;
      border: none;
      border-radius: 0px;
    }
  }
</style>