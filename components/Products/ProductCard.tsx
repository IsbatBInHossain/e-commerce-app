import { ProductType } from '@/type'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'
import Image from 'next/image'
import { truncateString } from '@/lib/utils'
import { Button } from '../ui/button'
import { useAppDispatch } from '@/store/hooks'
import { addToCart } from '@/store/features/cartSlice'

const ProductCard = ({ product }: { product: ProductType }) => {
  const truncatedTitle = truncateString(product.title, 18)
  const dispatch = useAppDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart())
  }

  return (
    <Card className=' aspect-[0.64] p-[14px] flex flex-col'>
      <CardHeader>
        <CardDescription className=' text-xs capitalize'>
          {product.category}
        </CardDescription>
        <CardTitle className=' text-[15px] text-dark-teal capitalize font-normal'>
          {truncatedTitle}
        </CardTitle>
      </CardHeader>
      <CardContent className=' flex flex-col items-center'>
        <div className=' h-[128px]'>
          <Image
            src={product.image}
            alt={product.title}
            width={158}
            height={128}
            className=' object-contain max-h-[128px]'
          />
        </div>
        <p className=' text-turquoise mt-2'>$ {product.price}</p>
      </CardContent>
      <Button
        className=' bg-turquoise-dark rounded-sm hover:bg-dark-teal'
        onClick={handleAddToCart}
      >
        Add to Cart
      </Button>
    </Card>
  )
}
export default ProductCard
