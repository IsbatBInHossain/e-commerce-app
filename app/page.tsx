import Banner from '@/components/Banner'
import Category from '@/components/Category/Category'
import BestDeals from '@/components/Deals/BestDeals'
import Footer from '@/components/Footer'
import NewArrivals from '@/components/Products/NewArrivals'

export default function Home() {
  return (
    <main className=' w-full'>
      <Banner />
      <Category />
      <NewArrivals />
      <BestDeals />
      <Footer />
    </main>
  )
}
