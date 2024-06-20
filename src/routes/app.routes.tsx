import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Facts, Home } from '@screens'
import React from 'react'

export type AppStackParamList = {
  home: undefined
  facts: undefined
}

const Stack = createNativeStackNavigator<AppStackParamList>()
export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="facts" component={Facts} />
    </Stack.Navigator>
  )
}
