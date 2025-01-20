<template>
  <div class="w-100 h-90 d-flex justify-end position-absolute">
    <div class="mt-auto position-fixed d-flex h-90 px-8">
      <v-row class="d-flex">
        <v-col
          cols="12"
          class="d-flex h-100">
          <div class="mt-auto position-relative">
            <template 
              v-for="(notification, idx) in notifications" 
              :key="idx">
              <v-alert
                v-if="notifications.length > 0"
                :id="idx"
                :type="notification.type" 
                class="mt-auto my-2 text-textDark fadeOutAnimation">
                {{ notification.text }}
              </v-alert>
            </template>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia';

const appStore = useAppStore()
const { notifications } = storeToRefs(appStore)
</script>
<style lang="scss" scoped>
  .h-90 {
    height: 85%;
  }
  .fadeOutAnimation {
    animation: fadeOut 10s ease-out;
    opacity: 0;
  }
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.75;
    }
    75% {
      opacity: 0.4;
    }
    85% {
      opacity: 0.2;
    }
    100% {
      opacity: 0;
    }
  }
</style>
