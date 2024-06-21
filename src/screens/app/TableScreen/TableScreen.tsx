import React, { useState } from 'react'

import { Box, Button, Icon, Table, TableHeaderType, Text } from '@components'
import { useGetSomeBreeds } from '@domain'

type ColumnsType = {
  Breed: string
  Country: string
  Origin: string
  Coat: string
  Pattern: string
}

const tableHeader: TableHeaderType = [
  {
    content: 'Breed',
  },
  {
    content: 'Country',
  },
  {
    content: 'Origin',
  },
  {
    content: 'Coat',
  },
  {
    content: 'Pattern',
  },
]

export function TableScreen() {
  const { mutate, tableData, isLoading } = useGetSomeBreeds()
  const [selectedRow, setSelectedRow] = useState<
    Array<ColumnsType> | undefined
  >()
  return (
    <Box gap="s8" flex={1} paddingBottom="s16">
      <Table<ColumnsType>
        headers={tableHeader}
        data={tableData}
        columnWidths={[200, 250, 150, 120, 180]}
        identifier="Breed"
        lineHeight="large"
        selectedItem={selectedRow}
        setSelectedItem={setSelectedRow}
      />
      <Box paddingHorizontal="s16">
        <Text color="primary">
          Breed:{' '}
          <Text color="backgroundContrast">
            {selectedRow ? selectedRow[0].Breed : ''}
          </Text>
        </Text>
        <Text color="primary">
          Country:{' '}
          <Text color="backgroundContrast">
            {selectedRow ? selectedRow[0].Country : ''}
          </Text>
        </Text>
        <Text color="primary">
          Origin:{' '}
          {selectedRow && selectedRow[0].Origin && (
            <Text color="backgroundContrast">{selectedRow[0].Origin}</Text>
          )}
          {selectedRow && !selectedRow[0].Origin && (
            <Icon name="help" size={16} />
          )}
        </Text>
        <Text color="primary">
          Coat:{' '}
          <Text color="backgroundContrast">
            {selectedRow ? selectedRow[0].Coat : ''}
          </Text>
        </Text>
        <Text color="primary">
          Pattern:{' '}
          {selectedRow && selectedRow[0].Pattern && (
            <Text color="backgroundContrast">{selectedRow[0].Pattern}</Text>
          )}
          {selectedRow && !selectedRow[0].Pattern && (
            <Icon name="help" size={16} />
          )}
        </Text>
      </Box>
      <Box flexDirection="row" gap="s8" paddingHorizontal="s16">
        <Button title="10 results" flex={1} onPress={() => mutate(10)} />
        <Button title="20 results" flex={1} onPress={() => mutate(20)} />
      </Box>
    </Box>
  )
}
