import Logo from '../Logo'
import NavCTA from './NavCTA'
import NavFooter from './NavFooter'
import NavIcons from './NavIcons'
import Searchbar from './Searchbar'

const Navbar = () => {
  return (
    <div className=' flex flex-col w-full'>
      <div className=' bg-dark-teal w-full py-5 px-14 text-white flex justify-between items-center'>
        <div className=' flex gap-10'>
          <Logo />
          <Searchbar />
        </div>
        <div className=' flex gap-7 items-center'>
          <NavCTA />
          <NavIcons />
        </div>
      </div>
      <NavFooter />
    </div>
  )
}
export default Navbar
