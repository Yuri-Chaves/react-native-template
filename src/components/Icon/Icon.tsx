import { useAppTheme } from '@hooks'
import * as icons from '@icons'
import { ThemeColors } from '@theme'
import React from 'react'
import { Pressable } from 'react-native'

export interface IconBase {
  size?: number
  color?: string
}

interface Props {
  name: IconName
  size?: number
  color?: ThemeColors
  onPress?: () => void
}
export function Icon({ name, color = 'gray2', size, onPress }: Props) {
  const { colors } = useAppTheme()
  const SVGIcon = iconRegistry[name]
  if (onPress) {
    return (
      <Pressable testID={name} onPress={onPress} hitSlop={10}>
        <SVGIcon size={size} color={colors[color]} />
      </Pressable>
    )
  }
  return <SVGIcon size={size} color={colors[color]} />
}

const iconRegistry = {
  alert: icons.Alert,
  alertCircle: icons.AlertCircle,
  alertOctagon: icons.AlertOctagon,
}

type IconType = typeof iconRegistry
export type IconName = keyof IconType