<template>
  <BackgroundLogo />
  <section class="bg-white text-center pa-md-8 dots py-8">
    <h1 class="text-h2 text-md-h1 font-weight-bold text-primary">
      SIGNIN
    </h1>

    <v-row class="mt-12 position-relative ga-2 ga-md-8 d-flex justify-center pa-md-12">
      <v-col 
        class="border-md border-primary rounded-lg bg-white pa-4"
        cols="10" 
        sm="10"
        md="5"
        lg="5">
        <h2 class="pa-2 text-h4 font-weight-bold">
          Register
        </h2>
        <div>
          <form @submit.prevent>
            <v-text-field
              v-model="userName"
              :counter="10"
              type="name"
              label="user name"
              required />
            <v-text-field
              v-model="emailAddress"
              :counter="10"
              type="name"
              label="e-mail"
              required />
            <v-text-field
              v-model="password"
              :counter="10"
              label="password"
              type="password"
              required />
            <v-text-field
              v-model="passwordRepeat"
              :counter="10"
              type="password"
              label="repeat password"
              required />
            <v-btn 
              color="primary"
              size="x-large"
              class="w-100"
              @click="register">
              register
            </v-btn>
          </form>
        </div>
      </v-col>
        
      <v-col 
        cols="10" 
        sm="10"
        md="5"
        lg="3"
        class="border-md border-primary rounded-lg bg-white pa-4">
        <h2 class="pa-2 text-h4 font-weight-bold">
          Login
        </h2>
        <form @submit.prevent>
          <v-text-field
            v-model="emailAddress"
            :counter="10"
            label="e-mail"
            type="email"
            required />
          <v-text-field
            v-model="password"
            :counter="10"
            label="password"
            type="password"
            required />
          <v-btn
            color="primary"
            size="x-large"
            class="w-100"
            @click="login">
            login
          </v-btn>
        </form>
      </v-col>
    </v-row>
  </section>
</template>

<script lang="ts" setup>
const userName: Ref<string> = ref('')
const emailAddress: Ref<string> = ref('')
const password: Ref<string> = ref('')
const passwordRepeat: Ref<string> = ref('')

const login = () => {
  if (emailAddress.value && password.value) {
    console.log(emailAddress.value)
    console.log(password.value)
    emailAddress.value = ''
    password.value = ''
  } else {
    console.error('error: login form not all fields filled')
  }
}

const register = () => {
  if (userName.value && emailAddress.value && password.value && passwordRepeat.value) {
    console.log(userName.value)
    console.log(emailAddress.value)
    console.log(password.value)
    console.log(passwordRepeat.value)
  } else {
    console.error('error: register form not all fields filled')
  }
}
</script>