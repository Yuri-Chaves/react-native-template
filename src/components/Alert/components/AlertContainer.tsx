import React from 'react'

import { Box } from '@components'
import { ThemeColors } from '@theme'

interface ContainerProps {
  bg: ThemeColors
  shadowColor: ThemeColors
}

export function AlertContainer({
  children,
  bg,
  shadowColor,
}: React.PropsWithChildren<ContainerProps>) {
  return (
    <Box
      gap="s8"
      padding="s8"
      justifyContent="center"
      alignItems="center"
      backgroundColor={bg}
      width="100%"
      shadowColor={shadowColor}>
      {children}
    </Box>
  )
}
