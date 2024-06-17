import React from 'react'

import { ThemeColors } from '@theme'

import { ActivityIndicator } from '../ActivityIndicator/ActivityIndicator'
import { Box, TouchableOpacityBox, TouchableOpacityBoxProps } from '../Box/Box'
import { Icon, IconName } from '../Icon/Icon'
import { Text } from '../Text/Text'

import { buttonPresets } from './buttonPresets'

export type ButtonPreset = 'primary' | 'outline'

export interface ButtonProps extends TouchableOpacityBoxProps {
  title: string
  loading?: boolean
  preset?: ButtonPreset
  leftIcon?: IconName
  leftIconColor?: ThemeColors
  rightIcon?: IconName
  rightIconColor?: ThemeColors
}

export function Button({
  title,
  loading,
  preset = 'primary',
  disabled,
  leftIcon,
  leftIconColor,
  rightIcon,
  rightIconColor,
  ...touchableOpacityProps
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default']
  const contentColor = loading
    ? preset === 'primary'
      ? buttonPreset.container.backgroundColor
      : 'transparent'
    : buttonPreset.content
  return (
    <TouchableOpacityBox
      testID="button"
      disabled={disabled || loading}
      paddingHorizontal="s20"
      alignItems="center"
      justifyContent="center"
      {...buttonPreset.container}
      {...touchableOpacityProps}
      height={38}
      borderRadius="br4"
      activeOpacity={0.3}>
      <Box
        flexDirection="row"
        gap="s8"
        alignItems="center"
        justifyContent="center">
        {leftIcon && (
          <Icon
            name={leftIcon}
            size={24}
            color={
              !loading && !disabled
                ? leftIconColor || contentColor
                : contentColor
            }
          />
        )}
        <Text preset="LabelMedium" weight="600" color={contentColor}>
          {title}
        </Text>
        {rightIcon && (
          <Icon
            name={rightIcon}
            size={24}
            color={
              !loading && !disabled
                ? rightIconColor || contentColor
                : contentColor
            }
          />
        )}
        {loading && (
          <Box position="absolute">
            <ActivityIndicator
              testID="button-activity-indicator"
              color={buttonPreset.content}
            />
          </Box>
        )}
      </Box>
    </TouchableOpacityBox>
  )
}
