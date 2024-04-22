import { products } from '@/data'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'
import ProductCard from './ProductCard'

const NewDeals = () => {
  return (
    <div className=' py-10 px-20 flex flex-col mt-10'>
      <h2 className=' text-[28px] ml-3 mb-4'>
        <span className=' text-turquoise-light'>New </span>Arrivals
      </h2>
      <Carousel
        opts={{
          align: 'start',
        }}
        className='w-full '
      >
        <CarouselContent>
          {products.map((product, index) => (
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
    </div>
  )
}
export default NewDeals
