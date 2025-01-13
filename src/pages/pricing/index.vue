<template>
  <section class="bg-white min-h d-flex align-itmes dots">
    <BackgroundLogo />
    <v-row class="d-flex justify-center">
      <v-col 
        cols="12"
        md="9"
        class="d-flex align-center">
        <div class="text-h6 pa-2 pa-md-12 w-100 h-100">
          <h1 class="text-h2 text-sm-h1 text-center font-weight-bold my-4">
            Pricing
          </h1>

          <div class="d-flex w-100 ga-2 mt-4 h-75 mt-8">
            <v-row>
              <template 
                v-for="feature in features"
                :key="feature.id">
                <v-col 
                  cols="12"
                  lg="4"
                  md="4" 
                  sm="6">
                  <v-card 
                    color="primary"
                    :class="`border-lg border-${feature.color} pa-2 rounded-lg card`">
                    <v-list class="bg-white rounded-lg d-flex flex-column  list">
                      <v-list-item :class="`mb-2 border-b-lg border-${feature.color} pb-2`">
                        <v-chip 
                          :color="feature.color"
                          size="x-large">
                          {{ feature.name }}
                        </v-chip>
                        <h3 class="text-h3 font-weight-bold mt-4">
                          {{ `${feature.price} ${feature.currency}` }}
                          <span class="text-subtitle-2 font-weight-bold">
                            {{ feature.interval }}
                          </span>
                        </h3>
                      </v-list-item>

                      <template
                        v-for="label in feature.labels"
                        :key="label">
                        <v-list-item class="d-flex align-center">
                          <v-icon 
                            class="icon"
                            :color="feature.color">
                            {{ feature.icon }}
                          </v-icon>
                          <span class="ml-2 text-textDark text-h6 pt-1">{{ label }}</span>
                        </v-list-item>
                      </template>
                    </v-list>

                    <div class="w-100 d-flex justify-start mt-4">
                      <v-btn 
                        class="w-100 rounded-lg"
                        size="x-large" 
                        :color="feature.color"
                        :href="`/products/${feature.id}`"
                        variant="outlined">
                        Choose
                      </v-btn>
                    </div>
                  </v-card>
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
      'Chatbot',
      'Customer support'
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

.card {
  min-height: 500px;
}

.list {
  min-height: 400px;
}
</style>
