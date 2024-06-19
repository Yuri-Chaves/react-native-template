import React, { useEffect } from 'react'

import { ThemeProvider } from '@shopify/restyle'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { Router } from '@routes'
import { useAuthCredentialsManager } from '@services'
import { lightTheme } from '@theme'

function App(): React.JSX.Element {
  const { startAuthCredentials } = useAuthCredentialsManager()

  useEffect(() => {
    startAuthCredentials()
  }, [])

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={lightTheme}>
        <Router />
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

export default App
