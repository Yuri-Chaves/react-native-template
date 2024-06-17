import { AlertOptions, IconName } from '@components'
import { ThemeColors } from '@theme'

type AlertStyleType = {
  bg: ThemeColors
  icon: IconName
  iconColor: ThemeColors
  titleColor: ThemeColors
  textColor: ThemeColors
  shadowColor: ThemeColors
}

function getIconName(variant: AlertOptions['variant']): IconName {
  switch (true) {
    case variant === 'error':
      return 'alertOctagon'
    case variant === 'info':
      return 'alertCircle'
    case variant === 'success':
      return 'checkCircle'
    case variant === 'warning':
      return 'alert'
    default:
      return 'informationVariant'
  }
}

function ColoredUI(variant: AlertOptions['variant']): AlertStyleType {
  return {
    bg: variant ? `${variant}L` : 'backgroundColor',
    icon: getIconName(variant),
    iconColor: variant ? `${variant}D` : 'androidBlue',
    shadowColor: variant ? `${variant}Shadow` : 'shadow',
    textColor: variant ? 'gray2' : 'backgroundContrast',
    titleColor: variant ? `${variant}M` : 'androidBlue',
  }
}

function LightUI(variant: AlertOptions['variant']): AlertStyleType {
  return {
    bg: 'white',
    icon: getIconName(variant),
    iconColor: 'gray2',
    shadowColor: 'shadow',
    textColor: 'gray2',
    titleColor: variant ? `${variant}M` : 'androidBlue',
  }
}

function DarkUI(variant: AlertOptions['variant']): AlertStyleType {
  return {
    bg: 'gray2',
    icon: getIconName(variant),
    iconColor: 'white',
    shadowColor: 'shadow',
    textColor: 'white',
    titleColor: variant ? `${variant}M` : 'androidBlue',
  }
}

function DefaultUI(variant: AlertOptions['variant']): AlertStyleType {
  return {
    bg: 'backgroundColor',
    icon: getIconName(variant),
    iconColor: 'backgroundContrast',
    shadowColor: 'shadow',
    textColor: 'backgroundContrast',
    titleColor: variant ? `${variant}M` : 'androidBlue',
  }
}

function getAlertStyle(
  theme: Required<AlertOptions['theme']>,
  variant: AlertOptions['variant'],
): AlertStyleType {
  switch (true) {
    case theme === 'colored':
      return ColoredUI(variant)
    case theme === 'light':
      return LightUI(variant)
    case theme === 'dark':
      return DarkUI(variant)
    default:
      return DefaultUI(variant)
  }
}

type PromptStyle = {
  bg: ThemeColors
  borderColor: ThemeColors
}

function getPromptStyle(theme: Required<AlertOptions['theme']>): PromptStyle {
  switch (true) {
    case theme === 'light':
      return {
        bg: 'gray6',
        borderColor: 'gray1',
      }
    case theme === 'dark':
      return {
        bg: 'gray1',
        borderColor: 'gray6',
      }
    default:
      return {
        bg: 'backgroundColor',
        borderColor: 'borderColor',
      }
  }
}

function leftIcon(
  type: 'plain-text' | 'secure-text' | 'login-password',
  index: number,
  outlined: boolean,
): IconName {
  switch (true) {
    case type === 'login-password' && index === 0 && outlined:
      return 'accountCircleOutline'
    case type === 'login-password' && index === 0:
      return 'accountCircle'
    case type === 'login-password' && index === 1:
      return 'formTextboxPassword'
    case type === 'secure-text':
      return 'formTextboxPassword'
    default:
      return 'formTextbox'
  }
}

function rightIcon(outlined: boolean, off: boolean): IconName {
  switch (true) {
    case outlined && off:
      return 'eyeOffOutline'
    case outlined:
      return 'eyeOutline'
    case off:
      return 'eyeOff'
    default:
      return 'eye'
  }
}

export const AlertUtils = {
  getAlertStyle,
  getPromptStyle,
  leftIcon,
  rightIcon,
}
