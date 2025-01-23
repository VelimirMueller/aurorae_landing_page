import { describe, it, expect, beforeEach } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import { useAuthenticationStore } from '../src/stores/authentication.ts'

describe('AuthenticationStore', () => {
  let store: ReturnType<typeof useAuthenticationStore>

  beforeEach(() => {
    setActivePinia(createPinia())
    store = useAuthenticationStore()
  })

  it('should initialize with default values', () => {
    expect(store.isAuthenticated).toBe(false)
    expect(store.user).toStrictEqual({})
  })
})
