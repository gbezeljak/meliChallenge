import commonText from 'constants/commonText'

const { COMMON } = commonText

export const capitalizeFirstLetter = (string) =>
  `${string.charAt(0).toUpperCase()}${string.slice(1)}`

export const lowerFirsLetter = (string) => `${string.charAt(0).toLowerCase()}${string.slice(1)}`

export const conditionParser = (condition) => (condition === 'new' ? COMMON.NEW : COMMON.USED)
