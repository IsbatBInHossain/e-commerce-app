import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// truncates long strings
export function truncateString(text: string, maxLength = 20) {
  if (text.length <= maxLength) {
    return text
  } else {
    return `${text.slice(0, maxLength - 3)}...`
  }
}
