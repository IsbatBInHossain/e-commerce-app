'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import CategoryCard from './CategoryCard'
import { useGetCategoriesQuery } from '@/store/features/apiSlice'

const Category = () => {
  const { data, isLoading, error } = useGetCategoriesQuery('')
  const categories = data

  return (
    <div className=' w-full bg-gradient-to-b from-[#F3EDC9] to-white px-16'>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className='w-full '
      >
        <CarouselContent>
          {categories &&
            categories.map((category, index) => (
              <CarouselItem
                key={index}
                className='sm:basis-1/2 md:basis-1/3 lg:basis-1/4'
              >
                <div className='p-1'>
                  <CategoryCard category={category} />
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
export default Category
