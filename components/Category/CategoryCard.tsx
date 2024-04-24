import { toUrlFriendlyString } from '@/lib/utils'
import { Card, CardContent } from '../ui/card'
import { useAppDispatch } from '@/store/hooks'
import { updateCategory } from '@/store/features/categorySlice'

const CategoryCard = ({ category }: { category: string }) => {
  const dispatch = useAppDispatch()

  const handleCategoryChange = (selectedCategory: string) => {
    dispatch(updateCategory(selectedCategory))
  }
  return (
    <Card
      className='flex aspect-[1.36] rounded-md items-center justify-center p-6 bg-cover relative hover:scale-110 duration-200 cursor-pointer'
      style={{
        backgroundImage: `url(/assets/${toUrlFriendlyString(category)}.png)`,
      }}
      onClick={() => handleCategoryChange(category)}
    >
      <CardContent className=' absolute -left-2 bottom-2 bg-slate-50 flex gap-3 items-center py-2 px-4 border border-slate-300 shadoow-md min-w-48 z-10'>
        <h3 className=' text-2xl capitalize'>{category}</h3>
        <p className=' text-turquoise-light text-xl'>Shop</p>
      </CardContent>
    </Card>
  )
}
export default CategoryCard
