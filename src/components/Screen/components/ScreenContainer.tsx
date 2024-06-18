/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { ScrollView, View } from 'react-native'

interface Props {
  children: React.ReactNode
  backgroundColor: string
}

export function ScrollViewContainer({ children, backgroundColor }: Props) {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={{ backgroundColor, flex: 1, paddingTop: 8 }}
      contentContainerStyle={{ paddingBottom: 16 }}>
      {children}
    </ScrollView>
  )
}

export function ViewContainer({ children, backgroundColor }: Props) {
  return <View style={{ backgroundColor, flex: 1 }}>{children}</View>
}
