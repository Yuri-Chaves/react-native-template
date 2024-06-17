import React from 'react'

import { Box, Icon, IconName, Text, TouchableOpacityBox } from '@components'
import { ThemeColors } from '@theme'

import { AlertButtonsType } from '../AlertTypes'

interface ButtonsProps {
  buttons?: AlertButtonsType
  Close: () => void
}

interface ButtonProps {
  Close: () => void
  color: ThemeColors
  title: string
  leftIcon?: IconName
  rightIcon?: IconName
  onPress?: () => void
}
export function Button({
  Close,
  onPress,
  title,
  leftIcon,
  rightIcon,
  color,
}: ButtonProps) {
  return (
    <TouchableOpacityBox
      onPress={() => {
        if (onPress) {
          onPress()
        }
        Close()
      }}
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      gap="s2"
      paddingHorizontal="s8"
      paddingVertical="s4">
      {leftIcon && <Icon name={leftIcon} color={color} />}
      <Text preset="ButtonUPPERCASE" weight="800" color={color}>
        {title}
      </Text>
      {rightIcon && <Icon name={rightIcon} color={color} />}
    </TouchableOpacityBox>
  )
}

export function AlertButtons({ Close, buttons }: ButtonsProps) {
  function buttonTextColor(
    variant?: 'info' | 'warning' | 'error' | 'success',
  ): ThemeColors {
    if (variant) {
      return `${variant}M`
    }
    return 'androidBlue'
  }
  if (buttons && buttons.length > 1) {
    if (buttons.length === 2) {
      return (
        <Box flexDirection="row-reverse" gap="s8" alignSelf="flex-end">
          {buttons.map(button => (
            <Button
              Close={Close}
              onPress={button.onPress}
              key={button.title}
              {...button}
              color={buttonTextColor(button.variant)}
            />
          ))}
        </Box>
      )
    }
    if (buttons.length === 3) {
      return (
        <Box flexDirection="row-reverse" justifyContent="space-between">
          <Box flexDirection="row-reverse">
            {buttons.slice(0, 2).map(button => (
              <Button
                Close={Close}
                onPress={button.onPress}
                key={button.title}
                {...button}
                color={buttonTextColor(button.variant)}
              />
            ))}
          </Box>
          <Button
            {...buttons[2]}
            Close={Close}
            onPress={buttons[2].onPress}
            color={buttonTextColor(buttons[2].variant)}
          />
        </Box>
      )
    }
  }
  return (
    <TouchableOpacityBox
      alignSelf="flex-end"
      paddingHorizontal="s8"
      flexDirection="row"
      gap="s2"
      alignItems="center"
      justifyContent="center"
      paddingVertical="s4"
      onPress={() => {
        if (buttons && buttons[0].onPress) {
          buttons[0].onPress()
        }
        Close()
      }}>
      {buttons && buttons[0].leftIcon && (
        <Icon
          name={buttons[0].leftIcon}
          size={20}
          color={buttonTextColor(buttons[0].variant)}
        />
      )}
      <Text
        preset="ButtonUPPERCASE"
        weight="800"
        color={buttonTextColor(buttons ? buttons[0].variant : undefined)}>
        {buttons ? buttons[0].title : 'ok'}
      </Text>
      {buttons && buttons[0].rightIcon && (
        <Icon
          name={buttons[0].rightIcon}
          size={20}
          color={buttonTextColor(buttons[0].variant)}
        />
      )}
    </TouchableOpacityBox>
  )
}
