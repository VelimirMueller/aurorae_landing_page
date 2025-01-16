<template>
  <h2 class="pa-4 text-h4 font-weight-bold">
    Register
  </h2>
  <form @submit.prevent>
    <v-text-field
      v-model="userName"
      :counter="25"
      type="name"
      label="user name"
      required />
    <v-text-field
      v-model="emailAddress"
      type="name"
      label="e-mail"
      required />
    <v-text-field
      v-model="password"
      :counter="25"
      label="password"
      type="password"
      required />
    <v-text-field
      v-model="passwordRepeat"
      :counter="25"
      type="password"
      label="repeat password"
      required />
    <v-btn 
      color="primary"
      size="x-large"
      class="w-100"
      @click="submit">
      register
    </v-btn>
  </form>
</template>

<script lang="ts" setup>
  const userName: Ref<string> = ref('')
  const emailAddress: Ref<string> = ref('')
  const password: Ref<string> = ref('')
  const passwordRepeat: Ref<string> = ref('')

  const registerResponse: Ref<string>  = ref('')
  const isLoading: Ref<boolean> = ref(false)

  const isFormValid: ComputedRef<string> = computed(() => {
    return userName.value && emailAddress.value && password.value && passwordRepeat.value
  })

  const resetForm = (): void => {
    userName.value = ''
    emailAddress.value = ''
    password.value = ''
    passwordRepeat.value = ''
  }

  type RegisterData = {
    userName: string,
    emailAddress: string,
    password: string,
    passwordRepeat: string
  }

  const payload: RegisterData = {
    userName: userName.value,
    emailAddress: emailAddress.value,
    password: password.value,
    passwordRepeat: passwordRepeat.value
  }

  const submit = (): void => {
    if (isFormValid.value) {
      isLoading.value = true

      try {
        fetch('/api/v1/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ payload })
      })
        .then(response => {
          if (response.ok) {
            return response.json()
          } else {
            console.error(`Error with response from /api/v1/register POST: status: ${response.status} statusText: ${response.statusText}`)
          }
        })
        .then(data => {
          registerResponse.value = data
          resetForm()
          return data
        })
        .catch(error => {
          console.error('Caught error with /api/v1/register POST: ', error)
        })
        .finally(() => {
          isLoading.value = false
        })
      } catch (err) {
        console.error('error:', err)
      }
    } else {
      console.error('error: register form - not all fields are filled')
    }
  }
</script>