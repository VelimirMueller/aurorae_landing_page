<template>
  <v-card 
    color="primary"
    :class="`border-lg border-${color} pa-2 rounded-lg card`">
    <v-chip
      class="outline-lg outline-white mb-4 mt-2"
      :color="color"
      size="x-large">
      {{ name }}
    </v-chip>
    <v-list class="bg-white rounded-lg d-flex flex-column list">
      <v-list-item :class="`mb-2 border-b-lg border-${color} pb-2`">
        <h3 class="text-h3 font-weight-bold mt-4">
          {{ `${price} ${currency}` }}
          <span class="text-subtitle-2 font-weight-bold">
            {{ interval }}
          </span>
        </h3>
      </v-list-item>

      <template
        v-for="label in labels"
        :key="label">
        <v-list-item class="d-flex align-center">
          <v-icon 
            class="icon"
            :color="color">
            {{ icon }}
          </v-icon>
          <span class="ml-2 text-textDark text-h6 pt-1">{{ label }}</span>
        </v-list-item>
      </template>
    </v-list>

    <div class="w-100 d-flex justify-start mt-4">
      <v-btn 
        class="w-100 rounded-lg border-t-lg border-b-lg border-info bg-primary shadow-box"
        size="x-large"
        :href="`/products/${id}`">
        Choose
      </v-btn>
    </div>
  </v-card>
</template>

<script lang="ts" setup>
  interface Feature {
  id: number
  name: string
  price: number
  currency: string
  labels: string[]
  icon: string
  interval: string,
  color: string
}
  const props = defineProps({
    feature: {
      type: Object as PropType<Feature>,
      required: true
    }
  })

  const { id, color, name, price, currency, labels, icon, interval } = props.feature
</script>

<style lang="scss" scoped>

.card {
  min-height: 400px;
}

.list {
  min-height: 400px!important;
}

.shadow-box {
  box-shadow: 0px 1px 1px rgb(var(--v-theme-info));

  &:hover {
    background-color: rgb(var(--v-theme-white))!important;
    color: rgb(var(--v-theme-accent))!important;
  }
}
</style>