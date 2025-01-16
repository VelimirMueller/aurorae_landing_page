<template>
  <h2 class="pa-4 text-h4 text-center font-weight-bold">
    Login
  </h2>
  <form 
    class="w-100"
    @submit.prevent>
    <v-text-field
      v-model="emailAddress"
      autocomplete="email"
      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
      hint="example@emailaddress.com"
      label="e-mail*"
      required />
    <v-text-field
      v-model="password"
      :counter="25"
      autocomplete="password"
      label="password"
      pattern=".{6,}"
      hint="Minimum 6 characters"
      type="password*"
      required />
    <div class="d-flex h-md-100 align-end">
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

const submit = (): void => {
    if (isFormValid.value) {
      isLoading.value = true

      try {
        fetch('/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          emailAddress: emailAddress.value,
          password: password.value
         })
      })
        .then(response => {
          if (response.ok) {
            resetForm()
            window.location.href = '/public'
          } else {
            console.error(`Error with response from /api/v1/login POST: status: ${response.status} statusText: ${response.statusText}`)
          }
        })
        .finally(() => {
          isLoading.value = false
        })
      } catch (err) {
        console.error('error:', err)
      }
    } else {
      console.error('error: login form - not all fields are filled in')
    }
  }
</script>