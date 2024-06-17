import { createTheme } from '@shopify/restyle'

import { colors, palette } from './colors'

export const lightTheme = createTheme({
  colors: {
    ...palette,
    ...colors.lightTheme,
  },
  spacing: {
    s2: 2,
    s4: 4,
    s8: 8,
    s16: 16,
    s24: 24,
    s32: 32,
  },
  borderRadii: {
    br4: 4,
    br16: 16,
  },
  textVariants: {
    defaults: {},
  },
})

export const darkTheme = {
  ...lightTheme,
  colors: {
    ...palette,
    ...colors.darkTheme,
  },
}

export type Theme = typeof lightTheme
export type ThemeColors = keyof Theme['colors']
