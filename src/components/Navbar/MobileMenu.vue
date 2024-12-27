<template>
  <!-- mobile menu -->
  <div class="text-center d-lg-none">
    <v-menu color="darker d-lg-none">
      <template #activator="{ props }">
        <v-btn color="secondary">
          <v-icon
            color="white"
            size="42"
            v-bind="props">
            mdi-dialpad
          </v-icon>
        </v-btn>
      </template>

      <v-list class="mt-2 d-lg-none">
        <v-list-item>
          <template #append>
            <v-list-item><a href="/"><v-btn size="large" color="white">Link 1</v-btn></a></v-list-item>
            <v-list-item><a href="/"><v-btn size="large" color="white">Link 2</v-btn></a></v-list-item>
            <v-list-item><a href="/"><v-btn size="large" color="white">Link 3</v-btn></a></v-list-item>
            <v-list-item><a href="/"><v-btn size="large" color="white">Link 4</v-btn></a></v-list-item>
          </template>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>