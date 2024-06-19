import { MMKV } from 'react-native-mmkv'

import { Storage } from '../storage'

const mmkv = new MMKV()

export const mmkvStorage: Storage = {
  getItem: key => {
    const item = mmkv.getString(key)
    if (item) {
      return JSON.parse(item)
    }
    return null
  },
  setItem: async (key, value) => {
    await mmkv.set(key, JSON.stringify(value))
  },
  removeItem: async key => {
    await mmkv.delete(key)
  },
}
