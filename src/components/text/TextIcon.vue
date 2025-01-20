<template>
  <span class="w-100 d-flex justify-center my-8">
    <v-icon 
      class="icon"
      :color="textColor"
      size="x-large">
      {{ description.icon }}
    </v-icon>
    <span class="pl-2 text-h5 w-66">
      {{ description.text }}
    </span>
  </span>
</template>
<script setup lang=ts>
  type Description = { icon: string, text: string }
defineProps({
  description: {
    type: Object as PropType<Description>,
    required: true
  },
  textColor: {
    type: String,
    required: false,
    default: 'textDark'
  }
})
</script>
