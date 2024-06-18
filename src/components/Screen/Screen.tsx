/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'

import { useAppSafeArea, useAppTheme } from '@hooks'

import { Box, BoxProps } from '../Box/Box'

import {
  ScrollViewContainer,
  ViewContainer,
} from './components/ScreenContainer'

interface ScreenProps {
  children: React.ReactNode
  scrollable?: boolean
  boxProps?: Omit<
    BoxProps,
    | 'backgroundColor'
    | 'bg'
    | 'paddingTop'
    | 'paddingBottom'
    | 'paddingVertical'
  >
}
export function Screen({
  children,
  scrollable = false,
  boxProps,
}: ScreenProps) {
  const { bottom } = useAppSafeArea()
  const { colors } = useAppTheme()

  const Container = scrollable ? ScrollViewContainer : ViewContainer

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.backgroundColor}>
        <Box
          paddingHorizontal="s16"
          style={{ paddingBottom: bottom }}
          alignItems="center"
          justifyContent="center"
          flex={1}
          gap="s8"
          {...boxProps}>
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  )
}
