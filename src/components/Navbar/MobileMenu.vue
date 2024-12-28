<template>
  <!-- Mobile menu -->
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

      <!-- Side Menu with navigation links -->
      <div class="d-flex d-lg-none flex-column ga-12 px-16 bg-darkest">
        <h2 class="text-center">
          Navigation
        </h2>
        <template 
          v-for="link in props.links"
          :key="link.href">
          <a :href="link.href">
            <v-btn 
              class="link" 
              size="x-large">
              {{ link.label }}
            </v-btn>
          </a>
        </template>
        
        <div class="d-flex align-center h-100">
          <a
            class="mt-auto w-100"
            href="/">
            <img
              class="w-100"
              src="../../assets/Logo.svg" 
              alt="Anwendugslogo">
          </a>
        </div>
      </div>
    </v-menu>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps } from 'vue'

type LinkElement = {
  href: string,
  label: string
}

const props = defineProps({
  links: {
    type: Array as PropType<LinkElement[]>,
    required: false,
    default: () => []
  }
})
</script>

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
    width: 100%;
    color: #858585;
    border-radius: 15px;
    transition: all 0.35s ease-in-out;
    font-size: 1.25rem;
    background-color: transparent;

    &:hover {
      color: #ff39d4;
      text-decoration: underline;
    }
  }

  .img-nav {
    align-self: flex-end
  }
</style>