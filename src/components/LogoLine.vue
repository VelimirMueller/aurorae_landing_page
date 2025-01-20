<template>
  <div class="d-flex h-100 pa-4 pa-md-8 pt-md-12">
    <template 
      v-for="feature in features" 
      :key="feature.id">
      <div class="w-100 d-flex justify-center align-center">
        <v-icon 
          class="icon"
          color="textDark"
          size="x-large">
          {{ feature.icon }}
        </v-icon>
        <p>{{ feature.text }}</p>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
const features: {id: number, text: string, icon: string}[] = [
  { id: 0, text: 'CHAT', icon: 'mdi-chat-processing-outline' }, 
  { id: 1, text: 'IMAGES', icon: 'mdi-image-multiple-outline' },
  { id: 2, text: 'DATA', icon: 'mdi-arrow-top-right-bold-box-outline' }
]
</script>

<style scoped lang="scss">
  .icon {
    transform: scale(2);
    margin: 5px 0;
    position: absolute;
    opacity: 90%;
  }

  p {
    font-size: 2rem;
    font-weight: 400;
    width: 100%;
    height: 110px;
    margin: 5px;
    padding: 10px;
    animation: anim 5s infinite;
    color: rgb(var(--v-theme-textLight));
    border-right: solid 2px white;
    border-left: solid 2px white;
    border-radius: 25px;
    stroke: rgb(var(--v-theme-white));
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
