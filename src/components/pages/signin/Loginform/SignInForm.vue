<template>
  <h2 class="pa-4 text-h4 text-center font-weight-bold">
    Login
  </h2>
  <form 
    class="w-100"
    @submit.prevent>
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
    <div class="d-flex h-100 align-end">
      <v-btn
        color="primary"
        size="x-large"
        class="w-100 mt-auto"
        @click="submit">
        login
      </v-btn>
    </div>
  </form>
</template>

<script lang="ts" setup>
const emailAddress: Ref<string> = ref('')
const password: Ref<string> = ref('')
const isLoading: Ref<boolean> = ref(false)

const isFormValid: ComputedRef<string> = computed(() => {
  return emailAddress.value && password.value
})

const resetForm = (): void => {
  emailAddress.value = ''
  password.value = ''
}

type LoginData = {
  emailAddress: string
  password: string
}

const payload: LoginData = {
  emailAddress: emailAddress.value,
  password: password.value
}

const loginResponse: Ref<object> = ref({})
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
        .then(response => response.json())
        .then(data => {
          loginResponse.value = data
          resetForm()
        })
        .catch(error => {
          console.error('error:', error)
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