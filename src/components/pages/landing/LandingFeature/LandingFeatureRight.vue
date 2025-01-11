<template>
  <v-col 
    cols="12" 
    class="d-flex justify-start mt-8">
    <span class="d-flex ml-lg-auto">
      <v-icon 
        class="w-30 pt-2"
        size="x-large"
        color="accent">
        mdi-checkbox-marked-circle-auto-outline
      </v-icon>
      <p class="w-70 w-md-100 text-h4">
        {{ iconTexts[0].text }} <span class="highlight-text">{{ iconTexts[0].highlightText }}</span>
      </p>
    </span>
  </v-col>

  <v-col 
    cols="12" 
    class="d-flex justify-start">
    <span class="d-flex ml-lg-auto">
      <v-icon 
        class="w-30 pt-2"
        size="x-large"
        color="accent">
        mdi-checkbox-marked-circle-auto-outline
      </v-icon>
      <p class="w-70 w-md-100 text-h4">
        {{ iconTexts[1].text }} <span class="highlight-text">{{ iconTexts[1].highlightText }}</span>
      </p>
    </span>
  </v-col>

  <v-col 
    cols="12" 
    class="d-flex justify-start">
    <span class="d-flex ml-lg-auto">
      <v-icon 
        class="w-30 pt-2"
        size="x-large"
        color="accent">
        mdi-checkbox-marked-circle-auto-outline
      </v-icon>
      <p class="w-70 w-md-100 text-h4">
        {{ iconTexts[2].text }} <span class="highlight-text">{{ iconTexts[2].highlightText }}</span>
      </p>
    </span>
  </v-col>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

type IconText = {
  text: string,
  highlightText: string
}

defineProps({
  iconTexts: {
    type: Array as PropType<IconText[]>,
    required: true
  }
})
</script>