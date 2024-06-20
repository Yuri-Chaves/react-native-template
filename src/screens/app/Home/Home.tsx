import { Box, Button, Screen, Text } from '@components'
import { AppScreenProps } from '@routes'
import { useAuthCredentials } from '@services'
import React from 'react'

export function Home({ navigation }: AppScreenProps<'home'>) {
  const { authCredentials } = useAuthCredentials()
  return (
    <Screen
      scrollable
      boxProps={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}>
      {authCredentials && (
        <Text preset="TitleLarge">
          Welcome{' '}
          <Text preset="TitleLarge" weight="700" italic color="primary">
            {authCredentials.username}
          </Text>
        </Text>
      )}
      <Text preset="BodyLarge">
        See the project{' '}
        <Text preset="BodyLarge" color="androidGreen" weight="700">
          Components
        </Text>
      </Text>
      <Box flexDirection="row" gap="s12">
        <Box flex={1}>
          <Button title="Alert" onPress={() => navigation.navigate('alert')} />
        </Box>
        <Box flex={1}>
          <Button
            title="InfinityScroll"
            onPress={() => navigation.navigate('facts')}
          />
        </Box>
      </Box>
    </Screen>
  )
}
