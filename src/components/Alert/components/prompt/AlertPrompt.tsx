import React, { useState } from 'react'

import { Box, Icon, Text, TouchableOpacityBox } from '@components'
import { AlertUtils } from '@utils'
import { AlertButtons, AlertContainer, AlertTitle } from '..'
import { PromptProps } from '../../AlertTypes'
import { TextInput } from './TextInput'

interface Props extends PromptProps {
  Close: () => void
}

export function AlertPrompt({
  title,
  inputs,
  message,
  callbackOrButtons,
  options,
  type = 'plain-text',
  Close,
}: Props) {
  const { bg, icon, iconColor, shadowColor, textColor, titleColor } =
    AlertUtils.getAlertStyle(options?.theme || 'system', options?.variant)

  const [inputValues, setInputValues] = useState<Record<string, string>>({
    '0': inputs[0].value,
    '1': inputs[1]?.value || '',
  })

  function handleChangeText(index: number, value: string) {
    setInputValues(prev => ({
      ...prev,
      [index]: value,
    }))
    inputs[index].onChangeText(value)
  }

  function handleCallBack() {
    if (!Array.isArray(callbackOrButtons)) {
      if (callbackOrButtons) {
        callbackOrButtons(inputValues[0], inputValues[1])
      }
    }
  }

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
            <AlertTitle borderWidth={1} title={title} titleColor={titleColor} />
          )}
          {message && (
            <Box paddingLeft="s16">
              <Text color={textColor}>{message}</Text>
            </Box>
          )}
          {type === 'login-password' &&
            inputs.map((input, index) => (
              <TextInput
                key={index}
                {...input}
                value={inputValues[index]}
                onChangeText={text => handleChangeText(index, text)}
                type={type}
                index={index}
                theme={options?.theme || 'system'}
              />
            ))}
          {type !== 'login-password' && (
            <TextInput
              {...inputs[0]}
              value={inputValues[0]}
              onChangeText={text => handleChangeText(0, text)}
              type={type}
              index={0}
              theme={options?.theme || 'system'}
            />
          )}
        </Box>
      </Box>
      {!Array.isArray(callbackOrButtons) && (
        <TouchableOpacityBox
          alignSelf="flex-end"
          paddingHorizontal="s8"
          flexDirection="row"
          gap="s2"
          alignItems="center"
          justifyContent="center"
          paddingVertical="s4"
          onPress={() => {
            handleCallBack()
            Close()
          }}>
          <Text
            preset="ButtonUPPERCASE"
            weight="800"
            color={options?.variant ? `${options.variant}M` : 'androidBlue'}>
            ok
          </Text>
        </TouchableOpacityBox>
      )}
      {Array.isArray(callbackOrButtons) && (
        <AlertButtons Close={Close} buttons={callbackOrButtons} />
      )}
    </AlertContainer>
  )
}
