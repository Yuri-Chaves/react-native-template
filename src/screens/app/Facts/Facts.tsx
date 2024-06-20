import { InfinityScrollList, Screen, Text } from '@components'
import { FactItem, factsService } from '@domain'
import { QueryKeys } from '@infra'
import React from 'react'
import { ListRenderItemInfo } from 'react-native'
import { FactItemBox } from './components/FactItemBox'

export function Facts() {
  function rederItem({ item }: ListRenderItemInfo<FactItem>) {
    return <Text>{item.fact}</Text>
  }
  return (
    <Screen>
      <InfinityScrollList
        queryKey={QueryKeys.facts}
        getList={factsService.getFactsList}
        renderItem={({ item }) => <FactItemBox item={item} />}
        emptyListProps={{
          emptyMessage: 'No facts found',
          errorMessage: 'Something went wrong',
        }}
      />
    </Screen>
  )
}
