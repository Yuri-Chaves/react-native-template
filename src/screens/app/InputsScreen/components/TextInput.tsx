import { Button, Text, TextInput as TextInputComponent } from '@components'
import React, { useState } from 'react'

import { Box } from '@components'
import { useInputsScreen } from '../context/useInputsScreen'

export function TextInput() {
  const { value, setValue } = useInputsScreen()
  const [wIcon, setWIcon] = useState<
    ['left'] | ['left', 'right'] | ['right'] | []
  >([])
  const [wMessage, setWMessage] = useState<
    ['helper'] | ['helper', 'error'] | ['error'] | []
  >([])

  function handleIcon(side: 'left' | 'right') {
    const alreadyChecked = wIcon.some(s => s === side)
    if (alreadyChecked) {
      const newWIcon = wIcon.filter(s => s !== side)
      setWIcon(newWIcon as [] | ['left'] | ['right'] | ['left', 'right'])
    } else {
      const newWIcon = [...wIcon, side]
      setWIcon(newWIcon as [] | ['left'] | ['right'] | ['left', 'right'])
    }
  }

  function handleMEssage(side: 'helper' | 'error') {
    const alreadySet = wMessage.some(s => s === side)
    if (alreadySet) {
      const newWIcon = wMessage.filter(s => s !== side)
      setWMessage(newWIcon as ['helper'] | ['helper', 'error'] | ['error'] | [])
    } else {
      const newWIcon = [...wMessage, side]
      setWMessage(newWIcon as ['helper'] | ['helper', 'error'] | ['error'] | [])
    }
  }

  return (
    <Box width="100%" gap="s4">
      <Text>Default TextInput Component</Text>
      <TextInputComponent
        label="Text Input"
        value={value}
        onChangeText={setValue}
        leftIcon={wIcon.some(v => v === 'left') ? 'alert' : undefined}
        rightIcon={wIcon.some(v => v === 'right') ? 'alert' : undefined}
        helperText={
          wMessage.some(v => v === 'helper') ? 'Helper Text' : undefined
        }
        errorMessage="Error Message"
        onError={wMessage.some(v => v === 'error')}
      />
      <Box flexDirection="row" gap="s12" alignSelf="center">
        <Button
          title="Left icon"
          preset={wIcon.some(v => v === 'left') ? 'primary' : 'outline'}
          onPress={() => handleIcon('left')}
        />
        <Button
          title="Right icon"
          preset={wIcon.some(v => v === 'right') ? 'primary' : 'outline'}
          onPress={() => handleIcon('right')}
        />
      </Box>
      <Box flexDirection="row" gap="s12" alignSelf="center">
        <Button
          title="Helper message"
          preset={wMessage.some(v => v === 'helper') ? 'primary' : 'outline'}
          onPress={() => handleMEssage('helper')}
        />
        <Button
          title="Error message"
          preset={wMessage.some(v => v === 'error') ? 'primary' : 'outline'}
          onPress={() => handleMEssage('error')}
        />
      </Box>
    </Box>
  )
}
