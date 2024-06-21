import React from 'react'

import { Path, Svg } from 'react-native-svg'

import { IconBase } from '@components'

export function ExitRun({ color = '#4F4F4F', size = 24 }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M13.34 8.17C12.41 8.17 11.65 7.4 11.65 6.47C11.65 6.02178 11.8281 5.59193 12.145 5.27499C12.4619 4.95805 12.8918 4.78 13.34 4.78C14.28 4.78 15.04 5.54 15.04 6.47C15.04 7.4 14.28 8.17 13.34 8.17ZM10.3 19.93L4.37 18.75L4.71 17.05L8.86 17.9L10.21 11.04L8.69 11.64V14.5H7V10.54L11.4 8.67L12.07 8.59C12.67 8.59 13.17 8.93 13.5 9.44L14.36 10.79C15.04 12 16.39 12.82 18 12.82V14.5C16.14 14.5 14.44 13.67 13.34 12.4L12.84 14.94L14.61 16.63V23H12.92V17.9L11.14 16.21L10.3 19.93ZM21 23H19V3H6V16.11L4 15.69V1H21V23ZM6 23H4V19.78L6 20.2V23Z"
        fill={color}
      />
    </Svg>
  )
}
