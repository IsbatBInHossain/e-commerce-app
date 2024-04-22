'use client'

import Image from 'next/image'
import { useState } from 'react'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { IoPersonOutline } from 'react-icons/io5'

const NavIcons = () => {
  const cartItems = 3
  const [liked, setLiked] = useState(false)

  return (
    <div className=' flex gap-6 justify-between items-center'>
      <IoPersonOutline className=' w-6 h-6' />
      <div onClick={() => setLiked(!liked)} className=' cursor-pointer'>
        {liked ? (
          <FaHeart className=' w-6 h-6' />
        ) : (
          <FaRegHeart className=' w-6 h-6' />
        )}
      </div>
      <div className=' flex items-center gap-0.5 relative'>
        <div className=' absolute -top-3 left-[20%] text-[#FDDE3B]'>
          {cartItems}
        </div>
        <Image
          src='/assets/shopping-cart.svg'
          width={30}
          height={24}
          alt='Cart Logo'
        />
        <p>Cart</p>
      </div>
    </div>
  )
}
export default NavIcons
