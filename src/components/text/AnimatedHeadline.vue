<template>
  <div class="text-container animate">
    <v-row class="d-flex justify-center">
      <v-col 
        cols="12" 
        md="8">
        <h2 :class="`mx-2 ml-md-0 text-h3 text-md-h2 text-lg-h1 text-left text-md-center text-bold py-4 my-md-4 font-weight-bold border-b-lg border-t-lg ${borderColor}`">
          {{ headline }}
        </h2>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
defineProps({
  headline: {
    type: String,
    required: false,
    default: ''
  },

  borderColor: {
    type: String,
    required: false,
    default: 'border-white'
  }
})
</script>
