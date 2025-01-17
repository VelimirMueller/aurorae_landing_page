import { defineStore } from 'pinia'

type User = { id: number, name: string, email: string }
export const useAuthenticationStore = defineStore('authentication', {
  state: () => ({
    isAuthenticated: false as boolean,
    user: {} as User
  }),

  getters: {
    getIsAuthenticated: (state) => state.isAuthenticated,
    getUser: (state) => state.user
  }
})