import { useAuthCredentialsStore } from './authCredentialsStore'
import { AuthCredentialsService } from './authCredentialsTypes'

export function useAuthCredentials(): Pick<
  AuthCredentialsService,
  'authCredentials' | 'isLoading'
> {
  const { authCredentials, isLoading } = useAuthCredentialsStore(state => state)
  return {
    authCredentials,
    isLoading,
  }
}
export function useAuthCredentialsManager(): Pick<
  AuthCredentialsService,
  'removeCredentials' | 'saveCredentials' | 'startAuthCredentials'
> {
  const { removeCredentials, saveCredentials, startAuthCredentials } =
    useAuthCredentialsStore(state => state)
  return {
    removeCredentials,
    saveCredentials,
    startAuthCredentials,
  }
}
