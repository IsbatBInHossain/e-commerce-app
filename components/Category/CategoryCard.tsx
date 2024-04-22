import { CategoryType } from '@/type'
import { Card, CardContent } from '../ui/card'

const CategoryCard = ({ category }: { category: CategoryType }) => {
  return (
    <Card
      className='flex aspect-video items-center justify-center p-6 bg-cover relative'
      style={{ backgroundImage: `url(${category.image})` }}
    >
      <CardContent className=' absolute -left-2 bottom-2 bg-slate-50 flex gap-3 items-center py-2 px-4 border border-slate-300  shadoow-md min-w-48 z-10'>
        <h3 className=' text-2xl'>{category.name}</h3>
        <p className=' text-turquoise-light text-xl'>Shop</p>
      </CardContent>
    </Card>
  )
}
export default CategoryCard
