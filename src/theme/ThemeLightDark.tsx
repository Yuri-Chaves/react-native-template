import { PressableBox } from '@components'
import { useAppTheme } from '@hooks'
import React from 'react'

import { useSettingsService, useThemePreference } from '@services'

import { Path, Svg } from 'react-native-svg'

interface ThemeIconInterface {
  size?: number
}

export function ThemeLightDark({ size = 24 }: ThemeIconInterface) {
  const { colors } = useAppTheme()
  const themePreference = useThemePreference()
  const { setThemePreference } = useSettingsService()

  function handleChangeTheme() {
    if (themePreference === 'light') {
      setThemePreference('dark')
    } else if (themePreference === 'dark') {
      setThemePreference('light')
    } else {
      setThemePreference('light')
    }
  }

  return (
    <PressableBox onPress={handleChangeTheme}>
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
          d="M18.9744 9.70559C19.3056 10.5264 20.0208 12.2592 20.0544 12.3168C20.088 12.3744 20.3088 12.1488 21.1632 11.16C21.7536 10.4832 22.2192 9.9168 22.2096 9.9024C22.1904 9.8832 19.32 9.65279 19.0368 9.64799C18.984 9.64799 18.96 9.67199 18.9744 9.70559ZM14.064 14.0928L10.248 17.9088L10.392 18.0288C10.5984 18.1968 11.3904 18.5952 11.76 18.7152C13.7616 19.3632 15.9168 18.8496 17.376 17.376C19.0704 15.672 19.4736 13.1664 18.3936 11.016C18.2112 10.6512 17.9664 10.272 17.9136 10.272C17.8944 10.272 16.1616 11.9904 14.064 14.0928ZM20.0256 14.7408C20.0016 14.8032 19.7472 15.4128 19.464 16.0944C19.1808 16.776 18.96 17.3424 18.9696 17.352C18.9984 17.3808 22.1712 17.16 22.2 17.1264C22.224 17.1024 20.52 15.0912 20.1792 14.7408L20.0688 14.6208L20.0256 14.7408ZM9.648 18.9936C9.6384 19.1712 9.8544 22.0752 9.8784 22.1424C9.9072 22.2096 10.1328 22.032 11.112 21.1872C11.7744 20.6208 12.3312 20.136 12.3504 20.1168C12.3792 20.088 9.7776 18.96 9.6768 18.96C9.6624 18.96 9.648 18.9744 9.648 18.9936ZM15.9696 19.512C15.264 19.8096 14.6832 20.0688 14.6784 20.0928C14.6736 20.1312 17.0976 22.272 17.1216 22.2528C17.1216 22.2528 17.1744 21.5904 17.2272 20.784C17.2848 19.9776 17.3376 19.2384 17.352 19.1376C17.3712 19.0128 17.3616 18.96 17.3184 18.9648C17.2848 18.9696 16.6752 19.2144 15.9696 19.512Z"
          fill={
            themePreference === 'light'
              ? colors.activeColor
              : colors.inactiveColor
          }
        />
        <Path
          d="M11.2896 11.2944L3.504 19.08L4.2144 19.7904L4.92 20.496L12.7104 12.7056L20.496 4.92L19.7856 4.2096L19.08 3.504L11.2896 11.2944Z"
          fill={colors.backgroundContrast}
        />
        <Path
          d="M11.0448 2.2944C10.9008 2.7072 10.7712 3.0672 10.752 3.0864C10.7328 3.1104 10.344 3.1488 9.8928 3.1824C9.4416 3.2112 9.072 3.2448 9.072 3.2592C9.072 3.2784 9.3648 3.5136 9.72 3.7824C10.1088 4.08 10.368 4.3104 10.368 4.3584C10.368 4.4016 10.2816 4.776 10.176 5.184C10.0752 5.592 9.9984 5.9328 10.008 5.9424C10.0176 5.952 10.2816 5.784 10.5936 5.5632C10.9056 5.3472 11.2176 5.1312 11.2848 5.0832L11.4096 4.992L12.1248 5.448C12.5184 5.6928 12.8448 5.8896 12.8544 5.8848C12.8592 5.8752 12.7536 5.5104 12.6192 5.064C12.4176 4.3968 12.384 4.248 12.4416 4.2C12.4752 4.1712 12.7728 3.9168 13.104 3.6432L13.704 3.144L12.8448 3.12L11.9904 3.096L11.6736 2.3136C11.496 1.8864 11.3424 1.536 11.328 1.536C11.3136 1.536 11.1888 1.8768 11.0448 2.2944ZM6.5424 2.088C5.4432 2.2848 4.3968 2.8416 3.6 3.648C2.9184 4.3344 2.4384 5.1696 2.1792 6.12C2.0544 6.5616 2.0448 6.6672 2.0448 7.488C2.0448 8.2896 2.0592 8.4192 2.1696 8.8368C2.4288 9.7872 2.88 10.608 3.5184 11.2752C4.5072 12.2976 5.6736 12.8448 7.176 12.9888C7.5552 13.0224 7.5552 13.032 7.0704 12.6816C6.8832 12.5424 6.5376 12.2256 6.2976 11.9808C5.4576 11.0976 4.9056 10.0656 4.632 8.8512C4.512 8.328 4.488 7.0368 4.5792 6.456C4.848 4.8384 5.7888 3.264 7.0656 2.304L7.4448 2.016L7.1664 2.0208C7.0128 2.0208 6.7344 2.0544 6.5424 2.088ZM8.184 6.6096C8.0832 6.8928 7.9824 7.1712 7.9632 7.2288C7.9248 7.344 7.7376 7.3872 7.296 7.3968C7.152 7.3968 6.936 7.416 6.816 7.4304L6.6 7.464L7.1136 7.848C7.3968 8.0592 7.6272 8.2656 7.632 8.304C7.632 8.3424 7.5648 8.6208 7.488 8.9232C7.4064 9.2208 7.344 9.4896 7.344 9.5136C7.344 9.5376 7.5792 9.3936 7.8672 9.1968C8.1552 8.9952 8.4096 8.832 8.4336 8.832C8.4528 8.832 8.7072 8.9808 9 9.1632C9.288 9.3456 9.5328 9.4896 9.5424 9.48C9.552 9.4704 9.4848 9.2112 9.3888 8.8992C9.2928 8.592 9.216 8.304 9.216 8.2608C9.2208 8.2176 9.4368 8.0112 9.696 7.8C9.96 7.5888 10.176 7.4016 10.176 7.3824C10.176 7.3632 9.8832 7.3392 9.5232 7.3344L8.8704 7.32L8.6304 6.72C8.5008 6.3888 8.3856 6.1152 8.376 6.1056C8.3712 6.096 8.28 6.3264 8.184 6.6096Z"
          fill={
            themePreference === 'dark'
              ? colors.activeColor
              : colors.inactiveColor
          }
        />
      </Svg>
    </PressableBox>
  )
}