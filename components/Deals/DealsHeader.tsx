'use client'
import { categories } from '@/data'
import { useState } from 'react'
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa6'

const DealsHeader = () => {
  const n = categories.length
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(Math.min(4, n))
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <div className=' flex justify-between items-center'>
      <h2 className=' text-[28px] ml-3'>
        <span className=' text-turquoise-light'>Best </span>Deals
      </h2>

      <div className=' flex gap-6 items-center'>
        <div className=' flex justify-between items-center gap-8 pr-12'>
          {categories.slice(start, end).map((category, index) => (
            <h3
              key={category.name}
              className={`uppercase text-[19px] basis-1/4 md:basis-1/3 ${
                index == currentIndex
                  ? ' text-turquoise-light border-b-4 border-turquoise-light border-solid'
                  : ''
              }`}
            >
              {category.name}
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
