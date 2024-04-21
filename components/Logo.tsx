import { acme } from '@/app/fonts'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className='flex relative items-center'>
      <div className=' absolute w-[7px] h-[7px] bg-white rounded-full -top-[10px] left-[58px]'></div>
      <div className=' absolute w-[7px] h-[7px] bg-white rounded-full -bottom-[9px] left-[28px]'></div>
      <div className=' absolute w-[7px] h-[7px] bg-white rounded-full -bottom-[9px] left-[44px]'></div>
      <Image src='/assets/logo.svg' width={87.5} height={23.5} alt='Logo' />
      <p className={`${acme.className} pl-1`}>store</p>
    </div>
  )
}
export default Logo
