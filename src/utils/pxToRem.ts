export const pxToRem = (pxValue: number, baseFontSize: number = 16) => {
  const remValue = pxValue / baseFontSize
  return `${remValue}rem`
}
