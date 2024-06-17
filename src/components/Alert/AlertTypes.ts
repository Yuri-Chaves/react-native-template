import { TextInputProps } from 'react-native'

import { IconName } from '../Icon/Icon'

interface AlertButton {
  /**
   * @description
   * Button title
   */
  title: string
  /**
   * @description
   * Button function.
   *
   * When is not defined, close the Alert
   */
  onPress?: () => void
  /**
   * @description
   * Defines text color
   * @default backgroundContrast
   */
  variant?: 'info' | 'warning' | 'error' | 'success'
  leftIcon?: IconName
  rightIcon?: IconName
}

export type AlertButtonsType =
  | [AlertButton]
  | [AlertButton, AlertButton]
  | [AlertButton, AlertButton, AlertButton]

export interface AlertOptions {
  /**
   * @description
   * Defines the Theme of the Alert
   * @default system
   */
  theme?: 'system' | 'light' | 'dark' | 'colored'
  /**
   * @description
   * Defines the icon and, when alert theme is colored, the color of the alert
   * @default undefined
   * @icon undefined -> informationVariant
   * @icon info -> alertCircle
   * @icon warning -> alert
   * @icon error -> alertOctagon
   * @icon success -> checkCircle
   * @see src/assets/icons/svg
   */
  variant?: 'info' | 'warning' | 'error' | 'success'
}

export type PromptType = 'plain-text' | 'secure-text' | 'login-password'

export type PromptInput = {
  value: string
  onChangeText: (value: string) => void
  placeholder?: string
  iconType?: 'default' | 'outlined'
  defaultValue?: string
  keyboardType?: TextInputProps['keyboardType']
}

type AlertBase = {
  /**
   * @description The dialog's title. Passing null or empty string will hide the title.
   */
  title: string
  /**
   * @description An optional message that appears below the dialog's title.
   */
  message?: string
  /**
   * @description An optional Alert configuration.
   */
  options?: AlertOptions
}

export interface AlertProps extends AlertBase {
  /**
   * @description An optional array containing buttons configuration.
   */
  buttons?: AlertButtonsType
}
export interface PromptProps extends AlertBase {
  /**
   * @description
   * @param value The value of the Input `string`
   * @param onChangeText Function called when text is changed `(value: string) => void`
   * @param placeholder Input placeholder (optional) `string`
   * @param iconType Type od the input icon (optional, default: 'default') `'default' | 'outlined'`
   * @param defaultValue Default value of the input (optional) `string`
   * @param keyboardType Keyboard of the input (optional, default: 'default') `TextInputProps['keyboardType']`
   */
  inputs: [PromptInput] | [PromptInput, PromptInput]
  /**
   * @description If passed a function, it will be called with the prompt's value `(text: string) => void`, when the user taps 'OK'. If passed an array, buttons will be configured based on the array content.
   */
  callbackOrButtons?:
    | ((input1: string, input2?: string) => void)
    | AlertButtonsType
  /**
   * @description This configures the text input.
   * @param plain-text Plain text input alert
   * @param secure-text Secure text input alert
   * @param login-password Login and password alert
   */
  type?: PromptType
}

export interface AlertRef {
  alert: (props: AlertProps) => void
  prompt: (props: PromptProps) => void
}
