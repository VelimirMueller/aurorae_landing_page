import { useAppStore } from "@/stores/app"

const appStore = useAppStore()
const { addNotification } = appStore

export interface VuetifyFormElement extends HTMLFormElement {
  validate: () => Promise<{ valid: boolean }>
  reset: () => never
}

export const validateFormSubmit = async (form: Ref<VuetifyFormElement|undefined>, callback: () => any): Promise<void> => {
  if (!form.value) return alert('Form is not available')
  
  try {
    const {valid} = await form.value.validate()
    
    if (!valid) { 
      console.error('Form fields are not valid')
      addNotification({ text: 'Please fill in all required fields correctly', type: 'error' })
     }
    else {
      addNotification({ text: 'Form is correct.', type: 'success' })
      callback()
    }
  } catch (err) {
    console.error('Error validating form due error: ', err)
    addNotification({ text: `Could not validate form, check console for more info.` , type: 'error' })
  }
}

export const submit = (isLoading: Ref<boolean>, payload: Ref<object>, endpoint: string, redirectRoute: string): void => {
  isLoading.value = true
  try {
    fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload.value)
  })
    .then(async (response) => {
      if (response?.ok) {
        window.location.href = redirectRoute
      } else {
        const res = await response.json()
        addNotification({ text: `Error: ${res.message}`, type: 'error' })
        console.error(`Error with response from ${endpoint} (method: POST) - status: ${response.status} statusText: ${response.statusText}`)
      }
    })
    .finally(() => {
      isLoading.value = false
    })
  } catch (err) {
    addNotification({ text: `Error submitting form, check console for more info.`, type: 'error' })
    console.error('error:', err)
  }
}
