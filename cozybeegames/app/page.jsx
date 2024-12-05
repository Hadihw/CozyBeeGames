'use client'

import { useRef, useState, useEffect } from 'react'
import ScrollToTopButton from '../components/scrollToTopButton'
import { motion, useScroll, useTransform } from "framer-motion"
import { Play, ShoppingCart, Gamepad2, Menu, Twitter, Youtube, Download, ChevronRight, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import games from '../lib/games'
import { FaSteam } from 'react-icons/fa'

/* --- Slideshow Component --- */
function Slideshow() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="relative w-full h-[calc(100vh-68px)] overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/videos/cozy-bee-games-intro-horses.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl px-4"
        >
          <div>
            <Image
              src="/assets/images/SteamLogo_Rivershine_TextBrown_1280x720.png"
              alt="The Ranch of Rivershine"
              width={600}
              height={200}
              className="mx-auto"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white/10 font-serif backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/50 group"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Trailer
            </Button>
            <Button
              size="lg"
              className="bg-[#5C4033] hover:bg-[#5C4033]/90 font-serif hover:scale-105"
              onClick={() => window.open('https://store.steampowered.com/app/1559600/The_Ranch_of_Rivershine/?curator_clanid=36314378', '_blank')}
            >
              <FaSteam className="mr-2 h-5 w-5" />
              Play Now
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Adjusted Gradient Overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-20"
        style={{ bottom: '-50px' }} // Move the gradient down by 50px
      >
        {/* First gradient layer - subtle start */}
        <div className="h-24 bg-gradient-to-b from-transparent to-[#FFF3E0]/30"></div>
        {/* Second gradient layer - middle transition */}
        <div className="h-24 bg-gradient-to-b from-[#FFF3E0]/30 to-[#FFF3E0]/70"></div>
        {/* Third gradient layer - final blend */}
        <div className="h-24 bg-gradient-to-b from-[#FFF3E0]/70 to-[#FFF3E0]"></div>
        {/* Solid color base to ensure perfect blend */}
        <div className="h-12 bg-[#FFF3E0]"></div>
      </div>
    </div>
  );
}

/* --- Header Component --- */
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const scrollToFeaturedGames = (e) => {
    e.preventDefault()
    const featuredGamesSection = document.getElementById('featured-games')
    if (featuredGamesSection) {
      const headerHeight = 68;
      const targetPosition = featuredGamesSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
        duration: 1500
      });
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#FFF1E6] shadow-lg z-50">
      <nav className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/assets/images/CozyBeeGames_Logo_ColorEmpty.png"
            alt="Cozy Bee Games Logo"
            width={60}
            height={60}
            className="hover:rotate-12 transition-transform duration-300 cursor-pointer"
          />
        </div>
        <div className={`md:flex md:space-x-6 ${isMenuOpen ? 'flex flex-col absolute top-full left-0 right-0 bg-[#FFF1E6] p-4 shadow-md space-y-4' : 'hidden'}`}>
          <Link href="#featured-games" onClick={scrollToFeaturedGames} className="relative group">
            <span className="text-[#5D4037] font-dongle text-3xl">Games</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#5D4037] transition-all duration-300 group-hover:w-full md:block hidden"></span>
          </Link>
          <Link href="/about" className="relative group">
            <span className="text-[#5D4037] font-dongle text-3xl">About</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#5D4037] transition-all duration-300 group-hover:w-full md:block hidden"></span>
          </Link>
          <Link href="/contact" className="relative group">
            <span className="text-[#5D4037] font-dongle text-3xl">Contact</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#5D4037] transition-all duration-300 group-hover:w-full md:block hidden"></span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Button className="bg-[#5C4033] font-serif hover:bg-[#5C4033]/90 transform transition-all duration-300"
            onClick={() => window.open('https://store.steampowered.com/developer/cozybeegames/', '_blank')}

          >
            <FaSteam className="mr-2 h-5 w-5" />
            Steam
          </Button>
          <Button variant="ghost" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </nav>
    </header>
  )
}

/* --- FeaturedGames Component --- */
function FeaturedGames() {
  const [hoveredGame, setHoveredGame] = useState(null);

  return (
    <section id="featured-games" className="py-8 sm:8 bg-[#FFF3E0]">
      <div className="container mx-auto px-4">
        <h2 className="text-7xl md:text-7xl lg:text-8xl text-center mb-12 text-[#5C4033] font-dongle">Featured Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {games.map((game) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <Card
                className="bg-white font-serif overflow-hidden rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col"
                onMouseEnter={() => setHoveredGame(game.id)}
                onMouseLeave={() => setHoveredGame(null)}
              >
                <div className="relative w-full h-0 pb-[46.7%] overflow-hidden">
                  <Image
                    src={game.image}
                    alt={game.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-4 sm:p-6 flex flex-col flex-grow">
                  <h3 className="text-4xl sm:text-4xl font-dongle text-[#4A2B1B]">{game.title}</h3>
                  <p className="mb-4 text-[#6D3A25] line-clamp-2 flex-grow">{game.description}</p>
                  <div className="flex gap-3 mt-auto">
                    <motion.div
                      className="flex-1"
                      initial={false}
                      animate={{ width: hoveredGame === game.id ? "50%" : "auto" }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <a
                        href={game.pressKitLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button
                          variant="outline"
                          className="w-full h-10 border-[#5C4033] text-[#5C4033] hover:bg-[#5C4033] hover:text-[#FFF3E0] transition-all duration-300 group"
                        >
                          <Download className="mr-2 h-4 w-4" />
                          <span className="hidden sm:inline font-bold font-serif">Press Kit</span>
                          <span className="sm:hidden font-bold font-serif">Kit</span>
                          <ChevronRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Button>
                      </a>
                    </motion.div>
                    <motion.div
                      className="flex-1"
                      initial={false}
                      animate={{ width: hoveredGame === game.id ? "50%" : "auto" }}
                      transition={{ duration: 0.3 }}
                    >
                      <a
                        href={game.playNowLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button
                          className="w-full h-10 bg-[#5C4033] font-serif hover:bg-[#5C4033]/90 transition-all duration-300 group"
                        >
                          <Play className="mr-2 h-4 w-4" />
                          <span className="hidden sm:inline font-serif">Play Now</span>
                          <span className="sm:hidden font-serif">Play</span>
                          <ChevronRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Button>
                      </a>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* --- JoinOurNewsletter Component --- */
function JoinOurNewsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // handle the newsletter subscription
    console.log('Subscribing email:', email)
    // Reset the email input
    setEmail('')
  }

  return (
    <section className="relative overflow-hidden bg-white p-8 rounded-3xl shadow-lg border-2 border-[#5C4033]">
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-4 text-[#5C4033] font-serif">Join Our Newsletter</h2>
        <p className="mb-6 text-lg text-[#5C4033] max-w-2xl mx-auto">
          Stay updated with the latest buzz! Get exclusive game updates, behind-the-scenes content, and sweet deals delivered right to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow bg-white/50 border-[#5C4033] text-[#5D4037] placeholder-[#5C4033]/60"
            required
          />
          <Button 
            type="submit"
            className="bg-[#5C4033] text-white hover:bg-[#4A2B1B] transition-all duration-300 font-serif"
          >
            <Mail className="mr-2 h-5 w-5" />
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  )
}

/* --- Footer Component --- */
function Footer() {
  return (
    <footer className="relative z-10 bg-[#FFCC80] text-[#5D4037] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <Image
            src="/assets/images/CozyBeeGames_Logo_ColorEmpty.png"
            alt="Cozy Bee Games Logo"
            width={80}
            height={80}
            className="mb-4 cursor-pointer hover:rotate-12 transition-transform duration-300"
          />
          <div className="flex items-center space-x-6">
            <Link href="#" className="hover:text-[#FFA726] transition-colors hover:scale-125 transform">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="hover:text-[#FFA726] transition-colors hover:scale-125 transform">
              <Youtube className="h-6 w-6" />
            </Link>
            <Link href="https://store.steampowered.com/app/255510/The_Ranch_of_Rivershine/" className="hover:text-[#FFA726] transition-colors hover:scale-125 transform">
              <FaSteam className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div className="text-center text-sm text-[#5D4037]/60">
          © {new Date().getFullYear()} Cozy Bee Games. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

/* --- HomePage Component --- */
export default function HomePage() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [0, 1])
  const scale = useTransform(scrollY, [0, 300], [1, 1.0])

  return (
    <div className="min-h-screen bg-[#FFF3E0] text-[#5D4037]">
      <Header />
      <main className="relative">
        <div className="fixed top-[68px] left-0 right-0 z-10">
          <Slideshow />
        </div>
        <motion.div 
          className="relative z-20 mt-[calc(100vh-68px)]"
          style={{ opacity, scale }}
        >
 {/* Multi-Layered Gradient without absolute positioning */}
          <div>
            {/* First gradient layer - subtle start */}
            <div className="h-48 bg-gradient-to-b from-transparent to-[#FFF3E0]/20"></div>
            {/* Second gradient layer - middle transition */}
            <div className="h-48 bg-gradient-to-b from-[#FFF3E0]/20 to-[#FFF3E0]/80"></div>
            {/* Third gradient layer - final blend */}
            <div className="h-48 bg-gradient-to-b from-[#FFF3E0]/80 to-[#FFF3E0]"></div>
            {/* Solid color base to ensure perfect blend */}
            <div className="h-24 bg-[#FFF3E0]"></div>
          </div>          
          <div className="bg-[#FFF3E0]">
            <FeaturedGames />
            <div className="container mx-auto px-4 py-16">
              <JoinOurNewsletter />
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}
