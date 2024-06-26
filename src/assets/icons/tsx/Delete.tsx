import React from 'react'

import { Path, Svg } from 'react-native-svg'

import { IconBase } from '@components'

export function Delete({ color = '#4F4F4F', size = 24 }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M20.37 8.91L19.37 10.64L7.24 3.64L8.24 1.91L11.28 3.66L12.64 3.29L16.97 5.79L17.34 7.16L20.37 8.91ZM6 19V7H11.07L18 11V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H8C7.46957 21 6.96086 20.7893 6.58579 20.4142C6.21071 20.0391 6 19.5304 6 19Z"
        fill={color}
      />
    </Svg>
  )
}
