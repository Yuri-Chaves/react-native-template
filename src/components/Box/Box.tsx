import {
  Pressable,
  PressableProps as RNPressableProps,
  TouchableOpacityProps as RNTouchableOpacityProps,
  TouchableOpacity,
} from 'react-native'

import {
  backgroundColor,
  BackgroundColorProps,
  border,
  BorderProps,
  createBox,
  createRestyleComponent,
  layout,
  LayoutProps,
  spacing,
  SpacingProps,
  spacingShorthand,
  SpacingShorthandProps,
} from '@shopify/restyle'

import { Theme } from '@theme'
export const Box = createBox<Theme>()
export type BoxProps = React.ComponentProps<typeof Box>

export type RestyleTypes = BackgroundColorProps<Theme> &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  SpacingShorthandProps<Theme>

export type TouchableOpacityBoxProps = RestyleTypes & RNTouchableOpacityProps

export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  Theme
>(
  [backgroundColor, spacing, spacingShorthand, layout, border],
  TouchableOpacity,
)

export type PressableBoxProps = RestyleTypes & RNPressableProps

export const PressableBox = createRestyleComponent<PressableBoxProps, Theme>(
  [backgroundColor, spacing, spacingShorthand, layout, border],
  Pressable,
)
