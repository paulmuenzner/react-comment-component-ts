/* eslint-disable no-control-regex */
import { MainCommentTypes, SortArrayTypes } from './interfaces'

//////////////////////////////////////////////////////////////////////////
// VALIDATION

// email
export const validateEmail: (email: string) => boolean = (email: string) => {
  const emailRegex =
    /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/
  return !emailRegex.test(email)
}

// name in comment
export const validateSpecialCharName: (input: string) => boolean = (
  input: string,
) => {
  const specialCharRegex = /[`!@#$%*^&()_€§+\-=[\]{};':"\\|,.<>/?~]/
  return specialCharRegex.test(input)
}

// comment itself
export const validateSpecialCharComment: (input: string) => boolean = (
  input: string,
) => {
  const specialCharRegex = /[`@#$€§%^&*()_+=[\]{}'"\\|<>/~]/
  return specialCharRegex.test(input)
}

//////////////////////////////////////////////////////////////////////////
// SORT COMMENTS
export const sortComments = ({
  comments,
  field,
  isAsc,
}: SortArrayTypes): MainCommentTypes[] => {
  return comments.sort((a, b) => {
    const aValue = a[field] ?? '' // Provide a default value (empty string) if undefined
    const bValue = b[field] ?? '' // Provide a default value (empty string) if undefined

    if (aValue < bValue) return isAsc ? -1 : 1
    if (aValue > bValue) return isAsc ? 1 : -1
    return 0
  })
}

//////////////////////////////////////////////////////////////////////////
// DATE FORMAT TO US
export const dateFormat = (date: number): string => {
  const currentDate: number = Date.now()
  const months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const formatDate = (date: Date): string => {
    const month: string = months[date.getMonth()]
    const day: number = date.getDate()
    const year: number = date.getFullYear()
    return `${month} ${day}, ${year}`
  }

  const formatTimeUnit = (value: number, unit: string): string => {
    return `${Math.floor(timeDifference / value)} ${unit}`
  }

  const numberToDate: Date = new Date(date)
  const timeDifference: number = currentDate - date

  // Display seconds
  if (timeDifference / 1000 < 60) {
    return formatTimeUnit(1, 'seconds')
  }
  // Display minutes
  if (timeDifference / (1000 * 60) < 60) {
    return formatTimeUnit(60, 'minute')
  }
  // Display hours
  if (timeDifference / (1000 * 60 * 60) < 24) {
    return formatTimeUnit(60 * 60, 'hour')
  }
  // Display days
  if (timeDifference / (1000 * 60 * 60 * 24) < 5) {
    return formatTimeUnit(24 * 60 * 60, 'day')
  }
  // Display date dateFormat
  return formatDate(numberToDate)
}
