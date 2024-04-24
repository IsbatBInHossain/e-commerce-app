import { products } from '@/data'
import DealCard from './DealCard'

const DealsContent = () => {
  const end = 12
  return (
    <div className=' grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 pt-7'>
      {products.slice(0, end).map((product, index) => (
        <DealCard
          key={product.id}
          product={product}
          index={index}
          maxIndex={end}
        />
      ))}
    </div>
  )
}
export default DealsContent
