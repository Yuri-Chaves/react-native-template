import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AlertScreen, DropdownScreen, Facts, Home } from '@screens'
import React from 'react'

export type AppStackParamList = {
  home: undefined
  facts: undefined
  dropdown: undefined
  alert: undefined
}

const Stack = createNativeStackNavigator<AppStackParamList>()
export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="facts" component={Facts} />
      <Stack.Screen name="alert" component={AlertScreen} />
      <Stack.Screen name="dropdown" component={DropdownScreen} />
    </Stack.Navigator>
  )
}
