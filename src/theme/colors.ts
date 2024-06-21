export const palette = {
  androidGreen: '#41D983',
  androidBlue: '#448FF2',
  gray0: '#18191A',
  gray1: '#333333',
  gray2: '#4F4F4F',
  gray3: '#828282',
  gray4: '#BDBDBD',
  gray5: '#E0E0E0',
  gray6: '#F4F5F6',
  white: '#FFFFFF',

  infoD: '#005FDF',
  infoM: '#2F80ED',
  infoL: '#EEF6FF',
  successD: '#008639',
  successM: '#05AC4B',
  successL: '#E6F1EB',
  warningD: '#A44F00',
  warningM: '#D88100',
  warningL: '#FDF3E7',
  errorD: '#D40000',
  errorM: '#EB5757',
  errorL: '#F6EAEA',

  primary: '#A36FF7',
  secondary: '#4BC3A4',

  infoShadow: '#2F80ED7F',
  successShadow: '#05AC4B7F',
  warningShadow: '#D881007F',
  errorShadow: '#EB57577F',
  aux1Shadow: '#A761FF7F',
  aux2Shadow: '#EE60057F',

  placeholder: '#A9A9A9',

  transparent: '#0000',
}

const lightTheme = {
  backgroundColor: palette.gray6,
  backgroundContrast: palette.gray1,

  disabledInput: palette.gray5,
  borderColor: palette.gray2,

  shadow: '#3333337F',

  // ThemeLightDark
  activeColor: '#F2D22E',
  inactiveColor: palette.gray4,
}

const darkTheme: typeof lightTheme = {
  backgroundColor: palette.gray1,
  backgroundContrast: palette.gray6,

  disabledInput: palette.gray3,
  borderColor: palette.gray5,

  shadow: '#f4f5f67F',

  // ThemeLightDark
  activeColor: '#91CDF2',
  inactiveColor: palette.gray3,
}

export const colors = {
  lightTheme,
  darkTheme,
}
