import { acme } from '@/app/fonts'
import Logo from './Logo'

const Navbar = () => {
  return (
    <div className=' bg-dark-teal w-full py-5 px-14 text-white flex justify-between items-center'>
      <div className=' flex gap-10'>
        <Logo />
      </div>
    </div>
  )
}
export default Navbar
