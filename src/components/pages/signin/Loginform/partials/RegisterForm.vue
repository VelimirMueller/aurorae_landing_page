<template>
  <h2 class="pa-4 text-left mb-4 bg-white text-h4 font-weight-bold border-b-lg border-t-lg border-primary">
    Register
  </h2>
  <v-form 
    ref="form"
    class="bg-white pa-4"
    fast-fail 
    @submit.prevent>
    <v-text-field
      v-model="userName"
      autocomplete="username"
      :rules="nameRules"
      hint="only letters"
      :counter="25"
      label="username*"
      required />
    <v-text-field
      v-model="emailAddress"
      autocomplete="email"
      :rules="emailRules"
      hint="example@emailaddress.com"
      label="e-mail*"
      required />
    <v-text-field
      v-model="password"
      :counter="25"
      autocomplete="password"
      label="password*"
      :rules="passwordRules"
      hint="Minimum 6 characters"
      type="password"
      required />
    <v-text-field
      v-model="passwordRepeat"
      autocomplete="password"
      :counter="25"
      type="password"
      :rules="passwordRules"
      hint="Minimum 6 characters"
      label="repeat password*"
      required />
    <v-btn 
      color="primary"
      size="x-large"
      variant="outlined"
      class="w-100"
      @click="register">
      register
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
  </v-form>
</template>

<script lang="ts" setup>
import { emailRules, passwordRules, nameRules } from '@/utils/formRules'
import { validateFormSubmit, submit } from '@/composables/useForms'
import type { VuetifyFormElement } from '@/composables/useForms'

type RegisterFormFields = {
    userName: Ref<string>
    emailAddress: Ref<string>
    password: Ref<string>
    passwordRepeat: Ref<string>
  }
const userName: Ref<string> = ref('')
const emailAddress: Ref<string> = ref('')
const password: Ref<string> = ref('')
const passwordRepeat: Ref<string> = ref('')
const payload = ref({
  userName,
  emailAddress,
  password,
  passwordRepeat
}) as unknown as Ref<RegisterFormFields> 


const form: Ref<VuetifyFormElement|undefined> = ref()
const isLoading: Ref<boolean> = ref(false)  
const submitRegister = () => submit(isLoading, payload, '/api/v1/register', '/public')
const register = () => { validateFormSubmit(form, submitRegister) }
</script>