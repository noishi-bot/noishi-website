import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Features } from '../components/Features'
import { Services } from '../components/Services'
import { Comparison } from '../components/Comparison'
import { Pricing } from '../components/Pricing'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Features />
        <Comparison />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}

