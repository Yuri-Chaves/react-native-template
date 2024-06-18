import React from 'react'

import { Path, Svg } from 'react-native-svg'

import { IconBase } from '@components'

export function ChevronDown({ color = '#4F4F4F', size = 24 }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M7.41 8.58L12 13.17L16.59 8.58L18 10L12 16L6 10L7.41 8.58Z"
        fill={color}
      />
    </Svg>
  )
}
