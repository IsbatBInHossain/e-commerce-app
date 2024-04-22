import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import { categories } from '@/data'
import CategoryCard from './CategoryCard'
import { Card, CardContent } from '../ui/card'

const Category = () => {
  return (
    <div className=' w-full bg-gradient-to-b from-[#F3EDC9] to-white px-16'>
      <Carousel
        opts={{
          align: 'start',
        }}
        className='w-full '
      >
        <CarouselContent>
          {categories.map((category, index) => (
            <CarouselItem key={index} className='md:basis-1/3 lg:basis-1/4'>
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
