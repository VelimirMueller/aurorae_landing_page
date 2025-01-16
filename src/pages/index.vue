<template>
  <section class="bg-white dots">
    <LandingHero class="pb-14 mt-4" />
  </section>

  <section
    id="logoline"
    class="bg-primary my-4">
    <LogoLine />
  </section>

  <section
    id="cards"
    class="my-4 bg-white pt-md-12 px-md-12">
    <v-row class="d-flex justify-center">
      <v-col cols="12" md="8">
        <h2 class="mx-2 mx-md-0 text-textDark mb-md-12 pt-md-12 text-h3 text-md-h3 text-lg-h2 text-left text-md-center py-12 py-md-12 px-4 border-t-lg border-b-lg border-primary">
          Better<span class="text-secondary"> AI </span>Experience with<span class="text-secondary"> Aurorae </span>
        </h2>
      </v-col>
    </v-row>
    
    <LandingCards />
  </section>

  <section class="bg-primary min-section pt-4 pt-md-12 my-4">
    <LandingFeature reverse-cols>
      <template #headline>
        <div class="text-container animate">
          <v-row class="d-flex justify-center">
            <v-col cols="12" md="8">
              <h2 class="mx-2 ml-md-0 text-h3 text-md-h2 text-lg-h1 text-left text-md-center text-bold py-4 my-md-4 font-weight-bold border-b-lg border-t-lg border-white">
                AI Chatbot
              </h2>
            </v-col>
          </v-row>
        </div>
      </template>

      <template #left>
        <LandingFeatureLeft
          headline="AI Chatbot"
          :subheadline="featureAiChatSubheadline"
          feature-text="Independant ai chat bot client with unlimited use cases" />
      </template>

      <template #right>
        <LandingFeatureRight :icon-texts="iconTextsChat" />
      </template>

      <template #controls>
        <ButtonRow 
          href="/products#chat"
          class="mt-15 mt-lg-2" />
      </template>
    </LandingFeature>
  </section>

  <section class="bg-white pa-md-0 my-12 dots">
    <v-row class="pa-0">
      <v-col
        cols="12"
        md="6"
        class="my-auto icon">
        <v-row class="d-flex justify-center">
          <v-col cols="12" md="8">
            <h4 class="mx-2 ml-md-0 text-left text-md-center text-sm-h4 text-h4 px-2 py-4 mb-12 border-t-lg border-b-lg border-primary">
              Awesome <span class="highlight-text">Chat</span> Integration
            </h4>
          </v-col>
        </v-row>
        <template 
          v-for="description in iconDescriptionsChat" 
          :key="description.id">
          <span class="w-100 d-flex justify-center my-8">
            <v-icon 
              class="icon"
              color="textDark"
              size="x-large">
              {{ description.icon }}
            </v-icon>
            <p class="pl-2 text-h5 w-66">
              {{ description.text }}
            </p>
          </span>
        </template>
      </v-col>

      <v-col 
        cols="12" 
        md="6" 
        class="pa-0 scale mt-12 mt-md-0 d-none d-md-block">
        <div class="w-100 h-100 border-lg border-accent">
          <img 
            class="scale w-100 h-100 border-lg border-accent" 
            src="../assets/chat.webp" 
            alt=""
            lazy>
        </div>
      </v-col>
    </v-row>
  </section>

  <section class="bg-primary min-section pt-md-15 my-12">
    <LandingFeature reverse-cols>
      <template #headline>
        <div class="text-container animate">
          <v-row class="d-flex justify-center">
            <v-col cols="12" md="8">
              <h2 class="mx-2 mx-md-0 text-h3 text-md-h2 text-lg-h1 text-left text-md-center text-bold py-4 my-4 font-weight-bold border-t-lg border-b-lg border-white">
                Image Classification
              </h2>
            </v-col>
          </v-row>
        </div>
      </template>

      <template #left>
        <LandingFeatureLeft
          headline="AI Chatbot"
          :subheadline="featureImageClassificationSubheadline"
          feature-text="Already integrated image classification model ready to be used in the web application" />
      </template>
      
      <template #right>
        <LandingFeatureRight :icon-texts="iconTextsAi" />
      </template>

      <template #controls>
        <ButtonRow 
          href="/products#image"
          class="mt-12 mt-lg-2" />
      </template>
    </LandingFeature>
  </section>

  <section class="bg-white dots my-4">
    <v-row class="pa-0 flex-row-reverse">
      <v-col 
        cols="12" 
        md="6" 
        class="my-auto pb-12">
        <v-row class="d-flex justify-center">
          <v-col cols="12" md="8">
            <h4 class="ml-2 ml-md-0 text-left text-md-center text-sm-h4 text-h4 py-4 mb-12 border-t-lg border-b-lg border-primary">
              Powerful <span class="highlight-text">Image</span> Classification
            </h4>
          </v-col>
        </v-row>
        <template 
          v-for="description in iconDescriptionsImage" 
          :key="description.id">
          <span class="w-100 d-flex justify-center mt-4">
            <v-icon 
              class="icon"
              color="textDark"
              size="x-large">
              {{ description.icon }}
            </v-icon>
            <p class="pl-2 text-h5 w-66">
              {{ description.text }}
            </p>
          </span>
        </template>
      </v-col>

      <v-col 
        cols="12" 
        md="6" 
        class="pa-0 mt-12 mt-md-0 d-none d-md-block">
        <div class="w-100 h-100 border-lg border-accent">
          <img 
            class="scale w-100 h-100 border-lg border-accent" 
            src="../assets/img.webp" 
            alt=""
            lazy>
        </div>
      </v-col>
    </v-row>
  </section>

  <section class="bg-primary my-md-12 my-2">
    <div class="text-container w-100">
      <v-row class="d-flex justify-center">
        <v-col cols="12" md="8">
          <h2 class="text-left text-md-center text-h3 text-md-h2 text-lg-h1 text-left text-md-center text-bold py-4 font-weight-bold mb-8 border-t-lg border-b-lg border-white">
            Admin Dashboard
          </h2>
        </v-col>
      </v-row>
    </div>
    <v-row>
      <v-col
        cols="12"
        md="6">
        <img
          src="../assets/dashboard.webp"
          class="w-100"
          alt=""
          lazy>
      </v-col>
      
      <v-col 
        cols="12" 
        md="6" 
        class="my-auto pb-12">
        <v-row class="d-flex justify-center">
          <v-col cols="12" md="8">
            <h4 class="mx-4 mx-md-0 text-left text-sm-center text-sm-h4 text-h4 py-4 my-8 border-t-lg border-b-lg border-white">
              Includes <span class="highlight-text">Dashboard</span>
            </h4>
          </v-col>
        </v-row>
        <template 
          v-for="description in iconDescriptionsDashboard" 
          :key="description.id">
          <span class="w-100 d-flex justify-center mt-4">
            <v-icon 
              class="icon"
              color="white"
              size="x-large">
              {{ description.icon }}
            </v-icon>
            <p class="pl-2 text-h5 w-66">
              {{ description.text }}
            </p>
          </span>
        </template>
      </v-col>

      <ButtonRow 
        href="/products#dashboard"
        class="mt-12 mt-lg-2" />
    </v-row>
  </section>

  <section class="bg-white my-4">
    <v-row class="d-flex justify-center">
      <v-col cols="12" md="8" class="text-container">
        <h2 class="ml-2 ml-md-0 text-left text-md-center text-h3 text-md-h2 text-lg-h1 text-left text-md-center font-weight-bold py-4 my-4 font-weight-bold mb-15 border-t-lg border-b-lg border-primary">
          Model Trainer
        </h2>
      </v-col>
    </v-row>

    <div class="d-flex justify-center align-center h-100">
      <v-row>
        <v-col
          cols="12"
          md="6">
          <img
            src="../assets/aimodel.webp"
            class="w-100"
            alt=""
            lazy>
        </v-col>

        <v-col 
          cols="12"
          md="6"
          class="my-auto pb-12">
          <v-row class="d-flex justify-center">
            <v-col cols="12" lg="6">
              <h4 class="ml-2 ml-md-0 text-left text-sm-center text-sm-h4 text-h4 py-2 my-8 border-t-lg border-b-lg border-primary">
                Inbuilt <span class="highlight-text">Model</span> Trainer
              </h4>
            </v-col>
          </v-row>
          <template 
            v-for="description in iconDescriptionsTrainer" 
            :key="description.id">
            <span class="w-100 d-flex justify-center mt-4">
              <v-icon 
                class="icon"
                color="textDark"
                size="x-large">
                {{ description.icon }}
              </v-icon>
              <p class="pl-2 text-h5 w-66">
                {{ description.text }}
              </p>
            </span>
          </template>
        </v-col>

        <ButtonRow 
          href="/products#trainer"
          class="mt-12 mt-lg-2" />
      </v-row>
    </div>
  </section>
</template>

<script setup lang="ts">
const featureAiChatSubheadline: string = '<p class="mx-2 mx-md-0 text-h5 text-md-h4 text-md-h4 text-lg-h3 text-md-left">Experience stunnning <span class="text-accent">AI</span> Chatbot integration with <span class="text-accent">Aurorae Chat</span></p>'
const featureImageClassificationSubheadline: string = '<p class="mx-2 mx-md-0 text-h4 text-md-h4 text-lg-h3 text-md-left">Explore easy image classification with <span class="text-accent">Aurorae Image</span></p>'

const iconTextsChat: {text: string, highlightText: string}[] = [
  {text: '100%', highlightText: 'customizable'},
  {text: 'Fully', highlightText: 'data compliant'},
  {text: 'Completely', highlightText: 'independent'}
]

const iconTextsAi: {text: string, highlightText: string}[] = [
  {text: 'Fine tuning', highlightText: 'ready'},
  {text: 'Pre-trained', highlightText: 'model'},
  {text: 'Powerful', highlightText: 'classification'}
]

const iconDescriptionsChat: {id: number, text: string, icon: string}[] = [
  {id: 0, text: 'Chat with a customizable AI with lots of knowledge.', icon: 'mdi-chat-processing-outline'},
  {id: 1, text: 'Host your own AI Tools and keep control.', icon: 'mdi-chat-processing-outline'},
  {id: 0, text: 'Data is protected because it stays with you', icon: 'mdi-chat-processing-outline'}
]

const iconDescriptionsImage: {id: number, text: string, icon: string}[] = [
  {id: 0, text: 'Classify your images automatically.', icon: 'mdi-image-multiple-outline'},
  {id: 1, text: 'Handle your product images with AI.', icon: 'mdi-image-multiple-outline'},
  {id: 0, text: 'Model can be refined with Aurorae Trainer', icon: 'mdi-image-multiple-outline'}
]

const iconDescriptionsDashboard: {id: number, text: string, icon: string}[] = [
  {id: 0, text: 'Complete overview of your aurorae application.', icon: 'mdi-monitor-dashboard'},
  {id: 1, text: 'Easy user handling.', icon: 'mdi-monitor-dashboard'},
  {id: 0, text: 'Database interaction included.', icon: 'mdi-monitor-dashboard'}
]

const iconDescriptionsTrainer: {id: number, text: string, icon: string}[] = [
  {id: 0, text: 'Classify your images automatically.', icon: 'mdi-arrow-top-right-bold-box-outline'},
  {id: 1, text: 'Handle your product images with AI.', icon: 'mdi-arrow-top-right-bold-box-outline'},
  {id: 0, text: 'Model can be refined with Aurorae Trainer', icon: 'mdi-arrow-top-right-bold-box-outline'}
]

onMounted(() => {
  const sections = document.querySelectorAll('section'); // Select the LogoLine section
  sections.forEach((section, idx) => {
    if (idx !== 0) { 
      section.style.opacity = '0%';
    }
    if (section) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && idx !== 0) {
            console.log('Second section (LogoLine) is fully in the viewport!');
            section.style.opacity = '100%'
            console.log(idx)
            idx % 2 === 0 ? section.classList.add('fly-in-left') : section.classList.add('fly-in-right')
            console.log(entries)
          }
        })
      }, 
      { 
        threshold: 0.25 // Ensures full visibility
      })
      observer.observe(section);
    }
  })
});
</script>

<style scoped>
.highlight-text {
  color: rgb(var(--v-theme-secondary))
}

section {
  transition: all 0.75s ease-in-out;
}

.text-container {
  background-image: url("../assets/gradient-dark.webp");
}

.scale {
  transform: scaleY(1.1);
}

@media screen and (min-width: 990px) {
  .min-section {
    min-height: 700px
  }
}

@media screen and (max-width: 990px) {
  .scale {
    transform: scale(1);
    padding: 25px;
  }
}

</style>
