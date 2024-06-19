import React, { ReactElement } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from '@shopify/restyle'
import {
  RenderHookOptions,
  RenderOptions,
  render,
  renderHook,
} from '@testing-library/react-native'

import { AlertComponent } from '@components'
import { lightTheme } from '@theme'

const wrapperAllTheProviders = () => {
  return ({ children }: { children: React.ReactNode }) => (
    <ThemeProvider theme={lightTheme}>
      <NavigationContainer>{children}</NavigationContainer>
      <AlertComponent />
    </ThemeProvider>
  )
}

const wrapperScreenProviders = () => {
  return ({ children }: { children: React.ReactNode }) => (
    <ThemeProvider theme={lightTheme}>
      <NavigationContainer>{children}</NavigationContainer>
      <AlertComponent />
    </ThemeProvider>
  )
}

function customRender<T = unknown>(
  component: ReactElement<T>,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return render(component, { wrapper: wrapperAllTheProviders(), ...options })
}

function customRenderScreen<T = unknown>(
  component: ReactElement<T>,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return render(component, { wrapper: wrapperScreenProviders(), ...options })
}

function customRenderHook<Result, Props>(
  renderCallBack: (props: Props) => Result,
  options?: Omit<RenderHookOptions<Props>, 'wrapper'>,
) {
  return renderHook(renderCallBack, {
    wrapper: wrapperAllTheProviders(),
    ...options,
  })
}

export * from '@testing-library/react-native'
export {
  customRender as render,
  customRenderHook as renderHook,
  customRenderScreen as renderScreen,
}
