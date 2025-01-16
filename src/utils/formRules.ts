export const nameRules = [
  (v: string) => !!v || 'Name is required',
  (v: string) => (v && v.length <= 25) || 'Name must be less than 25 characters'
]
  
export const passwordRules = [
  (v: string): boolean|string => !!v || 'Password is required',
  (v: string): boolean|string => (v && v.length >= 6) || 'Password must be at least 6 characters'
]
  
export const emailRules = [
(value: string): boolean|string => {
  if (value) return true

  return 'E-mail is required.'
},
(value: string): boolean|string => {
  if (/.+@.+\..+/.test(value)) return true

  return 'E-mail must be valid.'
},
]