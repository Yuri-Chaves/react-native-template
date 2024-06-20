import React, { useState } from 'react'

import { Alert, Box, Button, Screen, Text } from '@components'

export function AlertScreen() {
  const [theme, setTheme] = useState<'system' | 'light' | 'dark' | 'colored'>(
    'system',
  )
  const [variant, setVariant] = useState<
    'info' | 'warning' | 'error' | 'success' | undefined
  >()
  return (
    <Screen>
      <Text preset="TitleLarge">
        Theme:{' '}
        <Text preset="TitleLarge" weight="700" color="secondary">
          {theme}
        </Text>
      </Text>
      <Box flexDirection="row" gap="s12">
        <Button
          title="System"
          backgroundColor="androidGreen"
          onPress={() => setTheme('system')}
        />
        <Button
          title="Light"
          backgroundColor="white"
          preset="outline"
          onPress={() => setTheme('light')}
        />
      </Box>
      <Box flexDirection="row" gap="s12">
        <Button
          title="Dark"
          backgroundColor="gray2"
          preset="outline"
          onPress={() => setTheme('dark')}
        />
        <Button title="Colored" onPress={() => setTheme('colored')} />
      </Box>
      <Text preset="TitleLarge">
        Variant:{' '}
        <Text
          preset="TitleLarge"
          weight="700"
          color={variant ? `${variant}M` : 'primary'}>
          {variant || 'undefined'}
        </Text>
      </Text>
      <Box flexDirection="row" gap="s12">
        <Button
          title="info"
          backgroundColor={variant === 'info' ? 'infoM' : 'primary'}
          onPress={() => setVariant(variant !== 'info' ? 'info' : undefined)}
        />
        <Button
          title="warning"
          backgroundColor={variant === 'warning' ? 'warningM' : 'primary'}
          onPress={() =>
            setVariant(variant !== 'warning' ? 'warning' : undefined)
          }
        />
      </Box>
      <Box flexDirection="row" gap="s12">
        <Button
          title="error"
          backgroundColor={variant === 'error' ? 'errorM' : 'primary'}
          onPress={() => setVariant(variant !== 'error' ? 'error' : undefined)}
        />
        <Button
          title="success"
          backgroundColor={variant === 'success' ? 'successM' : 'primary'}
          onPress={() =>
            setVariant(variant !== 'success' ? 'success' : undefined)
          }
        />
      </Box>
      <Box marginTop="s32">
        <Button
          title="Show Alert"
          preset="outline"
          onPress={() =>
            Alert.alert({
              title: 'Alert title',
              message: 'Alert message',
              options: {
                theme,
                variant,
              },
            })
          }
        />
      </Box>
    </Screen>
  )
}
