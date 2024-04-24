import { Button } from './ui/button'

const Banner = () => {
  return (
    <div
      className='bg-contain bg-no-repeat bg-[#f8f2d0] w-full py-10 px-16 flex justify-between items-start relative'
      style={{ backgroundImage: 'url("/assets/cover.png")' }}
    >
      <div className=' p-6 flex flex-col max-w-[490px]'>
        <h1 className=' text-4xl md:text-6xl font-light '>
          Shop <span className=' text-turquoise'>Computer & Experience</span>
        </h1>
        <div className=' text-xs md:text-sm capitalize max-w-[390px] mt-2'>
          <p>
            You cannot inspect quality into the product; it is already there.
          </p>
          <p>
            I am not a product of my circumstances. I am a product of my
            decisions.
          </p>
        </div>
        <Button className=' bg-turquoise-dark hover:bg-dark-teal hover:shadow-sm  mt-2 max-w-[150px]'>
          View More
        </Button>
      </div>
      <div className=' w-32 h-32 md:w-40 md:h-40 bg-gradient-to-r from-[#FDC830] to-[#F37335] rounded-full p-8 text-center'>
        <h2 className=' text-white text-3xl md:text-5xl font-light'>40% Off</h2>
      </div>
    </div>
  )
}
export default Banner
