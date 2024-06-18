import React from 'react'

import { Box, Icon, PressableBox, Text } from '@components'

import { TableHeaderProps } from '../TableTypes'

export function TableHeader({
  width,
  content,
  icon,
  align = 'center',
  onPress,
  ellipsizeMode = 'tail',
}: TableHeaderProps) {
  return (
    <PressableBox
      flexShrink={1}
      flexGrow={1}
      height={22}
      flexDirection="row"
      onPress={onPress}
      width={width}
      justifyContent={
        align === 'left'
          ? 'flex-start'
          : align === 'right'
          ? 'flex-end'
          : 'center'
      }
      backgroundColor="primary">
      <Box
        height={22}
        flexDirection="row"
        alignItems="center"
        position="absolute"
        gap="s8"
        paddingHorizontal="s8">
        {icon && <Icon name={icon} color="white" size={16} />}
        <Text
          preset="LabelMedium"
          weight="600"
          color="white"
          numberOfLines={1}
          ellipsizeMode={ellipsizeMode}>
          {content}
        </Text>
      </Box>
    </PressableBox>
  )
}
