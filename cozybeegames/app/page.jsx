'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Play,
  Download,
  ChevronRight,
  Mail,
  ChevronDown,
  X
} from 'lucide-react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { FaSteam } from 'react-icons/fa'
import ScrollToTopButton from '../components/ScrollToTopButton'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'

import games from '../lib/games'


/* ----------------------------------------------------------------
  TrailerModal Component
  - Sits at z-[9999] so it's on top of everything
  - Locks background scroll
  - Pointer events are enabled, so we can click inside it
---------------------------------------------------------------- */
function TrailerModal({ isOpen, onClose }) {
  // Lock background scroll when the modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // If the modal is not open, don’t render anything
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-black bg-opacity-80 pointer-events-auto" onClick={onClose}>
      {/* Close button on the black overlay */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:scale-110 transition-transform"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Center the video container */}
      <div className="flex h-full w-full items-center justify-center p-4">
        {/* 16:9 Aspect Ratio Container */}
        <div className="relative w-full max-w-4xl max-h-[80vh] overflow-hidden">
          <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src="https://www.youtube.com/embed/eThGecVYiiI"
              title="The Ranch of Rivershine Trailer"
              frameBorder="0"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

/* -----------------------------------------------------------------
  ScrollDownArrow Component
---------------------------------------------------------------- */
function ScrollDownArrow() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsVisible(scrollPosition < 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToFeaturedGames = () => {
    const featuredGamesSection = document.getElementById('featured-games')
    if (featuredGamesSection) {
      const headerHeight = 68
      const targetPosition =
        featuredGamesSection.getBoundingClientRect().top +
        window.pageYOffset -
        headerHeight
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <motion.div
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 cursor-pointer"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.3 }}
      onClick={scrollToFeaturedGames}
    >
      <ChevronDown className="w-10 h-10 text-[#5C4033] animate-bounce" />
    </motion.div>
  )
}

/* ----------------------------------------------------------------
  Slideshow Component
  - No longer holds its own "isTrailerOpen" state
  - Instead calls a prop function "openTrailer()" to open
---------------------------------------------------------------- */
function Slideshow({ openTrailer }) {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }, [])

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

      {/* Content Overlay (Buttons, Title, etc.) */}
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

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            {/* Watch Trailer -> triggers parent's openTrailer() */}
            <Button
              size="lg"
              className="bg-white/10 font-serif backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/50 group text-lg"
              onClick={openTrailer}
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Trailer
            </Button>

            {/* Play Now -> opens Steam link */}
            <Button
              size="lg"
              className="bg-[#5C4033] hover:bg-[#5C4033]/90 font-serif hover:scale-105 text-lg"
              onClick={() =>
                window.open(
                  'https://store.steampowered.com/app/1559600/The_Ranch_of_Rivershine/?curator_clanid=36314378',
                  '_blank'
                )
              }
            >
              <FaSteam className="mr-2 h-5 w-5" />
              Play Now
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-20"
        style={{ bottom: '-50px' }}
      >
        {/* Gradient Layers */}
        <div className="h-24 bg-gradient-to-b from-transparent to-[#FFFAF5]/30 z-10"></div>
        <div className="h-24 bg-gradient-to-b from-[#FFFAF5]/30 to-[#FFFAF5]/70"></div>
        <div className="h-24 bg-gradient-to-b from-[#FFFAF5]/70 to-[#FFFAF5]"></div>
        <div className="h-12 bg-[#FFFAF5]"></div>
      </div>
    </div>
  )
}

/* ----------------------------------------------------------------
  FeaturedGames Component
---------------------------------------------------------------- */
function FeaturedGames() {
  const [hoveredGame, setHoveredGame] = useState(null)

  return (
    <section id="featured-games" className="py-8 sm:8 bg-[#FFFAF5]">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-7xl md:text-7xl lg:text-8xl text-center mb-12 text-[#5C4033] font-dongle">
          Featured Games
        </h2> */}
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
                {/* Game Image */}
                <div className="relative w-full h-0 pb-[46.7%] overflow-hidden">
                  <Image
                    src={game.image}
                    alt={game.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
                {/* Game Info */}
                <CardContent className="p-4 sm:p-6 flex flex-col flex-grow">
                  <h3 className="text-3xl sm:text-3xl text-[#4A2B1B]">
                    {game.title}
                  </h3>
                 <p className="mb-4 mt-4 text-[#6D3A25] text-3xl font-dongle line-clamp-2 flex-grow leading-none">
                    {game.description}
                  </p>
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
                          className="w-full h-10 border-[#5C4033] text-[#5C4033] hover:bg-[#5C4033] hover:text-[#FFFAF5] transition-all duration-300 group"
                        >
                          <Download className="mr-2 h-4 w-4" />
                          <span className="hidden sm:inline font-bold text-lg font-serif">
                            Press Kit
                          </span>
                          <span className="sm:hidden font-bold font-serif">
                            Kit
                          </span>
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
                          <Play className="mr-2 h-4 w-4 font-bold" />
                          <span className="hidden sm:inline font-serif text-lg">
                            Play Now
                          </span>
                          <span className="sm:hidden font-serif">
                            Play
                          </span>
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
  )
}

/* ----------------------------------------------------------------
  JoinOurNewsletter Component
---------------------------------------------------------------- */
function JoinOurNewsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Subscribing email:', email)
    setEmail('')
  }

  return (
    <section className="relative overflow-hidden bg-white p-8 rounded-3xl shadow-lg border-2 border-[#5C4033]">
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-4 text-[#5C4033] font-serif text-center">
          Join Our Newsletter
        </h2>
        <p className="mb-6 text-3xl leading-none font-dongle text-[#6D3A25] max-w-2xl mx-auto text-center">
        Join our newsletter to be notified when Cozy Bee Games releases a new game!
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
            className="bg-[#5C4033] text-lg text-white hover:bg-[#4A2B1B] transition-all duration-300 font-serif"
          >
            <Mail className="mr-2 h-5 w-5" />
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
  HomePage (MAIN) Component
  - Manages the "isTrailerOpen" state
  - Renders the entire site in a wrapper that toggles pointer-events
  - Renders the TrailerModal at the end, on top
---------------------------------------------------------------- */
export default function HomePage() {
  const [isTrailerOpen, setIsTrailerOpen] = useState(false)

  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [0, 1])
  const scale = useTransform(scrollY, [0, 300], [1, 1.0])

  // If the modal is open, we add pointer-events-none to the background wrapper
  // so the header/arrow etc. won't be clickable
  const backgroundClasses = isTrailerOpen
    ? 'pointer-events-none'
    : 'pointer-events-auto'

  return (
    <>
      {/* The entire page content is in one wrapper that toggles pointer-events */}
      <div className={`min-h-screen bg-[#FFFAF5] text-[#5D4037] ${backgroundClasses}`}>
        <Header />  {/* z-10 */}
        <main className="relative">
          <div className="fixed top-[68px] left-0 right-0 z-10">
            {/* Pass a callback to Slideshow to open the modal */}
            <Slideshow openTrailer={() => setIsTrailerOpen(true)} />
          </div>

          <motion.div
            className="relative z-20 mt-[calc(100vh-68px)]"
            style={{ opacity, scale }}
          >
            {/* Multi-Layered Gradient */}
            <div>
              <div className="h-48 bg-gradient-to-b from-transparent to-[#FFFAF5]/20"></div>
              <div className="h-48 bg-gradient-to-b from-[#FFFAF5]/20 to-[#FFFAF5]/80"></div>
              <div className="h-48 bg-gradient-to-b from-[#FFFAF5]/80 to-[#FFFAF5]"></div>
              <div className="h-24 bg-[#FFFAF5]"></div>
            </div>

            <div className="bg-[#FFFAF5]">
              <FeaturedGames />
              <div className="container mx-auto px-4 py-16">
                <JoinOurNewsletter />
              </div>
            </div>
          </motion.div>
        </main>
        <Footer />
        <ScrollToTopButton />
        <ScrollDownArrow />
      </div>

      {/* Trailer Modal is rendered last (on top) and has pointer-events-auto */}
      <TrailerModal
        isOpen={isTrailerOpen}
        onClose={() => setIsTrailerOpen(false)}
      />
    </>
  )
}
