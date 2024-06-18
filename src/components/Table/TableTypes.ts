import { Dispatch, SetStateAction } from 'react'

import { ThemeColors } from '@theme'

import { IconName } from '../Icon/Icon'

interface CommonInterface {
  width: number
  content?: string
  icon?: IconName
  ellipsizeMode?: 'middle' | 'tail' | 'head'
  phantom?: boolean
  align?: 'left' | 'center' | 'right'
}

interface RowStyle {
  BgColor?: ThemeColors
  TextColor?: ThemeColors
  SelectedBg?: ThemeColors
  SelectedTextColor?: ThemeColors
}

export interface TableHeaderProps extends CommonInterface {
  onPress?: () => void
}

export interface TableCellProps extends CommonInterface, RowStyle {
  variant?: 'small' | 'medium' | 'large'
}

export interface TableProps<T extends {}> extends RowStyle {
  headers: TableHeaderType
  data: TableDataType
  columnWidths: Array<number>
  /**
   * @description Used to identify if the row is selected
   */
  identifier: keyof T
  /**
   * @description Color of the cells divider
   */
  dividerColor?: ThemeColors
  /**
   * @description Minimum number of lines to be rendered
   */
  numLinhas?: number
  /**
   * @description The height of `TableCell`
   * @small  22
   * @medium 30
   * @large 38
   * @default medium
   */
  lineHeight?: 'small' | 'medium' | 'large'
  cellEllipsizeMode?: 'middle' | 'tail' | 'head'
  selectedItem?: Array<T>
  setSelectedItem?: Dispatch<SetStateAction<Array<T> | undefined>>
  multiSelections?: boolean
  canRemoveData?: boolean
  onRemoveData?: (el: T) => void
  /**
   * @description Execute the function on the second press, but beware, once selected, the item can't be unselected
   * @warning Only when multiSelections is false
   */
  secondPressFn?: (el: T) => void
}

export interface TableRowProps extends RowStyle {
  cells: Array<Omit<TableCellProps, 'width' | 'ellipsizeMode' | 'variant'>>
  columnWidths: Array<number>
  dividerColor?: ThemeColors | undefined
  lineHeight?: 'small' | 'medium' | 'large'
  onPress: () => void
  cellEllipsizeMode?: 'middle' | 'tail' | 'head'
  isSelected?: boolean
  canRemoveData?: boolean
  removeFn?: () => void
}

export type TableHeaderType = Array<Omit<TableHeaderProps, 'width'>>
export type TableDataType = Array<
  Array<Omit<TableCellProps, 'variant' | 'width'>>
>
