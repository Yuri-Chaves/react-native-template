function currency(value: string) {
  value = value.replace(/\D/g, '')
  value = value.replace(/(\d)(\d{2})$/, '$1,$2')
  value = value.replace(/(?=(\d{3})+(\D))\B/g, '.')
  return value
}

function date(value: string) {
  if (!value.match(/^(\d{2})\/(\d{2})\/(\d{2})$/)) {
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d)/, '$1/$2')
    value = value.replace(/(\d{2})(\d)/, '$1/$2')
  }
  let yy = value.slice(-2)
  if (value.length === 8 && yy !== '20') {
    value = value.replace(yy, `20${yy}`)
  }
  if (value.length > 10) {
    return value.slice(0, 10)
  }
  return value
}

export const StringUtils = {
  currency,
  date,
}
