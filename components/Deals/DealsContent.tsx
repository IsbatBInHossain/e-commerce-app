'use client'

import { filterProductsByCategory } from '@/lib/utils'
import DealCard from './DealCard'
import { useGetAllProductsQuery } from '@/store/features/apiSlice'
import { useAppSelector } from '@/store/hooks'
import { ProductType } from '@/type'
import { useEffect, useState } from 'react'

const DealsContent = () => {
  const { data, isSuccess } = useGetAllProductsQuery('')
  const currentCategory = useAppSelector(state => state.category.current)

  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    if (isSuccess && data) {
      setProducts(filterProductsByCategory(data, currentCategory))
    }
  }, [isSuccess, data, currentCategory])

  return (
    <div className=' grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 pt-7'>
      {products.map((product, index) => (
        <DealCard
          key={product.id}
          product={product}
          index={index}
          maxIndex={products.length}
        />
      ))}
    </div>
  )
}
export default DealsContent
