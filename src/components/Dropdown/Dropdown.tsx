/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react'
import { TextStyle, ViewStyle } from 'react-native'

import { Dropdown as ElDropdown } from 'react-native-element-dropdown'

import { useAppTheme } from '@hooks'
import { ThemeColors } from '@theme'

import { Box } from '../Box/Box'
import { Icon, IconName } from '../Icon/Icon'
import { $fontSizes, Text, getFontFamily } from '../Text/Text'

import { Item } from './components/Item'

export interface DropdownItemType {
  label: string
  value: string
  leftIcon?: IconName
  rightIcon?: IconName
}

export interface DropdownProps {
  label: string
  data: Array<DropdownItemType>
  selectedValue: DropdownItemType | undefined
  onChange: (item: DropdownItemType) => void
  onError?: boolean
  editable?: boolean
  leftIcon?: IconName
  maxHeight?: number
}

export function Dropdown({
  label,
  data,
  selectedValue,
  onChange,
  editable = true,
  onError = false,
  leftIcon,
  maxHeight,
}: DropdownProps) {
  const [inFocus, setInFocus] = useState<boolean>(false)
  const { spacing, borderRadii, colors } = useAppTheme()
  const fontFamily = getFontFamily('600', false)

  const bg: ThemeColors = editable
    ? inFocus
      ? 'infoL'
      : onError
      ? 'errorL'
      : 'backgroundColor'
    : 'disabledInput'

  const stroke: ThemeColors = inFocus
    ? 'secondary'
    : onError
    ? 'errorD'
    : 'borderColor'

  const $textStyle: TextStyle = {
    fontFamily: fontFamily,
    ...$fontSizes.LabelMedium,
    marginLeft: leftIcon ? 6 : 4,
  }

  const $dropdown: ViewStyle = {
    paddingHorizontal: spacing.s8,
    borderColor: colors[stroke],
    borderWidth: 1,
    borderRadius: borderRadii.br4,
    height: 42,
  }
  const $placeholder: TextStyle = {
    color: colors[stroke],
    marginLeft: leftIcon ? 8 : undefined,
    ...$textStyle,
  }

  const [labelBoxHeight, setLabelBoxHeight] = useState<number>(0)

  const dynamicTop = -(labelBoxHeight / 2 - 1)

  function renderLabel() {
    if (selectedValue) {
      return (
        <Box
          position="absolute"
          alignItems="center"
          justifyContent="center"
          paddingHorizontal="s4"
          overflow="hidden"
          left={leftIcon ? 30 : 8}
          top={dynamicTop}
          onLayout={event =>
            setLabelBoxHeight(event.nativeEvent.layout.height)
          }>
          <Box
            position="absolute"
            width={400}
            height={2}
            backgroundColor={bg}
          />
          <Text preset="BodySmall" color={stroke}>
            {label}
          </Text>
        </Box>
      )
    }
    return null
  }
  return (
    <Box flexDirection="row">
      <Box bg={bg} borderRadius="br4" flex={1}>
        <ElDropdown
          data={data}
          labelField="label"
          valueField="value"
          onChange={onChange}
          value={selectedValue}
          style={$dropdown}
          containerStyle={{ marginVertical: 8 }}
          onFocus={() => setInFocus(true)}
          onBlur={() => setInFocus(false)}
          placeholder={label}
          placeholderStyle={$placeholder}
          maxHeight={maxHeight}
          disable={!editable}
          renderRightIcon={() => (
            <Icon name={inFocus ? 'chevronUp' : 'chevronDown'} color={stroke} />
          )}
          renderLeftIcon={() =>
            leftIcon ? (
              <Icon name={leftIcon} color={stroke} size={20} />
            ) : undefined
          }
          renderItem={(item, selected) => (
            <Item {...item} selected={selected} />
          )}
          selectedTextStyle={[{ color: colors.borderColor }, $textStyle]}
        />
        {renderLabel()}
      </Box>
    </Box>
  )
}
