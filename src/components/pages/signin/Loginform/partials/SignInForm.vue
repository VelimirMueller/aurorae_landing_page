<template>
  <h2 class="pa-4 mb-4 text-h4 text-left font-weight-bold border-b-lg bg-white border-t-lg border-primary">
    Login
  </h2>
  <v-form 
    ref="form"
    class="w-100 bg-white pa-4"
    @submit.prevent>
    <v-text-field
      v-model="emailAddress"
      type="email"
      class="rounded-lg"
      :rules="emailRules"
      hint="example@emailaddress.com"
      label="e-mail*"
      required />
    <v-text-field
      v-model="password"
      :counter="25"
      label="password"
      :rules="passwordRules"
      hint="Minimum 6 characters"
      type="password*"
      required />
    <div class="d-flex justify-start flex-column">
      <v-checkbox 
        label="Remember me"
        value="remember" />
      <v-checkbox 
        label="Accept AGB" 
        value="agb"
        checked />
    </div>
    <div class="d-flex h-md-100 align-end flex-column">
      <v-btn
        color="primary"
        size="x-large"
        variant="outlined"
        class="w-100 mt-auto"
        @click="login">
        login
      </v-btn>
      <v-btn
        v-if="form"
        color="grey"
        variant="outlined"
        size="x-large"
        class="w-100 mt-4 text-textDark"
        @click="form?.reset()">
        reset form
      </v-btn>
    </div>
  </v-form>
</template>

<script lang="ts" setup>
import { emailRules, passwordRules } from '@/utils/formRules'
import type { VuetifyFormElement } from '@/composables/useForms'
import { submit, validateFormSubmit } from '@/composables/useForms'

type SignInFormFields = {
    userName: Ref<string>
    password: Ref<string>
  }
const emailAddress: Ref<string> = ref('')
const password: Ref<string> = ref('')

const payload = ref({
  emailAddress,
  password
}) as unknown as Ref<SignInFormFields> 

const form: Ref<VuetifyFormElement|undefined> = ref()
const isLoading: Ref<boolean> = ref(false)

const submitLogin = () => submit(isLoading, payload, '/api/v1/login', '/public')
const login = () => { validateFormSubmit(form, submitLogin) }
</script>
