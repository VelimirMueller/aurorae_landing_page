<template>
  <div class="d-flex justify-center text-center dots">
    <div class="wrapper mt-12">
      <h1 v-text="'EXPLORE BUSINESS OPPORTUNITIES WITH AI WEB DEVELOPEMNT'" />
      <div class="w-20">
        <h2 class="padding mt-4">
          Unleash your business 
          <span class="text-blueish">potential</span> with AI <span class="text-blueish">power</span>. 
          Upgrade your <span class="text-blueish">productivity</span> with AI<br>
          <span class="text-blueish">empowered</span> tooling.
        </h2>
      </div>
      <button 
        class="tryout relative" 
        v-text="'Try Out'" />
      <img 
        class="w-100 hero-img" 
        src="../assets/HeroImage.png" 
        alt="AI generated image of a girl with an analyzer screen">
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .wrapper {
    width: 50%
  }

  h1 {
    color: #1A012C;
    font-size: 4.75rem;
    line-height: normal;
  }

  h2 {
    color: #3C3C3C;
    font-size: 2.75rem;
    padding: 0 110px;
    line-height: normal;
    text-align: center;
  }

  @media screen and (max-width:970px) {
    .hero-img, .wrapper {
      width: 100%;
      padding: 5px;
    }

    h1 {
      font-size: 2.75rem;
      text-align: left;
    }

    h2 {
      font-size: 1.5rem;
      padding: 0 0;
      text-align: left;
    }

    .hero-img {
      width: 90%;
    }
  }

  .text-blueish {
    color: #045d6d;
  }

  .relative {
    position: relative;
  }

  .tryout {
    text-shadow: -1px -1px 0 #0cd0f3, 1px -1px 0 #0cd0f3, -1px 1px 0 #0cd0f3, 1px 1px 0 #0cd0f3;
    border: solid 4px #087A8E;
    border-color: #087A8E !important;
    border-radius: 15px;
    color: #087A8E;
    background-color: #aaa9a976!important;
    border-radius: 15px;
    font-size: 2.5rem;
    font-weight: bold;
    padding: 7px;
    margin-bottom: -60px;
    margin-top: 20px;
    transition: all 0.35s ease-in-out;

    &:hover {
        text-shadow: -1px -1px 0 #ff39d4, 1px -1px 0 #ff39d4, -1px 1px 0 #ff39d4, 1px 1px 0 #ff39d4;
        border-color: #60054c !important;
        color: #60054c;
      }

      &:active {
        outline: solid 4px #ff39d4aa
      }
  }

  .dots {
    background-image: radial-gradient(#19191a4f 2px, transparent 0px);
    background-repeat: repeat; /* or omit this declaration */
    background-size: 130px 150px;
    background-position: center;
  }
</style>