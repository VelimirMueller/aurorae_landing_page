<template>
  <v-row class="d-flex justify-center items-center">
    <v-col>
      <h5 
        class="pr-4 mt-4 text-md-left text-h1 pl-0 pl-md-12 w-md-75" 
        v-html="subheadline" />
      <p class="w-100 w-md-75 mt-4 text-md-left text-h5 w-100 w-md-75 pl-0 pl-md-12">
        {{ featureText }}
      </p>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
defineProps({
  subheadline: {
    type: String,
    required: true
  },

  featureText: {
    type: String,
    required: true
  }
})
</script>

