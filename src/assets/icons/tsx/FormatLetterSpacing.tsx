import React from 'react'

import { Path, Svg } from 'react-native-svg'

import { IconBase } from '@components'

export function FormatLetterSpacing({
  color = '#4F4F4F',
  size = 24,
}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M14.7126 11.3874H18.8126L16.8126 5.98742L14.7126 11.3874ZM15.9126 3.68742H17.6126L22.3126 15.6874H20.4126L19.4126 13.0874H14.0126L13.0126 15.6874H11.1126L15.9126 3.68742ZM11.5126 3.68742H13.4126L8.71258 15.6874H7.01258L2.31258 3.68742H4.21258L7.81258 13.3874M19.3126 22.6874V20.6874H5.31258V22.6874L2.31258 19.6874L5.31258 16.6874V18.6874H19.3126V16.6874L22.3126 19.6874L19.3126 22.6874Z"
        fill={color}
      />
    </Svg>
  )
}
