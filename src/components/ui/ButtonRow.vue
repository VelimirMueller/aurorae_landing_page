<template>
  <v-row class="d-flex pb-12">
    <v-col
      cols="12"
      md="6"
      class="w-100 ml-auto mr-auto d-flex justify-end">
      <v-btn
        class="w-100 w-md-50 text-textLight"
        :href="href"
        color="secondary"
        size="x-large"
        text="find out more" />
    </v-col>

    <v-col
      cols="12"
      md="6"
      class="w-100 ml-auto mr-auto d-flex justify-start">
      <v-btn
        class="w-100 w-md-50 border-4 border-primary text-textDark"
        color="accent"
        href="/login"
        size="x-large"
        text="try out" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
defineProps({
  href: {
    type: String,
    required: false,
    default: ''
  }
})
</script>