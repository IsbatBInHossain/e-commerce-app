'use client'
// import { products } from '@/products'
// import { getAllProducts } from '@/lib/apis'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'
import ProductCard from './ProductCard'
import { Key, useEffect, useState } from 'react'
import { ProductType } from '@/type'
import { useGetAllProductsQuery } from '@/store/features/apiSlice'

const NewArrivals = () => {
  const { data, isLoading, error } = useGetAllProductsQuery('')
  const products = data

  return (
    <div className=' py-10 px-20 flex flex-col mt-10'>
      <h2 className=' text-[28px] ml-3 mb-4'>
        <span className=' text-turquoise-light'>New </span>Arrivals
      </h2>
      {error ? (
        <>
          <p className=' flex w-full text-red-700 font-semibold'>
            Oh no, there was an error fetching products!
          </p>
        </>
      ) : isLoading ? (
        // TODO Add skeleton element here
        <>Loading...</>
      ) : products ? (
        <Carousel
          opts={{
            align: 'start',
          }}
          className='w-full '
        >
          <CarouselContent>
            {products &&
              products.map((product: ProductType, index: number) => (
                <CarouselItem
                  key={index}
                  className='sm:basid-1/3 md:basis-1/5 lg:basis-1/7'
                >
                  <ProductCard product={product} />
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      ) : null}
    </div>
  )
}
export default NewArrivals
