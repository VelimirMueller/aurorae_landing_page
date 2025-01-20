<template>
  <slot name="headline" />
  <v-row :class="`pa-md-12 ${reverseCols ? 'flex-row-reverse' : ''}`">
    <v-col 
      cols="12" 
      md="7">
      <slot name="left" />
    </v-col>
    <v-col 
      cols="12" 
      md="5">
      <slot name="right" />
    </v-col>
  </v-row>
  <slot name="controls" />
</template>
<script setup lang="ts">
defineProps({
  reverseCols: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>
