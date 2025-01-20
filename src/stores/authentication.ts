import { defineStore } from 'pinia'

type User = { id: number, name: string, email: string }
export const useAuthenticationStore = defineStore('authentication', {
  state: () => ({
    isAuthenticated: false as boolean,
    user: {} as User
  }),
  actions: {
    setIsAuthenticated(value: string = 'false'): void {
      sessionStorage.setItem('isAuthenticated', value)
    }
  }
})
