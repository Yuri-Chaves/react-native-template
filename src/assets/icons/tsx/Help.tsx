import React from 'react'

import { Path, Svg } from 'react-native-svg'

import { IconBase } from '@components'

export function Help({ color = '#4F4F4F', size = 24 }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M10.9739 19.5018H13.9739V22.5018H10.9739V19.5018ZM12.9739 2.50179C18.3239 2.72179 20.6539 8.12179 17.4739 12.1718C16.6439 13.1718 15.3039 13.8318 14.6439 14.6718C13.9739 15.5018 13.9739 16.5018 13.9739 17.5018H10.9739C10.9739 15.8318 10.9739 14.4218 11.6439 13.4218C12.3039 12.4218 13.6439 11.8318 14.4739 11.1718C16.8939 8.93179 16.2939 5.76179 12.9739 5.50179C12.1782 5.50179 11.4152 5.81786 10.8526 6.38047C10.2899 6.94307 9.97388 7.70614 9.97388 8.50179H6.97388C6.97388 6.91049 7.60602 5.38436 8.73124 4.25914C9.85645 3.13393 11.3826 2.50179 12.9739 2.50179Z"
        fill={color}
      />
    </Svg>
  )
}