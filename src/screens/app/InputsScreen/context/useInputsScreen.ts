import { useContext } from 'react'

import { InputsScreenContext } from './InputsScreenProvider'

export function useInputsScreen() {
  const context = useContext(InputsScreenContext)
  if (!context) {
    throw new Error('useInputsScreen must be used within a InputsScreenProvider')
  }
  return context
}
