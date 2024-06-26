import { Appearance, ColorSchemeName, Platform, StatusBar } from 'react-native'

import { palette } from '@theme'

import { AppColorScheme, ThemePreference } from './settingsTypes'

function onChangeThemePreference(
  themePreference: ThemePreference,
): AppColorScheme {
  if (themePreference === 'system') {
    const colorScheme = Appearance.getColorScheme()
    return colorScheme ? colorScheme : 'light'
  }

  return themePreference
}

function onSystemChange(
  color: ColorSchemeName,
  themePreference: ThemePreference,
): AppColorScheme | null {
  if (themePreference === 'system') {
    return color ? color : 'light'
  }
  return null
}

function handleStatusBar(appColor: AppColorScheme) {
  StatusBar.setBarStyle(
    appColor === 'dark' ? 'light-content' : 'dark-content',
    true,
  )

  if (Platform.OS === 'android') {
    StatusBar.setBackgroundColor(
      appColor === 'dark' ? palette.gray0 : palette.white,
    )
  }
}

export const settingsService = {
  onChangeThemePreference,
  onSystemChange,
  handleStatusBar,
}
