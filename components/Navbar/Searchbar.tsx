import { Input } from '@/components/ui/input'
import DropDownButton from './DropDownButton'
import { Button } from '@/components/ui/button'
import { FaSearch } from 'react-icons/fa'

const Searchbar = () => {
  return (
    <div className=' flex h-8 lg:h-10'>
      <DropDownButton />
      <Input
        placeholder=' Search for products'
        className=' placeholder:text-slate-400 rounded-sm h-8 lg:h-10'
      />
      <Button
        variant='secondary'
        className=' bg-gray-400 rounded-sm h-8 lg:h-10'
      >
        <div className=' w-4 h-4 lg:w-6 lg:h-6 text-white flex items-center justify-center'>
          <FaSearch />
        </div>
      </Button>
    </div>
  )
}
export default Searchbar
