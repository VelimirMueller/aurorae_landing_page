<template>
  <v-row :class="`pa-0 ${isReverse ? 'flex-row-reverse' : ''}`">
    <v-col
      cols="12"
      md="6"
      class="my-auto icon">
      <slot name="left" />
    </v-col>

    <v-col 
      cols="12" 
      md="6" 
      class="pa-0 scale mt-12 mt-md-0 d-none d-md-block">
      <slot name="right" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
  defineProps({
    isReverse: {
      type: Boolean,
      required: false,
      default: false
    }
  })
</script>