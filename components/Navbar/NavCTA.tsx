import { FaHeadphones } from 'react-icons/fa6'

const NavCTA = () => {
  return (
    <div className='  flex-col justify-center gap-0.5 hidden lg:flex'>
      <p className=' text-[9px]'>Call Us Now</p>
      <div className=' flex gap-2 justify-between items-center'>
        <FaHeadphones className=' w-5 h-5' />
        <p className=' text-xs'>+011 5827918</p>
      </div>
      <p className=' text-sm'>Sign In</p>
    </div>
  )
}
export default NavCTA
