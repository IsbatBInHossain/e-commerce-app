'use client'

import { useGetCategoriesQuery } from '@/store/features/apiSlice'
import { updateCategory } from '@/store/features/categorySlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa6'

const DealsHeader = () => {
  const { data } = useGetCategoriesQuery('')
  const categories = data

  const currentCategory = useAppSelector(state => state.category.current)

  const dispatch = useAppDispatch()

  const handleCategoryChange = (selectedCategory: string) => {
    dispatch(updateCategory(selectedCategory))
  }

  return (
    <div className=' flex justify-between items-center '>
      <h2 className=' text-[28px] ml-3'>
        <span className=' text-turquoise-light'>Best </span>Deals
      </h2>

      <div className=' flex gap-6 items-center max-w-[75%]'>
        {categories && (
          <Carousel className='w-full '>
            <CarouselContent className='flex justify-between items-center gap-8'>
              {categories.map(category => (
                <CarouselItem
                  key={category}
                  className='sm:basis-1/2 md:basis-1/3 lg:basis-1/4'
                >
                  <h3
                    key={category}
                    className={`uppercase cursor-pointer text-[19px]  ${
                      category == currentCategory
                        ? ' text-turquoise-light border-b-4 border-turquoise-light border-solid'
                        : ''
                    }`}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </h3>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        )}
      </div>
    </div>
  )
}
export default DealsHeader

// categories.map((category, index) => (

// ))
