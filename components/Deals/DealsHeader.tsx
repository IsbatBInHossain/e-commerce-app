'use client'

import { useGetCategoriesQuery } from '@/store/features/apiSlice'
import { updateCategory } from '@/store/features/categorySlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { useEffect, useRef, useState } from 'react'
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
    <div className=' flex justify-between items-center max-w-full'>
      <h2 className=' text-[28px] ml-3'>
        <span className=' text-turquoise-light'>Best </span>Deals
      </h2>

      <div className=' flex gap-6 items-center'>
        <div className=' flex justify-between items-center gap-8 pr-12'>
          {categories &&
            categories.map((category, index) => (
              <h3
                key={category}
                className={`uppercase cursor-pointer text-[19px] ${
                  category == currentCategory
                    ? ' text-turquoise-light border-b-4 border-turquoise-light border-solid'
                    : ''
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </h3>
            ))}
        </div>
        <div className=' flex gap-3 items-center'>
          <FaCaretLeft className=' w-4 h-4' />
          <FaCaretRight className=' w-4 h-4' />
        </div>
      </div>
    </div>
  )
}
export default DealsHeader
