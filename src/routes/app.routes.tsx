import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '@screens'
import React from 'react'

export type AppStackParamList = {
  home: undefined
}

const Stack = createNativeStackNavigator<AppStackParamList>()
export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  )
}
