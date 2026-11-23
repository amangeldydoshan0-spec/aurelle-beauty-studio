import { Booking } from './components/Booking'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Masters } from './components/Masters'
import { Philosophy } from './components/Philosophy'
import { RitualStrip } from './components/RitualStrip'
import { Services } from './components/Services'
import { Visit } from './components/Visit'

export default function App() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <RitualStrip />
        <Philosophy />
        <Services />
        <Gallery />
        <Masters />
        <Booking />
        <Visit />
      </main>
      <Footer />
    </>
  )
}
