export interface CategoryType {
  name: string
  image: string
}

export interface ProductType {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}
