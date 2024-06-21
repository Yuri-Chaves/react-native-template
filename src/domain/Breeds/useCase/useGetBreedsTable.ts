import { Alert, TableDataType } from '@components'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { breedsService } from '../breedsService'

export function useGetSomeBreeds() {
  const [tableData, setTableData] = useState<TableDataType>([])
  const { mutate, error, isPending } = useMutation({
    mutationFn: (limit: number) => breedsService.getSomeBreeds(limit),
    onSuccess: data => {
      let table_data: TableDataType = []
      data?.forEach(row => {
        table_data.push([
          {
            content: row.breed,
            align: 'left',
          },
          {
            content: row.country,
          },
          {
            content: row.origin,
            icon: row.origin ? undefined : 'help',
          },
          {
            content: row.coat,
          },
          {
            content: row.pattern,
            icon: row.pattern ? undefined : 'help',
          },
        ])
      })
      setTableData(table_data)
    },
    onError: err => {
      console.log(err)
      Alert.alert({
        title: 'Error',
        message: 'An error occurred during your request',
        options: {
          theme: 'colored',
          variant: 'error',
        },
      })
    },
  })

  return {
    mutate,
    tableData,
    isLoading: isPending,
    error,
  }
}
