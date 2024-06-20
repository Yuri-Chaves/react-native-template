import React, { useEffect } from 'react'

import { ThemeProvider } from '@shopify/restyle'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { Router } from '@routes'
import { useAuthCredentialsManager } from '@services'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { lightTheme } from '@theme'

const queryClient = new QueryClient()

function App(): React.JSX.Element {
  const { startAuthCredentials } = useAuthCredentialsManager()

  useEffect(() => {
    startAuthCredentials()
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <ThemeProvider theme={lightTheme}>
          <Router />
        </ThemeProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  )
}

export default App
