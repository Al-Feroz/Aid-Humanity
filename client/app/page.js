import UpcomingEvents from '@/components/UpcomingEvents/UpcomingEvents'
import ThirdSection from '@/components/Home_ThirdSection/ThirdSection'
import Achievements from '@/components/Achievements/Achievements'
import Navigation from '@/components/Navigation/Navigation'
import LatestNews from '@/components/LatestNews/LatestNews'
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
      <Achievements />
      <UpcomingEvents />
      <LatestNews />
      <Footer />
    </main>
  )
}
