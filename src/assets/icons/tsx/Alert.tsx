import React from 'react'

import { Path, Svg } from 'react-native-svg'

import { IconBase } from '@components'

export function Alert({ color = '#4F4F4F', size = 24 }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z" fill={color} />
    </Svg>
  )
}
