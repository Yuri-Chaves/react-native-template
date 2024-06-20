import React, { useState } from 'react'

import {
  Box,
  Button,
  PasswordInput as PasswordInputComponent,
  Text,
} from '@components'
import { useInputsScreen } from '../context/useInputsScreen'

export function PasswordInput() {
  const { value, setValue } = useInputsScreen()
  const [outline, setOutline] = useState<boolean>(false)
  return (
    <Box width="100%" gap="s4">
      <Text>A TextInput component prepared to be used in auth form</Text>
      <PasswordInputComponent
        label="Password Input"
        value={value}
        onChangeText={setValue}
        eyeOutlined={outline}
      />
      <Button
        title="Eye outline"
        preset={outline ? 'primary' : 'outline'}
        onPress={() => setOutline(prev => !prev)}
      />
    </Box>
  )
}
