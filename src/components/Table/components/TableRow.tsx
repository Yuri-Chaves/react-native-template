import React from 'react'

import { Box, BoxProps, Icon, PressableBox, Text } from '@components'

import { TableRowProps } from '../TableTypes'

export function TableRow({
  lineHeight = 'medium',
  cellEllipsizeMode = 'tail',
  isSelected = false,
  BgColor = 'gray5',
  SelectedBg = 'primary',
  TextColor = 'gray1',
  SelectedTextColor = 'white',
  ...props
}: TableRowProps) {
  const cellHeight: number =
    lineHeight === 'large' ? 38 : lineHeight === 'medium' ? 30 : 22
  const iconSize: number =
    lineHeight === 'large' ? 20 : lineHeight === 'medium' ? 16 : 14

  const cellProps: BoxProps = {
    marginTop: 's2',
    paddingHorizontal: 's8',
    flexDirection: 'row',
    gap: 's8',
    alignItems: 'center',
    height: cellHeight,
  }
  return (
    <Box backgroundColor={props.dividerColor} gap="s2" flexDirection="row">
      {props.canRemoveData && (
        <Box
          {...cellProps}
          width={cellHeight}
          bg={isSelected ? 'errorM' : 'errorL'}
          justifyContent="center">
          <Icon
            name="delete"
            color={isSelected ? 'white' : 'errorD'}
            size={iconSize}
            onPress={props.removeFn}
          />
        </Box>
      )}
      {props.cells.map((cell, index) => (
        <PressableBox
          onPress={props.onPress}
          key={Math.random() * index}
          width={props.columnWidths[index]}
          justifyContent={
            cell.align === 'left'
              ? 'flex-start'
              : cell.align === 'right'
              ? 'flex-end'
              : 'center'
          }
          backgroundColor={
            isSelected ? cell.SelectedBg || SelectedBg : cell.BgColor || BgColor
          }
          {...cellProps}>
          {cell.icon && (
            <Icon
              name={cell.icon}
              color={
                isSelected
                  ? cell.SelectedTextColor || SelectedTextColor
                  : cell.TextColor || TextColor
              }
              size={iconSize}
            />
          )}
          {cell.content && (
            <Text
              preset="LabelMedium"
              weight="600"
              numberOfLines={1}
              ellipsizeMode={cellEllipsizeMode}
              color={
                isSelected
                  ? cell.SelectedTextColor || SelectedTextColor
                  : cell.TextColor || TextColor
              }>
              {cell.content}
            </Text>
          )}
        </PressableBox>
      ))}
    </Box>
  )
}
