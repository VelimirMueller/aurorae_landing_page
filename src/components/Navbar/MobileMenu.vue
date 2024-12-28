<template>
  <!-- mobile menu -->
  <div class="text-center d-lg-none">
    <v-menu>
      <template #activator="{ props }">
        <v-btn color="secondary">
          <v-icon
            color="white"
            size="42"
            v-bind="props">
            mdi-dialpad
          </v-icon>
        </v-btn>
      </template>

      
      <div class="d-flex d-lg-none flex-column ga-12 px-16 bg-darkest">
        <h2>Navigation</h2>
        <v-btn class="link" size="x-large">Link 1</v-btn>
        <v-btn class="link" size="x-large">Link 2</v-btn>
        <v-btn class="link" size="x-large">Link 3</v-btn>
        <v-btn class="link" size="x-large">Link 4</v-btn>
      </div>
    </v-menu>
  </div>
</template>

<style lang="scss" scoped>
.bg-darkest {
  background-color: #1A012C;
  height: 100vh;
  transform: translate(10px, -15px);
}

h2 {
  font-size: 4rem;
}

.v-overlay__content {
  position: relative;
  display: block;
  width: 70vw;
  height: 100vh;
}

.link {
    color: #858585;
    border-radius: 15px;
    transition: all 0.35s ease-in-out;
    font-size: 1.25rem;
    border: solid 3px #087A8E;

    &:hover {
      color: #ff39d4;
      text-decoration: underline;
      border: solid 3px #ff39d4;
    }
  }
</style>