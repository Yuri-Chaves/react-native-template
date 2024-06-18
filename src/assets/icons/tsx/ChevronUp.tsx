import React from 'react'

import { Path, Svg } from 'react-native-svg'

import { IconBase } from '@components'

export function ChevronUp({ color = '#4F4F4F', size = 24 }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M7.41 15.41L12 10.83L16.59 15.41L18 14L12 8L6 14L7.41 15.41Z"
        fill={color}
      />
    </Svg>
  )
}
