<template>
  <!-- Mobile menu -->
  <div class="text-center d-lg-none">
    <v-menu>
      <template #activator="{ props }">
        <v-btn color="secondary">
          <v-icon
            class="pr-4 icon"
            color="white"
            size="42"
            v-bind="props">
            mdi-dialpad
          </v-icon>
        </v-btn>
      </template>

      <!-- Side Menu with navigation links -->
      <div class="d-flex d-lg-none flex-column ga-8 px-14 py-12 bg-primary">
        <template 
          v-for="link in links"
          :key="link.href">
          <v-btn
            :href="link.href"
            class="link mt-4" 
            size="x-large">
            {{ link.label }}
          </v-btn>
        </template>
        
        <div class="d-flex align-center h-100 w-60">
          <a
            class="mt-auto w-100"
            href="/">
            <img
              class="w-100"
              src="../../assets/Logo.webp" 
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

defineProps({
  links: {
    type: Array as PropType<LinkElement[]>,
    required: false,
    default: () => []
  }
})
</script>

<style lang="scss" scoped>
.link {
  width: 100%;
  font-size: 1.5rem;
}
</style>