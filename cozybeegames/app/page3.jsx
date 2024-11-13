'use client'

import Header from '../components/Home/header'
import Slideshow from '../components/Home/slideshow'
import FeaturedGames from '../components/Home/featuredGames'
import JoinOurHive from '../components/Home/joinUs'
import Footer from '../components/Home/footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-[#6D3A25]">
      <Header />
      <main className="pt-[88px]">
        <Slideshow />
        <FeaturedGames />
        <div className="container mx-auto px-4 py-16">
          <JoinOurHive />
        </div>
      </main>
      <Footer />
    </div>
  )
}