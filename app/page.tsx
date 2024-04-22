import Banner from '@/components/Banner'
import Category from '@/components/Category/Category'
import Footer from '@/components/Footer'
import NewDeals from '@/components/Products/NewDeals'

export default function Home() {
  return (
    <main className=' w-full'>
      <Banner />
      <Category />
      <NewDeals />
      <Footer />
    </main>
  )
}
