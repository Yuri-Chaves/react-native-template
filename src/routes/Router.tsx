import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import { ActivityIndicator, Box } from '@components'
import { useAuthCredentials } from '@services'
import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'

export function Router() {
  const { authCredentials, isLoading } = useAuthCredentials()
  if (isLoading) {
    return (
      <Box
        flex={1}
        bg="backgroundColor"
        justifyContent="center"
        alignItems="center">
        <ActivityIndicator color="androidGreen" size="large" />
      </Box>
    )
  }
  return (
    <NavigationContainer>
      {authCredentials ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  )
}
