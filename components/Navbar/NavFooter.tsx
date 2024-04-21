import { IoMenuOutline } from 'react-icons/io5'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa6'

const NavFooter = () => {
  return (
    <div className='flex justify-between items-center bg-dark-teal-shade text-white py-3 px-14'>
      <div className=' flex items-center gap-9'>
        <div className=' flex items-center gap-2'>
          <IoMenuOutline width={14} height={14} />
          <p>Browse By Category</p>
        </div>
        <p className=' text-xs'>Home</p>
        <p className=' text-xs'>Early Montly Installment</p>
        <p className=' text-xs'>Shop By Brands</p>
        <p className=' text-xs'>Become a Vendor</p>
      </div>
      <div className=' flex gap-6 items-center mr-8'>
        <FaFacebookF width={20} height={20} />
        <FaTwitter width={20} height={20} />
        <FaLinkedinIn width={20} height={20} />
        <FaInstagram width={20} height={20} />
      </div>
    </div>
  )
}
export default NavFooter
