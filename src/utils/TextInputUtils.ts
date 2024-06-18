import { StringUtils } from './StringUtils'

export enum Masks {
  currency = 'currency',
  date = 'date',
}
export type TMasks = keyof typeof Masks

function onApplyMask(value: string, mask?: TMasks) {
  if (mask) {
    if (mask === 'currency') {
      return StringUtils.currency(value)
    }
    if (mask === 'date') {
      return StringUtils.date(value)
    }
  }
  return value
}

export const TextInputUtils = {
  onApplyMask,
}
