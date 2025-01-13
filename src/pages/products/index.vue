<template>
  <section class="bg-white pa-0 d-flex align-center flex-column dots">
    <BackgroundLogo />
    <h1 class="text-h2 text-md-h1 text-md-h1 font-weight-bold pt-8 mt-4 pt-md-12 text-primary">
      Products
    </h1>
    <template 
      v-for="product in products" 
      :key="product.id">
      <v-row class="d-flex justify-center pb-4 w-100 h-100 pt-md-12 position-relative rounded-lg">
        <v-col
          cols="12"
          sm="8"
          class="bg-white h-100 border-b-lg border-t-lg border-secondary">
          <h2 
            :id="product.product.pageHref.replace('#', '')"
            class="text-container w-100 text-h4 text-md-h2 pa-4">
            {{ product.product.name }}
          </h2>
        </v-col>
        <v-col
          cols="12"
          sm="8"
          class="">
          <v-data-table
            color="primary"
            class="text-textDark bg-primary table h-100"
            :items="products.map(prod => prod.product).filter(prod => prod.name === product.product.name)"
            hide-default-footer />
        </v-col>

        <v-col
          cols="12"
          sm="8"
          class="pt-0 bg-white">
          <img
            :src="product.image"
            class="w-100 h-100 opacity-100"
            alt="">
        </v-col>

        <v-col
          cols="12"
          sm="8">
          <v-btn
            class="w-100"
            color="secondary"
            size="large"
            variant="outlined"
            :href="`/product/${product.id}`">
            {{ `Buy product: ${product.product.name}` }}
          </v-btn>
        </v-col>
      </v-row>
    </template>
  </section>
</template>

<script setup lang="ts">
interface Product {
  id: number
  image: string
  product: {
    name: string
    technology: string
    description: string
    useCase: string
    pageHref: string
  }
}

const products: Product[] = [
  { id: 0, image: '/chat.webp', product: { name: 'Aurorae Chat', technology: 'GPT4ALL', description: 'AI Chatbot which can be used to solve a lot of analytical questions.', useCase: 'Multitalent', pageHref: '#chat' } },
  { id: 1, image: '/img.webp', product: { name: 'Aurorae Image', technology: 'TensorFlow',  description: 'Image Classifier, could be used for a webshop to handle products more easy and more efficient.', useCase: 'Timesaver', pageHref: '#images'} },
  { id: 2, image: '', product: { name: 'Dashboard', technology: 'Vuetify',  description: 'All your relevant data and actions in one place beautifully designed for a smooth work session.', useCase: 'Administration', pageHref: '#dashboard'} },
  { id: 3, image: '', product: { name: 'Model Trainer', technology: 'TensorFlow',  description: 'Refine your model to fit your specific needs more or create more models based on your existing ones for more specific use cases.', useCase: 'Refine Chatbot or Image classifier to adjust to your specific needs.', pageHref: '#trainer' } }
]

onMounted(() => {
  setTimeout(() => {
    const htmlElement = document.getElementById(`${window.location.href.split('#')[1]}`)
    htmlElement?.scrollIntoView()
  }, 10)
})

</script>

<style>
th {
  background-color: rgb(var(--v-theme-white));
  border-color: rgb(var(--v-theme-accent));
}

table tbody {
  background-color: rgb(var(--v-theme-white));
  border: solid 2px rgb(var(--v-theme-accent));
}

table tbody:hover {
  background-color: rgb(var(--v-theme-primary))!important;
  color: rgb(var(--v-theme-white));
}

.v-data-table__td:hover {
  color: rgb(var(--v-theme-accent))!important;
}

.text-container {
  background-image: url("../../assets/gradient.webp");
}
</style>