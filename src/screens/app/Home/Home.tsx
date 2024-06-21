import { Box, Icon, Screen, Text } from '@components'
import { AppScreenProps } from '@routes'
import { useAuthCredentials, useAuthCredentialsManager } from '@services'
import { ThemeLightDark } from '@theme'
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
        <Box flex={1} justifyContent="center">
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
        <Box flexDirection="row" gap="s8">
          <ThemeLightDark size={32} />
          <Icon
            name="exitRun"
            color="errorM"
            onPress={removeCredentials}
            size={32}
          />
        </Box>
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
