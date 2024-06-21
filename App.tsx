import React, { useEffect } from 'react'

import { ThemeProvider } from '@shopify/restyle'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { AlertComponent } from '@components'
import { useAppColorScheme } from '@hooks'
import { Router } from '@routes'
import {
  settingsService,
  useAppColor,
  useAuthCredentialsManager,
} from '@services'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { darkTheme, lightTheme } from '@theme'

const queryClient = new QueryClient()

function App(): React.JSX.Element {
  useAppColorScheme()
  const { startAuthCredentials } = useAuthCredentialsManager()
  const appColor = useAppColor()

  useEffect(() => {
    settingsService.handleStatusBar(appColor)
  }, [appColor])

  useEffect(() => {
    startAuthCredentials()
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <ThemeProvider theme={appColor === 'dark' ? darkTheme : lightTheme}>
          <Router />
          <AlertComponent />
        </ThemeProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  )
}

export default App
