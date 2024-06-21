import { Box, Icon, Screen, Text } from '@components'
import { AppScreenProps } from '@routes'
import { useAuthCredentials, useAuthCredentialsManager } from '@services'
import React from 'react'
import { ComponentsSection, StructureSection } from './components'

export function Home({ navigation }: AppScreenProps<'home'>) {
  const { authCredentials } = useAuthCredentials()
  const { removeCredentials } = useAuthCredentialsManager()
  return (
    <Screen
      scrollable
      boxProps={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}>
      <Box flexDirection="row" gap="s8">
        <Box flex={1}>
          <Text preset="TitleLarge">
            👋 Welcome
            {authCredentials && (
              <Text
                preset="TitleLarge"
                weight="700"
                italic
                color="primary"
                numberOfLines={1}>
                {' '}
                {authCredentials.username}
              </Text>
            )}
          </Text>
        </Box>
        <Icon name="exitRun" color="errorM" onPress={removeCredentials} />
      </Box>
      <Text>
        😃 Thank you for using my{' '}
        <Text color="androidBlue" weight="700">
          react-native
        </Text>{' '}
        template.
      </Text>
      <StructureSection />
      <ComponentsSection navigation={navigation} />
    </Screen>
  )
}
