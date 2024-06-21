import { Box, Button, Text } from '@components'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { AppStackParamList } from '@routes'
import React from 'react'

type Props = {
  navigation: NativeStackNavigationProp<AppStackParamList, 'home', undefined>
}
export function ComponentsSection({ navigation }: Props) {
  return (
    <>
      <Text preset="BodyLarge">
        See the project{' '}
        <Text preset="BodyLarge" color="androidGreen" weight="700">
          Components
        </Text>
        :
      </Text>
      <Box flexDirection="row" gap="s12">
        <Box flex={1} gap="s8">
          <Button title="Alert" onPress={() => navigation.navigate('alert')} />
          <Button
            title="Dropdown"
            onPress={() => navigation.navigate('dropdown')}
          />
          <Button title="Icons" onPress={() => navigation.navigate('icon')} />
        </Box>
        <Box flex={1} gap="s8">
          <Button
            title="InfinityScroll"
            onPress={() => navigation.navigate('facts')}
          />
          <Button title="Inputs" onPress={() => navigation.navigate('input')} />
          <Button title="Table" onPress={() => navigation.navigate('table')} />
        </Box>
      </Box>
    </>
  )
}
