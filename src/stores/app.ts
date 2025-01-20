// Utilities
import { defineStore } from 'pinia'

type Notification = { text: string, type: NotificationType }
type NotificationType = 'success' | 'error' | 'warning' | 'info'

export const useAppStore = defineStore('app', {
  state: () => ({
    notifications: [] as Notification[]
  }),

  actions: {
    addNotification(notification: Notification) {
      this.notifications.push(notification)
      this.removeNotification()
    },

    removeNotification() {
      setTimeout(() => {
        this.notifications.pop()
      }, 15000)
    }
  }
})

