import { ProductType } from '@/type'

export async function getAllProducts() {
  const response = await fetch('https://fakestoreapi.com/products')
  const data = await response.json()
  return data as ProductType[]
}
