<template>
  <div class="d-flex height-100 pa-4">
    <template 
      v-for="(feature, idx) in features" 
      :key="`${feature}-${idx}`">
      <div class="w-100 d-flex justify-center align-center">
        <v-icon 
          class="icon"
          color="secondary-light"
          size="x-large">
          mdi-robot-happy-outline
        </v-icon>
        <p>{{ feature }}</p>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
  const features: string[] = ['CHAT', 'IMAGES', 'DATA']
</script>

<style scoped lang="scss">
  .icon {
    transform: scale(2);
    margin: 5px 0;
    position: absolute;
  }

  p {
    color: rgb(var(--v-theme-textLight));
    font-size: 2rem;
    font-weight: 400;
    height: 110px;
  }

  @media screen and (max-width: 1200px) {
    .icon {
    transform: scale(1);
  }

  p {
    font-size: 1rem;
    height: 64px;
  }

  }

</style>