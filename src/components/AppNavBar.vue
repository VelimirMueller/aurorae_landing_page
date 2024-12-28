<template>
  <v-app-bar
    app  
    color="#1A012C"
    collapse-on-scroll>
    <!-- Logo und Titel -->
    <v-row 
      align="center" 
      class="ml-4 pt-2 d-none d-sm-flex">
      <a href="/">
        <img 
          src="../assets/Logo.svg" 
          alt="Anwendugslogo">
      </a>
    </v-row>

    <!-- Navigationselemente -->
    <v-spacer />
    <v-container
      class="d-flex justify-center" 
      fluid>
      <div class="d-none d-lg-flex justify-center ml-12">
        <a href="">
          <v-btn
            text="Nav1" 
            class="mr-8 ml-16 link" />
        </a>
        <a href="">
          <v-btn
            text="Nav2" 
            class="mx-8 link" />
        </a>
        <a href="">
          <v-btn 
            text="Nav3" 
            class="mx-8 link" />
        </a>
        <a href="">
          <v-btn 
            text="Nav4" 
            class="mx-8 link" />
        </a>
      </div>
    </v-container>
    <v-spacer />

    <!-- Rechtsausgerichtete Elemente -->
    <v-btn
      text="New Account" 
      class="mx-3 link" />
    <v-btn 
      class="border-custom mr-4 link"
      text="sign in" />

    <MobileMenu />
  </v-app-bar>
</template>

<style lang="scss" scoped>
  .mobile-menu-wrapper {
    background-color: #1A012C;
  }

  .link {
    color: #858585;
    transition: all 0.35s ease-in-out;
    font-size: 1.25rem;

    &:hover {
      color: #ff39d4;
      text-decoration: underline;
    }
  }

  .w-vw {
    width: 100vw;
    position: absolute;
  }

  .border-custom {
      text-shadow: -1px -1px 0 #0cd0f3, 1px -1px 0 #0cd0f3, -1px 1px 0 #0cd0f3, 1px 1px 0 #0cd0f3;
      color: #fff;
      border: solid 4px #087A8E;
      border-color: #087A8E !important;
      border-radius: 15px;
      width: 145px;
      padding: 5px;

      &:hover {
        text-shadow: -1px -1px 0 #60054c, 1px -1px 0 #60054c, -1px 1px 0 #60054c, 1px 1px 0 #60054c;
        border-color: #60054c !important;
        color: #ff39d4;
      }

      &:active {
        outline: solid 4px #ff39d4aa
      }
    }
</style>