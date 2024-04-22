import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa6'
import Logo from './Logo'
import Image from 'next/image'
import Copyright from './Copyright'

const Footer = () => {
  return (
    <>
      <div className=' py-14 px-36 bg-[#393939] flex flex-col gap-3 text-white font-light'>
        <div className='flex justify-between flex-wrap'>
          <div className=' flex flex-col gap-[14px]'>
            <Logo />
            <h3 className=' text-turquoise-light text-lg'>
              Got questions? Call us 24/7!
            </h3>
            <div className=' text-[13px]'>
              <p>03 111 666 144</p>
              <p>0317 1777015.</p>
            </div>
            <div>
              <h3 className=' text-turquoise-light text-lg'>Contact info</h3>
              <p className=' text-[13px]'>info@winstore.pk</p>
            </div>
            <div className=' flex gap-6 items-center mr-8'>
              <FaFacebookF width={22} height={22} />
              <FaTwitter width={22} height={22} />
              <FaLinkedinIn width={22} height={22} />
              <FaInstagram width={22} height={22} />
            </div>
          </div>
          <div className=' flex flex-col gap-[21px]'>
            <h3 className=' text-turquoise-light text-xl'>Trending</h3>
            <ul className=' flex flex-col gap-3 capitalize'>
              <li>Installlments</li>
              <li>Eletronics</li>
              <li>Grocery</li>
              <li>Health & Beauty</li>
              <li>Home Appliances</li>
              <li>Mobile Appliances</li>
            </ul>
          </div>
          <div className=' flex flex-col gap-[21px]'>
            <h3 className=' text-turquoise-light text-xl'>Information</h3>
            <ul className=' flex flex-col gap-3 capitalize'>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Shipping & Return</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className=' flex flex-col gap-[21px]'>
            <h3 className=' text-turquoise-light text-xl'>Customer Care</h3>
            <ul className=' flex flex-col gap-3 capitalize'>
              <li>My Account</li>
              <li>Track My Order</li>
              <li>Recently Viewed</li>
              <li>Wishlist</li>
              <li>Compare</li>
              <li>Become A Vendor</li>
            </ul>
          </div>
        </div>
        <div className=' flex gap-3 justify-end'>
          <Image
            src='/assets/visa.png'
            alt='visa card'
            width={96}
            height={54}
          />
          <Image
            src='/assets/mastercard.png'
            alt='mastercard'
            width={96}
            height={54}
          />
          <Image src='/assets/cash.png' alt='cash' width={96} height={54} />
          <Image
            src='/assets/easy_installments.png'
            alt='installments'
            width={96}
            height={54}
          />
        </div>
      </div>
      <Copyright />
    </>
  )
}
export default Footer
