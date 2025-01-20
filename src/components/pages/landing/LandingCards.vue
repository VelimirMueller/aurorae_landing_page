<template>
  <div>
    <v-row class="px-md-12 px-2 pb-8 py-md-12">
      <template
        v-for="card in cards"
        :key="card.id">
        <v-col
          cols="12"
          md="6"
          lg="3">
          <v-expand-transition>
            <v-card 
              class="my-2 border-2 border-primary rounded-lg card border-thin border-primary"
              :text="card.text"
              :title="card.headline">
              <template #actions>
                <div class="w-100 d-flex pt-md-12 pt-10 mt-4 card">
                  <v-icon
                    class="icon"
                    size="x-large">
                    {{ card.icon }}
                  </v-icon>
                  <v-btn
                    :href="card.href"
                    class="ml-auto mr-4 text-secondary mr-0"
                    text="Find out more >" />
                </div>
              </template>
            </v-card>
          </v-expand-transition>
        </v-col>
      </template>
    </v-row>
  </div>
</template>

<script setup lang="ts">
type Card = {
  id: number,
  headline: string,
  text: string,
  href: string,
  icon: string
}
const cards: Card[] = [
  {
    id: 0, 
    headline: 'Aurorae Chat', 
    text: 'Self hosted AI chatbot - enables GPT power to your application with privacy.',
    href: '/products#chat',
    icon: 'mdi-chat-processing-outline'
  },
  {
    id: 1, 
    headline: 'Aurorae Images', 
    text: 'A basic pre-trained image classifier model ready to be used for your purposes.',
    href: '/products#images',
    icon: 'mdi-image-multiple-outline'
  },
  {
    id: 2, 
    headline: 'Aurorae Dashboard', 
    text: 'Overview dashboard to track your Aurorae Application status\n.',
    href: '/products#dashboard',
    icon: 'mdi-monitor-dashboard'
  },
  {
    id: 3, 
    headline: 'Aurorae Trainer', 
    text: 'Refine your Aurorae Image model further to fit your business needs.',
    href: '/products#trainer',
    icon: 'mdi-arrow-top-right-bold-box-outline'
  }
]
</script>

<style scoped lang="scss">
.card {
  height: 100%;
  background-color: rgb(var(--v-theme-white));
  color: rgb(var(--v-theme-primary));
  transition: all 175ms ease-in;
}

.card:hover{
  background-color: rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-white));

  .v-card-actions > div {
    background-color: rgb(var(--v-theme-primary))!important;

    & > * {
      color: rgb(var(--v-theme-white));
    }
  }
}
</style>
