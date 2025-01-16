export interface VuetifyFormElement extends HTMLFormElement {
  validate: () => Promise<{ valid: boolean }>
  reset: () => never
}

export const validateFormSubmit = async (form: Ref<VuetifyFormElement|undefined>, callback: () => any): Promise<void> => {
  if (!form.value) return alert('Form is not available')
  
  try {
    const {valid} = await form.value.validate()
    console.log(valid);
    
    if (!valid) { 
      console.error('Form fields are not valid')
     }
    else {
      callback()
    }
  } catch (err) {
    alert('Could not validate form due to error: ' + err)
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
        alert(res.message)
        console.error(`Error with response from /api/v1/register POST: status: ${response.status} statusText: ${response.statusText}`)
      }
    })
    .finally(() => {
      isLoading.value = false
    })
  } catch (err) {
    console.error('error:', err)
  }
}
