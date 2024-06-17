import React from 'react'

import { Box, Text } from '@components'
import { ThemeColors } from '@theme'

interface Props {
  title: string
  titleColor: ThemeColors
  borderWidth: number
}
export function AlertTitle({ title, titleColor, borderWidth }: Props) {
  return (
    <Box
      borderBottomWidth={borderWidth}
      paddingLeft={borderWidth > 0 ? 's32' : undefined}
      borderColor={titleColor}>
      <Text preset="TitleLarge" weight="700" color={titleColor}>
        {title}
      </Text>
    </Box>
  )
}
