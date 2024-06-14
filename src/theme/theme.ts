import { createTheme } from '@shopify/restyle'
import { colors, palette } from './colors'

export const lightTheme = createTheme({
  colors: {
    ...palette,
    ...colors.lightTheme,
  },
  spacing: {
    s8: 8,
    s16: 16,
    s24: 24,
  },
  borderRadii: {},
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
