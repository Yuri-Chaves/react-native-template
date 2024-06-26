import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Login } from '@screens'

export type AuthStackParamList = {
  login: undefined
}

const Stack = createNativeStackNavigator<AuthStackParamList>()

export function AuthRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
  )
}
