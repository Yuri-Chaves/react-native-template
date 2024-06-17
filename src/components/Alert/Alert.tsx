import React, {
  RefObject,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { Modal } from 'react-native'

import { useAppTheme } from '@hooks'

import { Box } from '../Box/Box'

import { AlertProps, AlertRef, PromptProps } from './AlertTypes'
import { AlertAlert, AlertPrompt } from './components'

export function AlertComponent() {
  const alertRef = useRef<AlertRef>(null)
  const [open, setOpen] = useState<boolean>(false)
  const { colors } = useAppTheme()

  const [alertProps, setAlertProps] = useState<AlertProps | undefined>()
  const [promptProps, setPromptProps] = useState<PromptProps | undefined>()

  function _close() {
    setOpen(false)
    setAlertProps(undefined)
    setPromptProps(undefined)
  }

  function handleShowAlert(props: AlertProps) {
    setOpen(true)
    setPromptProps(undefined)
    setAlertProps(props)
  }

  function handleShowPrompt(props: PromptProps) {
    setOpen(true)
    setAlertProps(undefined)
    setPromptProps(props)
  }

  useImperativeHandle(alertRef, () => ({
    alert: handleShowAlert,
    prompt: handleShowPrompt,
  }))

  useLayoutEffect(() => {
    Alert.setAlertRef(alertRef)
  }, [])

  if (promptProps === undefined && alertProps === undefined) {
    return null
  }

  return (
    <Modal animationType="fade" transparent visible={open}>
      <Box
        width="100%"
        flex={1}
        alignItems="center"
        justifyContent="center"
        style={{ backgroundColor: `${colors.gray0}7F` }}
        padding="s32">
        {alertProps && <AlertAlert Close={_close} {...alertProps} />}
        {promptProps && <AlertPrompt Close={_close} {...promptProps} />}
      </Box>
    </Modal>
  )
}

export class Alert {
  static alertRef: RefObject<AlertRef>

  static setAlertRef(ref: RefObject<AlertRef>) {
    this.alertRef = ref
  }

  /**
   * @description Launches an alert dialog with the specified title and message.
   * Optionally provide a list of buttons. Tapping any button will fire the respective onPress callback and dismiss the alert. By default, the only button will be an 'OK' button
   */
  static alert(props: AlertProps) {
    this.alertRef.current?.alert(props)
  }

  /**
   * @description Launches an alert dialog with the specified title and message.
   * Optionally provide a list of buttons. Tapping any button will fire the respective onPress callback and dismiss the alert. By default, the only button will be an 'OK' button
   */
  static prompt(props: PromptProps) {
    this.alertRef.current?.prompt(props)
  }
}
