import { storage } from '../storage'
import { StorageKeys } from '../storage/storageKeys'

import { AuthCredentialsType } from './authCredentialsTypes'

async function set(ac: AuthCredentialsType): Promise<void> {
  await storage.setItem(StorageKeys.AUTH_KEY, ac)
}
async function get(): Promise<AuthCredentialsType | null> {
  const ac = await storage.getItem<AuthCredentialsType>(StorageKeys.AUTH_KEY)
  return ac
}
async function remove(): Promise<void> {
  await storage.removeItem(StorageKeys.AUTH_KEY)
}

export const authCredentialsStorage = { set, get, remove }
