<template>
  <h2 class="pa-4 text-h4 text-center font-weight-bold bg-primary text-white mb-4">
    Login
  </h2>
  <v-form 
    ref="form"
    class="w-100"
    @submit.prevent>
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
      label="password"
      :rules="passwordRules"
      hint="Minimum 6 characters"
      type="password*"
      required />
    <div class="d-flex h-md-100 align-end">
      <v-btn
        color="primary"
        size="x-large"
        class="w-100 mt-auto"
        @click="login">
        login
      </v-btn>
    </div>
  </v-form>
</template>

<script lang="ts" setup>
  import { emailRules, passwordRules } from '../../../../../utils/formRules'
  import { validateFormSubmit, submit } from '@/composables/useForms'
  import type { VuetifyFormElement } from '@/composables/useForms'

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