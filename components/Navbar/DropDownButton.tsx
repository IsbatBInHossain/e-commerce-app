'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useGetCategoriesQuery } from '@/store/features/apiSlice'
import { updateCategory } from '@/store/features/categorySlice'
import { useAppDispatch } from '@/store/hooks'

import { FaChevronDown } from 'react-icons/fa'

const DropDownButton = () => {
  const { data } = useGetCategoriesQuery('')
  const categories = data
  const dispatch = useAppDispatch()

  const handleCategoryChange = (selectedCategory: string) => {
    dispatch(updateCategory(selectedCategory))
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className=' bg-white p-2 text-slate-400 lg:w-44 md:w-32 hidden md:block text-[13px] rounded-sm'>
        <div className=' flex items-center justify-between min-w-28'>
          <p className=' w-fit'>All Categories</p>
          <div className=' w-6 h-6 flex items-center'>
            <FaChevronDown />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Categories</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {categories &&
          categories.map(category => (
            <DropdownMenuItem
              key={category}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </DropdownMenuItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default DropDownButton
