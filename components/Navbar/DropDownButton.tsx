import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { FaChevronDown } from 'react-icons/fa'

const DropDownButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className=' bg-white p-2 text-slate-400 w-44 text-[13px] rounded-sm'>
        <div className=' flex items-center justify-between min-w-28'>
          <p className=' w-fit'>All Categories</p>
          <div className=' w-6 h-6 flex items-center'>
            <FaChevronDown />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Categories</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Category 1</DropdownMenuItem>
        <DropdownMenuItem>Category 2</DropdownMenuItem>
        <DropdownMenuItem>Category 3</DropdownMenuItem>
        <DropdownMenuItem>Category 4</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default DropDownButton
