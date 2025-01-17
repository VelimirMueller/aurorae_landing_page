<template>
  <section class="bg-white min-h d-flex align-itmes dots">
    <BackgroundLogo />
    <v-row class="d-flex justify-center opacity-bg">
      <v-col 
        cols="12"
        md="9"
        class="d-flex align-center py-4">
        <div class="text-h6 w-100 h-100">
          <MainHeadline headline="Pricing" />

          <div class="d-flex w-100 ga-4 h-75 mt-4 pb-6 pt-2">
            <v-row class="pb-12">
              <template 
                v-for="feature in features"
                :key="feature.id">
                <v-col 
                  cols="12"
                  lg="4"
                  md="4" 
                  sm="6">
                  <PricingCard :feature="feature" />
                </v-col>
              </template>
            </v-row>
          </div>
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script setup lang="ts">
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

const features: Feature[] = [
  {
    id: 0,
    name: 'Standard',
    price: 199,
    currency: '€',
    labels: [
      'Chatbot'
    ],
    icon: 'mdi-check-decagram-outline',
    interval: '/per month',
    color: 'info'
  },
  {
    id: 1,
    name: 'Pro',
    price: 399,
    currency: '€',
    labels: [
      'Chatbot',
      'Dashboard',
      'Customer support'
    ],
    icon: 'mdi-check-decagram-outline',
    interval: '/per month',
    color: 'info'
  },
  {
    id: 2,
    name: 'Premium',
    price: 1999, 
    currency: '€',
    labels: [
      'Chatbot',
      'Image classification',
      'Dashboard',
      'Model trainer',
      'Customer support'
    ],
    icon: 'mdi-check-decagram-outline',
    interval: '/per month',
    color: 'accent'
  },
]
</script>


<style scoped>
.min-h {
  min-height: 90vh;
}
</style>
