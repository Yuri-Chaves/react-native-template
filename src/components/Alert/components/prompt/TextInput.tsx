import { Box, Icon, PressableBox } from '@components'
import { useAppTheme } from '@hooks'
import { AlertUtils } from '@utils'
import React, { useRef, useState } from 'react'
import { TextInput as RNTextInput, TextStyle } from 'react-native'
import { PromptInput } from '../../AlertTypes'

interface Props extends PromptInput {
  type: 'plain-text' | 'secure-text' | 'login-password'
  index: number
  theme: 'system' | 'light' | 'dark' | 'colored'
}
export function TextInput({
  value,
  onChangeText,
  type,
  index,
  theme,
  defaultValue,
  iconType,
  keyboardType,
  placeholder,
}: Props) {
  const { colors } = useAppTheme()
  const InputRef = useRef<RNTextInput>(null)

  const { bg, borderColor } = AlertUtils.getPromptStyle(theme)
  const [inFocus, setInFocus] = useState<boolean>(false)
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(
    type === 'secure-text'
      ? true
      : type === 'login-password' && index === 1
      ? true
      : false,
  )

  const $TextInput: TextStyle = {
    flex: 1,
    height: 32,
    padding: 0,
    paddingHorizontal: 4,
  }

  return (
    <Box flexDirection="row">
      <PressableBox
        flex={1}
        onPress={() => {
          InputRef.current?.focus()
          setInFocus(true)
        }}
        backgroundColor={bg}
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        height={32}
        paddingHorizontal="s4"
        borderRadius="br4"
        borderColor={inFocus ? 'androidBlue' : borderColor}
        borderWidth={1}>
        <Icon
          name={AlertUtils.leftIcon(type, index, iconType === 'outlined')}
          color={inFocus ? 'androidBlue' : borderColor}
        />
        <RNTextInput
          ref={InputRef}
          style={$TextInput}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          defaultValue={defaultValue}
          keyboardType={keyboardType}
          onFocus={() => {
            setInFocus(true)
          }}
          onBlur={() => setInFocus(false)}
          placeholderTextColor={colors.placeholder}
          secureTextEntry={secureTextEntry}
        />
        {((type === 'login-password' && index === 1) ||
          type === 'secure-text') && (
          <Icon
            name={AlertUtils.rightIcon(
              iconType === 'outlined',
              secureTextEntry,
            )}
            color={borderColor}
            onPress={() => setSecureTextEntry(prev => !prev)}
          />
        )}
      </PressableBox>
    </Box>
  )
}
