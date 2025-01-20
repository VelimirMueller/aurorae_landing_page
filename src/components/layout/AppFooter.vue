<template>
  <v-footer class="bg-primary h-100">
    <v-row
      justify="center"
      no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        :href="link"
        class="mx-2 link"
        rounded="xl"
        variant="text">
        {{ link.replace('/', '') }}
      </v-btn>
    </v-row>
  </v-footer>
</template>
<script setup lang="ts">
const links = [
  '/about',
  '/products',
  '/pricing',
  '/wiki'
]
</script>
