import { ProductType } from '@/type'
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

// fuction to convert a string to a urlFriendly one i.e. men's clothing -> mens_clothing
// this is for category images
export function toUrlFriendlyString(str: string) {
  // Replace spaces with underscores
  str = str.replace(/\s+/g, '_')

  // Remove special characters (except alphanumeric, underscores, and hyphens)
  str = str.replace(/[^a-zA-Z0-9_\-]/g, '')

  // Convert to lowercase for consistency
  str = str.toLowerCase()

  return str
}

// fuction to filter products by category
export function filterProductsByCategory(
  products: ProductType[],
  category: string
): ProductType[] {
  return products.filter(product => product.category === category)
}
