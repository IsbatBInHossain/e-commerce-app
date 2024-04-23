import { ProductType } from '@/type'
import Image from 'next/image'

const DealCard = ({
  product,
  index,
}: {
  product: ProductType
  index: number
}) => {
  const nonDiscounrtedPrice = (product.price * 1.1).toFixed(2)
  const fromColor = [
    'from-[#00C9FF]',
    'from-[#EE9CA7]',
    'from-[#FF512F]',
    'from-[#EECFCC]',
    'from-[#F09819]',
  ][index % 5]
  const toColor = [
    'to-[#92FE9D]',
    'to-[#FFDDE1]',
    'to-[#DD2476]',
    'to-[#EECFCC]',
    'to-[#EDDE5D]',
  ][index % 5]
  const isSpecial = index % 5 == 1

  return (
    <div
      className={`flex flex-col p-6 border relative ${
        isSpecial ? 'lg:row-span-2' : ''
      }`}
    >
      <div className=' flex items-center justify-between w-full pr-12'>
        <div className=' text-[36px]'>
          <span className=' text-turquoise-light block'>Special </span>Offer
        </div>
        <div
          className={`bg-gradient-to-r ${fromColor} ${toColor} rounded-full w-24 aspect-square text-2xl flex flex-col justify-center items-center ${
            isSpecial ? 'lg:w-40 lg:text-4xl' : ''
          }`}
        >
          <span className=' block'>Save</span>
          10%
        </div>
      </div>
      <div className=' flex items-center justify-between w-full'>
        <div className=' flex flex-col'>
          <h3
            className={`max-w-[175px] capitalize text-xl ${
              isSpecial ? 'lg:max-w-full' : ''
            }`}
          >
            {product.title}
          </h3>
          <p className=' text-turquoise-light text-[27px]'>$ {product.price}</p>
          <div className=' relative'>
            <p className=' text-lg'>$ {nonDiscounrtedPrice}</p>
            <div className=' w-20 border absolute border-black bottom-[50%]' />
          </div>
        </div>
        <div
          className={`flex items-center justify-center ${
            isSpecial ? 'lg:absolute' : ''
          }`}
        >
          <Image
            src={product.image}
            alt={product.title}
            width={190}
            height={170}
            className=' object-contain max-h-[170px]'
          />
        </div>
      </div>
    </div>
  )
}
export default DealCard
