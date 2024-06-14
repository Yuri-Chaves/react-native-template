import React from 'react'
import { TextStyle } from 'react-native'

import { createText } from '@shopify/restyle'

import { Theme } from '@theme'

const SRText = createText<Theme>()
type SRTextProps = React.ComponentProps<typeof SRText>

export interface TextProps
  extends Omit<SRTextProps, 'fontFamily' | 'fontWeight'> {
  /**
   * @description Define a tipografia do texto seguindo o Design System.
   * @default BodyMedium
   *
   * ### Body:
   * - `BodyTiny`: { fontSize: 10, lineHeight: 12 }
   * - `BodySmall`: { fontSize: 12, lineHeight: 16 }
   * - `BodyMedium`: { fontSize: 14, lineHeight: 20 }
   * - `BodyLarge`: { fontSize: 16, lineHeight: 24 }
   * ### Label:
   * - `LabelMedium`: { fontSize: 14, lineHeight: 20 }
   * - `LabelLarge`: { fontSize: 16, lineHeight: 24 }
   * ### Title
   * - `TitleLarge`: { fontSize: 22, lineHeight: 28 }
   * ### Others:
   * - `Overline`: { fontSize: 10, lineHeight: 16 }
   * - `ButtonUPPERCASE`: { fontSize: 12, lineHeight: 14, textTransform: 'uppercase' }
   */
  preset?: TextVariants
  /**
   * @description Define o peso da fonte o prefixo JB indica a utilização da fonte Jet Brains
   * @default 500
   * - `'300'` = light
   * - `'400'` = regular
   * - `'500'` = medium
   * - `'600'` = semiBold
   * - `'700'` = bold
   * - `'800'` = extraBold
   */
  weight?: '900' | '800' | '700' | '600' | '500' | '400' | '300' | '200' | '100'
  italic?: boolean
}

export function Text({
  children,
  preset = 'BodyMedium',
  weight = '500',
  italic = false,
  style,
  ...sRTextProps
}: TextProps) {
  const fontFamily = getFontFamily(weight, italic)

  return (
    <SRText
      color="backgroundContrast"
      style={[$fontSizes[preset], { fontFamily }, style]}
      {...sRTextProps}>
      {children}
    </SRText>
  )
}

export function getFontFamily(weight: TextProps['weight'], italic: boolean) {
  switch (true) {
    case weight === '100' && italic:
      return $fontFamily.thinItalic
    case weight === '100':
      return $fontFamily.thin
    case weight === '200' && italic:
      return $fontFamily.extraLightItalic
    case weight === '200':
      return $fontFamily.extraLight
    case weight === '300' && italic:
      return $fontFamily.lightItalic
    case weight === '300':
      return $fontFamily.light
    case weight === '400' && italic:
      return $fontFamily.regularItalic
    case weight === '400':
      return $fontFamily.regular
    case weight === '500' && italic:
      return $fontFamily.mediumItalic
    case weight === '500':
      return $fontFamily.medium
    case weight === '600' && italic:
      return $fontFamily.semiBoldItalic
    case weight === '600':
      return $fontFamily.semiBold
    case weight === '700' && italic:
      return $fontFamily.boldItalic
    case weight === '700':
      return $fontFamily.bold
    case weight === '800' && italic:
      return $fontFamily.extraBoldItalic
    case weight === '800':
      return $fontFamily.extraBold
    case weight === '900' && italic:
      return $fontFamily.blackItalic
    case weight === '900':
      return $fontFamily.black
  }
}

type TextVariants =
  | 'TitleLarge'
  | 'LabelLarge'
  | 'LabelMedium'
  | 'BodyLarge'
  | 'BodyMedium'
  | 'BodySmall'
  | 'BodyTiny'
  | 'ButtonUPPERCASE'
  | 'Overline'

export const $fontSizes: Record<TextVariants, TextStyle> = {
  Overline: { fontSize: 10, lineHeight: 16 },
  ButtonUPPERCASE: { fontSize: 12, lineHeight: 14, textTransform: 'uppercase' },

  BodyTiny: { fontSize: 10, lineHeight: 12 },
  BodySmall: { fontSize: 12, lineHeight: 16 },
  BodyMedium: { fontSize: 14, lineHeight: 20 },
  BodyLarge: { fontSize: 16, lineHeight: 24 },

  LabelMedium: { fontSize: 14, lineHeight: 20 },
  LabelLarge: { fontSize: 16, lineHeight: 24 },

  TitleLarge: { fontSize: 22, lineHeight: 28 },
}

export const $fontFamily = {
  thin: 'Poppins-Thin',
  thinItalic: 'Poppins-ThinItalic',
  extraLight: 'Poppins-ExtraLight',
  extraLightItalic: 'Poppins-ExtraLightItalic',
  light: 'Poppins-Light',
  lightItalic: 'Poppins-LightItalic',
  regular: 'Poppins-Regular',
  regularItalic: 'Poppins-RegularItalic',
  medium: 'Poppins-Medium',
  mediumItalic: 'Poppins-MediumItalic',
  semiBold: 'Poppins-SemiBold',
  semiBoldItalic: 'Poppins-SemiBoldItalic',
  bold: 'Poppins-Bold',
  boldItalic: 'Poppins-BoldItalic',
  extraBold: 'Poppins-ExtraBold',
  extraBoldItalic: 'Poppins-ExtraBoldItalic',
  black: 'Poppins-Black',
  blackItalic: 'Poppins-BlackItalic',
}
