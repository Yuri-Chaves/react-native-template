import { ActivityIndicator, Box, Button, Text } from '@components'
import React from 'react'

export interface EmptyListProps {
  emptyMessage: string
  errorMessage: string
  loading: boolean
  error: unknown
  refetch: () => void
}

export function EmptyList({
  emptyMessage,
  errorMessage,
  loading,
  error,
  refetch,
}: EmptyListProps) {
  let Component = (
    <Text preset="TitleLarge" weight="600" italic>
      {emptyMessage}
    </Text>
  )

  if (loading) {
    Component = <ActivityIndicator size="large" />
  }

  if (error) {
    Component = (
      <>
        <Text preset="TitleLarge" weight="600" italic color="errorM">
          {errorMessage}
        </Text>
        <Button title="Try Again" onPress={refetch} preset="outline" />
      </>
    )
  }

  return (
    <Box flex={1} alignContent="center" justifyContent="center" gap="s8">
      {Component}
    </Box>
  )
}
