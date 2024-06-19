import { create } from 'zustand'
import { authCredentialsStorage } from './authCredentialStorage'
import {
  AuthCredentialsService,
  AuthCredentialsType,
} from './authCredentialsTypes'

export const useAuthCredentialsStore = create<AuthCredentialsService>(set => ({
  authCredentials: null,
  isLoading: true,
  saveCredentials: async (ac: AuthCredentialsType) => {
    await authCredentialsStorage.set(ac)
    set({ authCredentials: ac })
  },
  removeCredentials: async () => {
    await authCredentialsStorage.remove()
    set({ authCredentials: null })
  },
  startAuthCredentials: async () => {
    try {
      const ac = await authCredentialsStorage.get()
      if (ac) {
        set({ authCredentials: ac })
      }
    } catch (error) {
      console.log('authCredentialsStore', error)
    } finally {
      set({ isLoading: false })
    }
  },
}))
