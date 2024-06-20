import { Button, Screen } from '@components'
import { AppScreenProps } from '@routes'
import React from 'react'

export function Home({ navigation }: AppScreenProps<'home'>) {
  return (
    <Screen>
      <Button
        title="InfinityScroll"
        onPress={() => navigation.navigate('facts')}
      />
    </Screen>
  )
}
