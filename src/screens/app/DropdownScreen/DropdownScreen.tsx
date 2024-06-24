import React, { useState } from 'react'

import {
  Box,
  Button,
  Dropdown,
  DropdownItemType,
  Screen,
  Text,
} from '@components'

export function DropdownScreen() {
  const [selectedValue, setSelectedValue] = useState<DropdownItemType>()
  const [leftIcon, setLeftIcon] = useState<boolean>(false)
  const dropdownDataExample: Array<DropdownItemType> = [
    {
      label: 'Option 1',
      value: 'option1',
    },
    {
      label: 'Option 2',
      value: 'option2',
    },
    {
      label: 'Option 3 w/ left icon',
      value: 'option3',
      leftIcon: 'accountCircle',
    },
    {
      label: 'Option 4 w/ right icon',
      value: 'option4',
      rightIcon: 'eyeOffOutline',
    },
  ]
  return (
    <Screen>
      <Text preset="TitleLarge" textAlign="center">
        Selected Value:{'\n'}
        <Text preset="TitleLarge" weight="700" color="secondary">
          {selectedValue?.label || 'none'}
        </Text>
      </Text>
      <Dropdown
        label="Dropdown example"
        data={dropdownDataExample}
        selectedValue={selectedValue}
        onChange={setSelectedValue}
        leftIcon={leftIcon ? 'alert' : undefined}
      />
      <Box flexDirection="row" gap="s8">
        <Button
          title="leftIcon"
          flex={1}
          preset={leftIcon ? 'primary' : 'outline'}
          onPress={() => setLeftIcon(prev => !prev)}
        />
        <Button
          preset="outline"
          flex={1}
          title="Clear selection"
          onPress={() => setSelectedValue(undefined)}
        />
      </Box>
    </Screen>
  )
}
