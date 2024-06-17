import React from 'react'

import { Box, Icon, Text } from '@components'
import { AlertUtils } from '@utils'

import { AlertProps } from '../AlertTypes'

import { AlertButtons } from './AlertButtons'
import { AlertContainer } from './AlertContainer'
import { AlertTitle } from './AlertTitle'

interface Props extends AlertProps {
  Close: () => void
}
export function AlertAlert({ title, message, buttons, options, Close }: Props) {
  const { bg, icon, iconColor, shadowColor, textColor, titleColor } =
    AlertUtils.getAlertStyle(options?.theme || 'system', options?.variant)
  return (
    <AlertContainer bg={bg} shadowColor={shadowColor}>
      <Box
        position="absolute"
        top={-16}
        bg={bg}
        width={32}
        borderRadius="br16"
        alignItems="center"
        justifyContent="center"
        height={32}>
        <Icon name={icon} color={iconColor} size={28} />
      </Box>
      <Box
        flexDirection="row"
        gap="s8"
        paddingTop="s8"
        alignItems="center"
        justifyContent="center">
        <Box flex={1} gap="s8">
          {title && (
            <AlertTitle
              borderWidth={message ? 1 : 0}
              title={title}
              titleColor={titleColor}
            />
          )}
          {message && (
            <Box paddingLeft="s16">
              <Text color={textColor}>{message}</Text>
            </Box>
          )}
        </Box>
      </Box>
      <AlertButtons Close={Close} buttons={buttons} />
    </AlertContainer>
  )
}
