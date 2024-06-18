import React from 'react'

import { Box, DropdownItemType, Icon, Text } from '@components'

interface ItemProps extends DropdownItemType {
  selected: boolean | undefined
}

export function Item({ selected, ...item }: ItemProps) {
  return (
    <Box
      backgroundColor={selected ? 'infoL' : 'backgroundColor'}
      height={32}
      flexDirection="row"
      alignItems="center"
      justifyContent="flex-start"
      paddingHorizontal="s8"
      gap="s8"
      paddingVertical="s4">
      {item.leftIcon && (
        <Icon
          name={item.leftIcon}
          size={16}
          color={selected ? 'infoD' : 'borderColor'}
        />
      )}
      <Box flex={1}>
        <Text preset="LabelMedium" color={selected ? 'infoM' : 'borderColor'}>
          {item.label}
        </Text>
      </Box>
      {item.rightIcon && (
        <Icon
          name={item.rightIcon}
          size={16}
          color={selected ? 'infoD' : 'borderColor'}
        />
      )}
    </Box>
  )
}
