import React, { ForwardedRef, useRef, useState } from 'react'
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native'

import { useAppTheme } from '@hooks'
import { ThemeColors } from '@theme'
import { TMasks, TextInputUtils } from '@utils'

import { Box, PressableBox } from '../Box/Box'
import { Icon, IconName } from '../Icon/Icon'
import { $fontSizes, Text, TextProps, getFontFamily } from '../Text/Text'
import { TextBox } from '../TextBox/TextBox'

export type TextInputRef = { focus: () => void }
export interface TextInputProps extends RNTextInputProps {
  label: string
  inputTextProps?: Pick<TextProps, 'preset' | 'weight'> & {
    color?: ThemeColors
  }
  leftIcon?: IconName
  leftIconColor?: ThemeColors
  rightIcon?: IconName
  rightIconColor?: ThemeColors
  fnOnPressLIcon?: () => void
  fnOnPressRIcon?: () => void
  helperText?: string
  errorMessage?: string
  onError?: boolean
  inRow?: boolean
  forwardRef?: ForwardedRef<TextInputRef>
  mask?: TMasks
}

export function TextInput({
  label,
  inputTextProps,
  helperText,
  errorMessage,
  editable = true,
  onError = false,
  inRow = false,
  leftIcon,
  leftIconColor,
  rightIcon,
  rightIconColor,
  fnOnPressLIcon,
  fnOnPressRIcon,
  placeholder,
  forwardRef,
  onChangeText,
  mask,
  ...rNTextInputProps
}: TextInputProps) {
  const { colors } = useAppTheme()
  const InputRef = useRef<RNTextInput>(null)

  const [inFocus, setInFocus] = useState<boolean>(false)

  const fontFamily = getFontFamily(inputTextProps?.weight || '600', false)
  const $TextInputStyle: TextStyle = {
    padding: 0,
    paddingHorizontal: 5,
    flexGrow: 1,
    flexShrink: 1,
    fontFamily: fontFamily,
    ...$fontSizes[inputTextProps?.preset || 'LabelLarge'],
    height: 32,
    color: colors[inputTextProps?.color || 'borderColor'],
  }

  const bg: ThemeColors = inFocus
    ? 'infoL'
    : onError
    ? 'errorL'
    : 'backgroundColor'

  const stroke: ThemeColors = inFocus
    ? 'secondary'
    : onError
    ? 'errorD'
    : 'borderColor'

  function focus() {
    if (editable) {
      setInFocus(true)
      InputRef.current?.focus()
    }
  }

  if (forwardRef) {
    const PressableRef = forwardRef as React.MutableRefObject<{
      focus: () => void
    } | null>
    PressableRef.current = {
      focus,
    }
  }

  function handleChangeText(value: string) {
    const maskedText = TextInputUtils.onApplyMask(value, mask)

    onChangeText && onChangeText(maskedText)
  }

  if (!editable) {
    return (
      <TextBox
        label={label}
        value={rNTextInputProps.value}
        inRow={inRow}
        fnOnPressLIcon={fnOnPressLIcon}
        fnOnPressRIcon={fnOnPressRIcon}
        helperText={helperText}
        leftIcon={leftIcon}
        leftIconColor={leftIconColor}
        rightIcon={rightIcon}
        rightIconColor={rightIconColor}
      />
    )
  }

  return (
    <Box
      flexDirection="row"
      flexGrow={inRow ? 1 : undefined}
      flexShrink={inRow ? 1 : undefined}>
      <PressableBox onPress={focus} paddingTop="s4" flex={1}>
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          backgroundColor={bg}
          height={42}
          paddingHorizontal="s8"
          borderRadius="br4"
          borderWidth={1}
          gap="s2"
          borderColor={stroke}>
          {leftIcon && (
            <Icon
              name={leftIcon}
              color={leftIconColor || stroke}
              onPress={fnOnPressLIcon}
            />
          )}
          <Box flexDirection="row" flex={1} alignItems="center">
            <Box
              top={inFocus || rNTextInputProps.value ? -15.0 : 5}
              paddingHorizontal="s4"
              flexDirection="row"
              position="absolute"
              alignItems="center"
              overflow="hidden"
              justifyContent="center">
              <Box
                flex={1}
                position="absolute"
                backgroundColor={bg}
                height={2}
                width={400}
              />
              <Text
                preset={
                  inFocus || rNTextInputProps.value
                    ? 'LabelMedium'
                    : 'LabelLarge'
                }
                lineHeight={600}
                color={stroke}>
                {label}
              </Text>
            </Box>
            <RNTextInput
              ref={InputRef}
              style={$TextInputStyle}
              onFocus={e => {
                setInFocus(true)
                if (rNTextInputProps.onFocus) {
                  rNTextInputProps.onFocus(e)
                }
              }}
              onBlur={e => {
                setInFocus(false)
                if (rNTextInputProps.onBlur) {
                  rNTextInputProps.onBlur(e)
                }
              }}
              placeholderTextColor={colors.placeholder}
              placeholder={inFocus ? placeholder : ''}
              {...rNTextInputProps}
              onChangeText={handleChangeText}
            />
          </Box>
          {rightIcon && (
            <Icon
              name={rightIcon}
              color={rightIconColor || stroke}
              onPress={fnOnPressRIcon}
            />
          )}
        </Box>
        {(helperText || (errorMessage && onError)) && (
          <Box paddingHorizontal="s12">
            <Text
              preset="Overline"
              weight="500"
              color={onError ? 'errorD' : 'borderColor'}>
              {onError ? errorMessage : helperText}
            </Text>
          </Box>
        )}
      </PressableBox>
    </Box>
  )
}
