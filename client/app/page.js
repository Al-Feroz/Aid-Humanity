import ThirdSection from '@/components/Home_ThirdSection/ThirdSection'
import Navigation from '@/components/Navigation/Navigation'
import Carousel from '@/components/Carousel/Carousel'
import Appeals from '@/components/Appeals/Appeals'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Carousel />
      <Appeals />
      <ThirdSection />
      <Footer />
    </main>
  )
}
