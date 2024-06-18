import React, { useState } from 'react'

import { IconName } from '../Icon/Icon'
import { TextInput, TextInputProps } from '../TextInput/TextInput'

export type PasswordInputProps = Omit<
  TextInputProps,
  'rightComponent' | 'leftComponent'
> & {
  eyeOutlined?: boolean
}
export function PasswordInput({
  eyeOutlined = false,
  ...props
}: PasswordInputProps) {
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true)
  const eyeOn: IconName = eyeOutlined ? 'eyeOutline' : 'eye'
  const eyeOff: IconName = eyeOutlined ? 'eyeOffOutline' : 'eyeOff'
  return (
    <TextInput
      testID="password-input"
      {...props}
      secureTextEntry={secureTextEntry}
      leftIcon="formTextboxPassword"
      rightIcon={secureTextEntry ? eyeOff : eyeOn}
      fnOnPressRIcon={() => setSecureTextEntry(prev => !prev)}
    />
  )
}
