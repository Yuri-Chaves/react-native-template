import React, { useState } from 'react'
import { FlatList, ListRenderItemInfo, ScrollView } from 'react-native'

import { Box } from '../Box/Box'

import { TableHeader, TableRow } from './components'
import { TableCellProps, TableProps } from './TableTypes'

type RenderItemType = Array<
  Pick<TableCellProps, 'content' | 'icon' | 'align' | 'ellipsizeMode'>
>

export function Table<T extends {}>({
  lineHeight = 'medium',
  multiSelections = false,
  canRemoveData = false,
  ...props
}: TableProps<T>) {
  const [tableHeight, setTableHeight] = useState<number>(0)
  const _lineHeight =
    lineHeight === 'large' ? 38 : lineHeight === 'medium' ? 30 : 22
  const maxHeight = props.numLinhas
    ? props.numLinhas * _lineHeight + 22
    : undefined

  const numberOfLines = props.numLinhas || Math.ceil(tableHeight / _lineHeight)

  // Transformando em objeto
  function toObject(item: RenderItemType) {
    let result: Record<string, string> = {}
    if (item !== undefined && item !== null) {
      props.headers.forEach((el, i) => {
        if (el.content) {
          const key: string = el.content
          const value = item[i].content || ''
          result[key] = value
        }
      })
    }
    return result
  }

  // Trabalhando com o onPress
  function handleOnPress(item: RenderItemType) {
    const toReturn = toObject(item) as T
    const alreadySelected = props.selectedItem?.some(
      el => el[props.identifier] === toReturn[props.identifier],
    )
    if (props.setSelectedItem) {
      if (!multiSelections) {
        if (alreadySelected && !props.secondPressFn) {
          props.setSelectedItem(undefined)
        } else if (props.secondPressFn && alreadySelected) {
          props.secondPressFn(toReturn)
        } else {
          props.setSelectedItem([toReturn])
        }
      } else {
        if (alreadySelected) {
          props.setSelectedItem(
            props.selectedItem?.filter(
              el => el[props.identifier] !== toReturn[props.identifier],
            ),
          )
        } else {
          props.setSelectedItem(
            props.selectedItem ? [...props.selectedItem, toReturn] : [toReturn],
          )
        }
      }
    }
  }

  // Gerando linhas em branco
  const emptyRows = numberOfLines - props.data.length
  for (let i = 0; i < emptyRows; i++) {
    const _emptyRows: RenderItemType = []
    props.headers.forEach(header => {
      if (!header.phantom) {
        _emptyRows.push({ content: '' })
      }
    })
    props.data.push(_emptyRows)
  }

  function handleRemoveData(element: T) {
    if (props.onRemoveData) {
      props.onRemoveData(element)
    }
  }

  function renderRows({ item, index }: ListRenderItemInfo<RenderItemType>) {
    const obj = toObject(item) as T
    const isSelected = props.selectedItem?.some(
      el => el[props.identifier] === obj[props.identifier],
    )
    return (
      <TableRow
        key={index}
        cells={item}
        lineHeight={lineHeight}
        onPress={() => (props.setSelectedItem ? handleOnPress(item) : {})}
        isSelected={isSelected}
        canRemoveData={canRemoveData}
        removeFn={() => handleRemoveData(obj)}
        {...props}
      />
    )
  }

  return (
    <ScrollView
      style={{ height: maxHeight, maxHeight }}
      horizontal
      onLayout={event => {
        const { height } = event.nativeEvent.layout
        setTableHeight(height)
      }}
      keyboardShouldPersistTaps="handled"
      nestedScrollEnabled
      showsHorizontalScrollIndicator={false}>
      <Box bg={props.dividerColor}>
        <Box gap="s2" height={22} flexDirection="row">
          {props.onRemoveData && (
            <TableHeader
              width={
                lineHeight === 'large' ? 38 : lineHeight === 'medium' ? 30 : 22
              }
            />
          )}
          {props.headers.map((header, index) => (
            <TableHeader
              key={header.content}
              {...header}
              width={props.columnWidths[index]}
            />
          ))}
        </Box>
        <FlatList
          data={props.data}
          renderItem={renderRows}
          nestedScrollEnabled
        />
      </Box>
    </ScrollView>
  )
}
