import React from 'react'
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps as RNActivityIndicatorProps,
} from 'react-native'

import { useAppTheme } from '@hooks'
import { ThemeColors } from '@theme'

export interface ActivityIndicatorProps
  extends Omit<RNActivityIndicatorProps, 'color'> {
  /**
   * @description Set the color of the activity indicator
   * @default 'androidBlue'
   */
  color?: ThemeColors
}
export function ActivityIndicator({
  color = 'androidBlue',
  ...rNActivityIndicator
}: ActivityIndicatorProps) {
  const { colors } = useAppTheme()
  return (
    <RNActivityIndicator
      testID="activity-indicator"
      color={colors[color]}
      {...rNActivityIndicator}
    />
  )
}
