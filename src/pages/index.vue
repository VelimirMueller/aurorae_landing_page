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
    <MainHeadline text-light>
      <h2 class="mx-2 mx-md-0 text-textDark text-h3 text-md-h3 text-lg-h2 text-left text-md-center py-4 px-4 border-t-lg border-b-lg border-primary">
        Better<span class="text-secondary"> AI </span>Experience with<span class="text-secondary"> Aurorae </span>
      </h2>
    </MainHeadline>
    <LandingCards />
  </section>
  <section class="bg-primary min-section pt-4 pt-md-12 my-4">
    <LandingFeature reverse-cols>
      <template #headline>
        <AnimatedHeadline headline="AI Chatbot" />
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
    <LeftRightScalingImage>
      <template #left>
        <MainHeadline border-color="border-primary">
          <h4 class="mx-2 ml-md-0 text-left text-md-center text-sm-h4 text-h4">
            Awesome <span class="highlight-text">Chat</span> Integration
          </h4>
        </MainHeadline>
        <template 
          v-for="description in iconDescriptionsChat" 
          :key="description.id">
          <TextIcon :description="description" />
        </template>
      </template>
      <template #right>
        <div class="w-100 h-100 border-lg border-accent">
          <img 
            class="scale w-100 h-100 border-lg border-accent" 
            src="@/assets/chat.webp" 
            alt="">
        </div>
      </template>
    </LeftRightScalingImage>
  </section>
  <section class="bg-primary min-section pt-md-15 my-12">
    <LandingFeature reverse-cols>
      <template #headline>
        <AnimatedHeadline headline="Image Classification" />
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
    <LeftRightScalingImage :is-reverse="true">
      <template #left>
        <MainHeadline border-color="border-primary">
          <h4 class="mx-2 mx-md text-left text-md-center text-sm-h4 text-h4">
            Easy <span class="highlight-text">Image</span> Classification
          </h4>
        </MainHeadline>
        <template 
          v-for="description in iconDescriptionsImage" 
          :key="description.id">
          <TextIcon :description="description" />
        </template>
      </template>
      <template #right>
        <div class="w-100 h-100 border-lg border-accent">
          <img 
            class="scale w-100 h-100 border-lg border-accent" 
            src="../assets/img.webp" 
            alt="Classification example">
        </div>
      </template>
    </LeftRightScalingImage>
  </section>
  <section class="bg-primary my-md-12 my-2">
    <AnimatedHeadline headline="Admin Dashboard" />
    <LeftRight cta-route="/products#dashboard">
      <template #left>
        <MainHeadline text-light>
          <h4 class="mx-4 mx-md-0 text-left text-sm-center text-sm-h4 text-h4">
            Includes <span class="highlight-text">Dashboard</span>
          </h4>
        </MainHeadline>
        <template 
          v-for="description in iconDescriptionsDashboard" 
          :key="description.id">
          <TextIcon 
            :description="description" 
            text-color="white" />
        </template>
      </template>
      <template #right>
        <img
          src="../assets/dashboard.webp"
          class="w-100"
          alt="Dashboard example">
      </template>
    </LeftRight>
  </section>
  <section class="bg-white my-4">
    <AnimatedHeadline 
      border-color="border-primary"
      headline="Model Trainer" />
    <div class="d-flex justify-center align-center h-100">
      <LeftRight cta-route="/products#trainer">
        <template #left>
          <img
            src="../assets/aimodel.webp"
            class="w-100"
            alt="Model trainer example">
        </template>
        <template #right>
          <MainHeadline>
            <h4 class="ml-2 ml-md-0 text-left text-sm-center text-sm-h4 text-h4">
              Inbuilt <span class="highlight-text">Model</span> Trainer
            </h4>
          </MainHeadline>
          <template 
            v-for="description in iconDescriptionsTrainer" 
            :key="description.id">
            <TextIcon :description="description" />
          </template>
        </template>
      </LeftRight>
    </div>
  </section>
</template>
<script setup lang="ts">
import {
  iconDescriptionsChat,
  iconDescriptionsDashboard,
  iconDescriptionsImage,
  iconDescriptionsTrainer,
  iconTextsAi,
  iconTextsChat
} from '@/pages/landingPageData'
import { useObserveIntersectionsAnimation } from '@/composables/useObserveIntersection'
import LeftRightScalingImage from '@/components/structure/LeftRightScalingImage.vue';

const featureAiChatSubheadline: string = '<p class="mx-2 mx-md-0 text-h5 text-md-h4 text-md-h4 text-lg-h3 text-md-left">Experience stunnning <span class="text-accent">AI</span> Chatbot integration with <span class="text-accent">Aurorae Chat</span></p>'
const featureImageClassificationSubheadline: string = '<p class="mx-2 mx-md-0 text-h4 text-md-h4 text-lg-h3 text-md-left">Explore easy image classification with <span class="text-accent">Aurorae Image</span></p>'
useObserveIntersectionsAnimation('section', 'fly-in-left', 'fly-in-right')
</script>
<style lang="scss" scoped>
.highlight-text {
  color: rgb(var(--v-theme-secondary))
}
section {
  transition: all 0.75s ease-in-out;
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
