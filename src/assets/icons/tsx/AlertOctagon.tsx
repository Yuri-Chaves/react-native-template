import React from 'react'

import { Path, Svg } from 'react-native-svg'

import { IconBase } from '@components'

export function AlertOctagon({ color = '#4F4F4F', size = 24 }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M13 13H11V7H13M11 15H13V17H11M15.73 3H8.27L3 8.27V15.73L8.27 21H15.73L21 15.73V8.27L15.73 3Z"
        fill={color}
      />
    </Svg>
  )
}
