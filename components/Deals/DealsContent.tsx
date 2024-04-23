import { products } from '@/data'
import DealCard from './DealCard'

const DealsContent = () => {
  return (
    <div className=' grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 pt-7'>
      {products.slice(0, 5).map((product, index) => (
        <DealCard key={product.id} product={product} index={index} />
      ))}
    </div>
  )
}
export default DealsContent
