import { Input } from '@/components/ui/input'
import DropDownButton from './DropDownButton'
import { Button } from '@/components/ui/button'
import { FaSearch } from 'react-icons/fa'

const Searchbar = () => {
  return (
    <div className=' flex w-[530px] h-10'>
      <DropDownButton />
      <Input
        placeholder=' Search for products'
        className=' placeholder:text-slate-400 rounded-sm'
      />
      <Button variant='secondary' className=' bg-gray-400 rounded-sm'>
        <div className=' w-6 h-6 text-white flex items-center justify-center'>
          <FaSearch />
        </div>
      </Button>
    </div>
  )
}
export default Searchbar
