export const formatEUR = (value) => {
  const number = typeof value === 'number' ? value : Number(value)
  return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number)
}
