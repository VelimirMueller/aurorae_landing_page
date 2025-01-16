<template>
  <v-row class="d-flex justify-center w-100">
    <v-col
      cols="12"
      md="8">
      <h1 :class="`text-left text-md-center mx-2 mx-md-0 text-h3 text-md-h1 font-weight-bold ${textLight ? 'text-white' : 'text-primary'}  py-4 my-4 border-t-lg border-b-lg ${textLight ? 'border-white' : 'border-primary'}`">
        {{ headline }}
        <slot />
      </h1>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
defineProps({
  headline: {
    type: String,
    required: false,
    default: ''
  },

  textLight: {
    type: Boolean,
    required: false,
    default: false,
  }
})
</script>