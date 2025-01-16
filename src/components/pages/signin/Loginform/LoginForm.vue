
<template>
  <v-row class="mt-12 position-relative ga-2 ga-md-8 d-flex justify-center pa-md-12">
    <v-col 
      class="bg-white pa-4 border-lg rounded-lg border-primary"
      cols="10" 
      sm="10"
      md="5"
      lg="5">
      <RegisterForm />
    </v-col>
      
    <v-col 
      cols="10" 
      sm="10"
      md="5"
      lg="3"
      class="bg-white pa-4 border-lg rounded-lg border-primary d-flex flex-column">
      <SignInForm />
    </v-col>
  </v-row>
</template>