import React from 'react'

import { Screen } from '@components'

import { PasswordInput, TextBox, TextInput } from './components'
import { InputsScreenProvider } from './context/InputsScreenProvider'

export function InputsScreen() {
  return (
    <Screen>
      <InputsScreenProvider>
        <TextInput />
        <PasswordInput />
        <TextBox />
      </InputsScreenProvider>
    </Screen>
  )
}
