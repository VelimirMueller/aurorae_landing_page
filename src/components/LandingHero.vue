<template>
  <div class="d-flex justify-center text-center dots">
    <div class="wrapper mt-6 mt-md-12">
      <h1 class="px-4" v-text="'EXPLORE BUSINESS OPPORTUNITIES WITH AI WEB DEVELOPEMNT'" />
      <div class="w-20">
        <h2 class="padding mt-4 mb-4 px-4">
          Unleash your business 
          <span class="text-blueish">potential</span> with AI <span class="text-blueish">power</span>. 
          Upgrade your <span class="text-blueish">productivity</span> with AI
          <span class="text-blueish">empowered</span> tooling.
        </h2>
      </div>
      <button 
        class="btn-outline relative" 
        v-text="'Try Out'" />
      <img 
        class="w-100 hero-img"
        src="../assets/heroimage.png" 
        alt="AI generated image of a girl with an analyzer screen">
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .wrapper {
    width: 50%;
    margin-bottom: 25px;
  }

  .btn-outline {
    margin-bottom: -25px;
    background-color: #fff;
  }

  h1 {
    color: rgb(var(--v-theme-primary));
    line-height: normal;
  }

  h2 {
    color: rgb(var(--v-theme-textDark));
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
    .hero-img, .wrapper {
      width: 80%;
    }

    .wrapper {
      padding: 5px;
    }
  }

  @media screen and (max-width:970px) {
    .hero-img, .wrapper {
      width: 100%;
    }

    h1 {
      text-align: left;
    }

    h2 {
      padding: 5px;
      text-align: left;
    }

    .hero-img {
      width: 100%;
    }
  }

  .text-blueish {
    color: rgb(var(--v-theme-secondary));
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