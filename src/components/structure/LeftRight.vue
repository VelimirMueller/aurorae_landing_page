<template>
  <v-row>
    <v-col
      cols="12"
      md="6">
      <slot name="left" />
    </v-col>
    
    <v-col 
      cols="12" 
      md="6" 
      class="my-auto pb-12">
      <slot name="right" />
    </v-col>

    <ButtonRow 
      :href="ctaRoute"
      class="mt-12 mt-lg-2" />
  </v-row>
</template>

<script setup lang="ts">
  defineProps({
    ctaRoute: {
      type: String,
      required: true
    }
  })
</script>
