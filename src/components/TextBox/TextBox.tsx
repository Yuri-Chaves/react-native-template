import React from 'react'
import { ScrollView } from 'react-native'

import { ThemeColors } from '@theme'

import { Box } from '../Box/Box'
import { Icon, IconName } from '../Icon/Icon'
import { Text } from '../Text/Text'

interface TextBoxProps {
  label: string
  value?: string
  leftIcon?: IconName
  leftIconColor?: ThemeColors
  rightIcon?: IconName
  rightIconColor?: ThemeColors
  fnOnPressLIcon?: () => void
  fnOnPressRIcon?: () => void
  helperText?: string
  inRow?: boolean
}
export function TextBox({
  label,
  value,
  leftIcon,
  leftIconColor,
  rightIcon,
  rightIconColor,
  fnOnPressLIcon,
  fnOnPressRIcon,
  helperText,
  inRow,
}: TextBoxProps) {
  return (
    <Box
      flexDirection="row"
      flexGrow={inRow ? 1 : undefined}
      flexShrink={inRow ? 1 : undefined}>
      <Box paddingTop="s4" flex={1}>
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          backgroundColor="disabledInput"
          height={42}
          paddingHorizontal="s8"
          borderRadius="br4"
          borderWidth={1}
          gap="s2"
          borderColor="borderColor">
          {leftIcon && (
            <Icon
              name={leftIcon}
              color={leftIconColor || 'borderColor'}
              onPress={fnOnPressLIcon}
            />
          )}
          <Box flexDirection="row" flex={1} alignItems="center">
            <Box
              top={value ? -18.5 : -2}
              paddingHorizontal="s4"
              flexDirection="row"
              position="absolute"
              alignItems="center"
              overflow="hidden"
              justifyContent="center">
              <Box
                flex={1}
                position="absolute"
                backgroundColor="disabledInput"
                height={2}
                width={400}
              />
              <Text
                preset={value ? 'LabelMedium' : 'LabelLarge'}
                lineHeight={600}
                color="borderColor">
                {label}
              </Text>
            </Box>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Box paddingHorizontal="s4" justifyContent="center">
                <Text preset="LabelLarge" weight="600" color="borderColor">
                  {value}
                </Text>
              </Box>
            </ScrollView>
          </Box>
          {rightIcon && (
            <Icon
              name={rightIcon}
              color={rightIconColor || 'borderColor'}
              onPress={fnOnPressRIcon}
            />
          )}
        </Box>
        {helperText && (
          <Box paddingHorizontal="s12">
            <Text preset="Overline" weight="500" color="borderColor">
              {helperText}
            </Text>
          </Box>
        )}
      </Box>
    </Box>
  )
}
