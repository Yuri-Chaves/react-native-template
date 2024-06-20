import React from 'react'

import { Box, Text, TextBox as TextBoxComponent } from '@components'
import { useInputsScreen } from '../context/useInputsScreen'

export function TextBox() {
  const { value } = useInputsScreen()
  return (
    <Box width="100%" gap="s4">
      <Text>
        Can be called directly or passing <Text color="primary">false</Text> to
        editable prop of <Text color="androidBlue">TextInput</Text>
      </Text>
      <TextBoxComponent label="Text Box" value={value} />
    </Box>
  )
}
