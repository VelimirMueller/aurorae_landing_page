<template>
  <section class="bg-white">
    <LandingHero class="pb-14" />
  </section>

  <section id="logoline" class="bg-primary">
    <LogoLine />
  </section>

  <section id="cards" class="bg-white pt-md-12 px-md-12">
    <h2 class="text-textDark mb-md-12 pt-md-12 text-h3 text-md-h3 text-lg-h2 text-md-center py-12 py-md-12 px-4">
      Better<span class="text-secondary"> AI </span>Experience with<span class="text-secondary"> Aurorae </span>
    </h2>

    <LandingCards />
  </section>

  <section class="bg-primary min-section pt-4 pt-md-12 my-4">
    <LandingFeature reverse-cols>
      <template #headline>
        <div class="text-container animate">
          <h2 class="text-h3 text-md-h2 text-lg-h1 text-left text-md-center text-bold pt-2 pt-md-8 mt-md-4 font-weight-bold">
            AI Chatbot
          </h2>
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

  <section class="bg-white py-12 pa-md-0 my-12">
    <v-row class="pa-0">
      <v-col cols="12" md="6" class="my-auto">
        <h4 class="text-left text-sm-center text-sm-h4 text-h4 px-2 mb-12">
          Awesome <span class="highlight-text">Chat</span> Integration
        </h4>
        <template 
          v-for="description in iconDescriptionsChat" 
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

  <section class="bg-primary min-section pt-2 pt-md-15 my-12">
    <LandingFeature reverse-cols>
      <template #headline>
        <div class="text-container animate">
          <h2 class="text-h3 text-md-h2 text-lg-h1 text-left text-md-center text-bold pt-md-8 mt-md-4 font-weight-bold">
            Image Classification
          </h2>
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

  <section class="bg-white">
    <v-row class="pa-0 flex-row-reverse">
      <v-col 
        cols="12" 
        md="6" 
        class="my-auto pb-12">
        <h4 class="text-left text-sm-center text-sm-h4 text-h4 px-2 mb-12">
          Powerful <span class="highlight-text">Image</span> Classification
        </h4>
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

  <section class="bg-primary my-md-12">
    <div class="text-container w-100">
      <h2 class="text-h3 text-md-h2 text-lg-h1 text-left text-md-center text-bold pt-md-8 mt-md-4 font-weight-bold mb-15">
        Admin Dashboard
      </h2>
    </div>
    <v-row>
      <v-col 
        cols="12" 
        md="6" 
        class="my-auto pb-12">
        <h4 class="text-left text-sm-center text-sm-h4 text-h4 px-2 mb-12">
          Inbuilt <span class="highlight-text">Model</span> Trainer
        </h4>
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

      <v-col cols="12" lg="6">
        <img src="../assets/dashboard.webp" class="w-100" alt="" lazy>
      </v-col>

      <ButtonRow 
        href="/products#dashboard"
        class="mt-12 mt-lg-2" />
    </v-row>
  </section>

  <section class="bg-white">
    <div class="text-container w-100">
      <h2 class="text-h3 text-md-h2 text-lg-h1 text-left text-md-center text-bold pt-md-8 mt-md-4 font-weight-bold mb-15">
        Model Trainer
      </h2>
    </div>

    <div class="d-flex justify-center align-center h-100">
      <v-row>
        <v-col cols="12" lg="6">
          <img src="../assets/aimodel.webp" class="w-100" alt="" lazy>
        </v-col>

        <v-col 
          cols="12" 
          md="6" 
          class="my-auto pb-12">
          <h4 class="text-left text-sm-center text-sm-h4 text-h4 px-2 mb-12">
            Inbuilt <span class="highlight-text">Model</span> Trainer
          </h4>
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
const featureAiChatSubheadline: string = '<p class="text-h4 text-md-h4 text-lg-h3 text-md-left">Experience stunnning <span class="text-accent">AI</span> Chatbot integration with <span class="text-accent">Aurorae Chat</span></p>'
const featureImageClassificationSubheadline: string = '<p class="text-h4 text-md-h4 text-lg-h3 text-md-left">Explore easy image classification with <span class="text-accent">Aurorae Image</span></p>'

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
  {id: 0, text: 'Classify your images automatically.', icon: 'mdi-monitor-dashboard'},
  {id: 1, text: 'Handle your product images with AI.', icon: 'mdi-monitor-dashboard'},
  {id: 0, text: 'Model can be refined with Aurorae Trainer', icon: 'mdi-monitor-dashboard'}
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
@keyframes flyInLeft {
 0% {
  transform: translate(25%, -50%);
 }

 100% {
  transform: translateX(0, 0);
 }
}

@keyframes flyInRight {
 0% {
  transform: translate(-25%, -50%);
 }

 100% {
  transform: translateX(0, 0);
 }
}

.fly-in-right {
  animation: flyInLeft 0.75s cubic-bezier(0.215, 0.610, 0.355, 1);
}

.fly-in-left {
  animation: flyInRight 0.75s cubic-bezier(0.215, 0.610, 0.355, 1);
}

.highlight-text {
  color: rgb(var(--v-theme-secondary))
}

section {
  transition: all 0.75s ease-in-out;
}

.text-container {
  margin: 0;
  color: rgba(225,225,225, .01);
  background-image: url("../assets/gradient-dark.webp");
  background-repeat: repeat;
  background-clip: text;
  -webkit-background-clip: text;
  animation: animateText 15s ease-in-out infinite;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
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
