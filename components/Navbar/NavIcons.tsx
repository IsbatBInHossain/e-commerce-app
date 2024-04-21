import Image from 'next/image'
import { FaRegHeart } from 'react-icons/fa'
import { IoPersonOutline } from 'react-icons/io5'

const NavIcons = () => {
  return (
    <div className=' flex gap-6 justify-between items-center'>
      <IoPersonOutline className=' w-6 h-6' />
      <FaRegHeart className=' w-6 h-6' />
      <div className=' flex items-center gap-0.5'>
        <Image src='/assets/cart.svg' width={30} height={24} alt='Cart Logo' />
        <p>Cart</p>
      </div>
    </div>
  )
}
export default NavIcons
