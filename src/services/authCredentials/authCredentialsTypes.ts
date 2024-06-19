export type AuthCredentialsType = {
  username: string
}

export interface AuthCredentialsService {
  authCredentials: AuthCredentialsType | null
  isLoading: boolean
  saveCredentials: (ac: AuthCredentialsType) => Promise<void>
  removeCredentials: () => Promise<void>
  startAuthCredentials: () => Promise<void>
}
