export const palette = {
  androidGreen: '#9ACA3C',
  androidBlue: '#24A0ED',
  gray0: '#18191A',
  gray1: '#333333',
  gray2: '#4F4F4F',
  gray3: '#828282',
  gray4: '#BDBDBD',
  gray5: '#E0E0E0',
  gray6: '#F4F5F6',
  white: '#FFFFFF',
}

const lightTheme = {
  backgroundColor: palette.gray6,
  backgroundContrast: palette.gray1,
}

const darkTheme: typeof lightTheme = {
  backgroundColor: palette.gray1,
  backgroundContrast: palette.gray6,
}

export const colors = {
  lightTheme,
  darkTheme,
}
