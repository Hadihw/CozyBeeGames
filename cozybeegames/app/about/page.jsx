'use client'

import { useState, useEffect } from 'react'
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "../../components/ui/card"
import Header from '../../components/home/Header'
import Footer from '../../components/home/Footer'
import ScrollToTopButton from '../../components/ScrollToTopButton'
import { FaTwitter, FaInstagram, FaYoutube, FaDiscord, FaSteam } from 'react-icons/fa'

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-[#FFFAF5] text-[#5D4037] font-serif">
      <Header />
      <main className="pt-[68px]">
        <div className="relative bg-gradient-to-b from-[#F0E6D2] to-[#FFFAF5] pt-20">
          <div className="absolute inset-0 opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center flex flex-col items-center relative"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-[#5D4037] mb-4 drop-shadow-lg">
                Meet the Developer
              </h1>
              <p className="text-xl md:text-2xl text-[#8D6E63] max-w-2xl mx-auto italic relative z-10">
                The heart and soul behind Cozy Bee Games
              </p>

              {/* Bee Image - now visible on all screen sizes and aligned properly */}
              <div className="absolute top-[calc(100%+10px)] right-[10%] sm:right-[12%] md:right-[15%] lg:right-[18%]">
                <Image
                  src="/assets/images/bee-flying.png"
                  alt="Flying bee"
                  width={100}
                  height={100}
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-white shadow-lg overflow-hidden mb-12">
                <CardContent className="p-6 md:p-8 flex flex-col md:flex-row items-center">
                  <div className="md:w-1/3 mb-6 md:mb-0 md:mr-8">
                    <Image
                      src="/assets/images/about/eloise-laroche.png"
                      alt="Éloïse Laroche"
                      width={300}
                      height={300}
                      className="rounded-full shadow-lg"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h2 className="text-3xl font-bold mb-4 text-[#4A2B1B]">Éloïse Laroche</h2>
                    <p className="text-3xl font-dongle mb-4 text-[#4A2B1B] italic">
                      Founder &amp; Lead Developer of Cozy Bee Games
                    </p>
                    <p className="mb-4 font-dongle text-3xl text-[#6D3A25]">
                      With a passion for creating warm, inviting digital worlds, Éloïse founded Cozy Bee Games to bring joy and relaxation to players around the globe. Her unique blend of technical expertise and artistic vision breathes life into every project.
                    </p>
                    <div className="flex space-x-4">
                      <a href="https://x.com/EloiseGameDev" target="_blank" rel="noopener noreferrer" className="text-[#5D4037] hover:text-[#8D6E63] transition-colors">
                        <FaTwitter className="text-2xl" />
                      </a>
                      <a href="https://www.instagram.com/eloisegamedev/" target="_blank" rel="noopener noreferrer" className="text-[#5D4037] hover:text-[#8D6E63] transition-colors">
                        <FaInstagram className="text-2xl" />
                      </a>
                      <a href="https://www.youtube.com/@CozyBeeGames" target="_blank" rel="noopener noreferrer" className="text-[#5D4037] hover:text-[#8D6E63] transition-colors">
                        <FaYoutube className="text-2xl" />
                      </a>
                      <a href="https://discord.gg/xkvfprt" target="_blank" rel="noopener noreferrer" className="text-[#5D4037] hover:text-[#8D6E63] transition-colors">
                        <FaDiscord className="text-2xl" />
                      </a>
                      <a href="https://store.steampowered.com/developer/cozybeegames/" target="_blank" rel="noopener noreferrer" className="text-[#5D4037] hover:text-[#8D6E63] transition-colors">
                        <FaSteam className="text-2xl" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-[#4A2B1B]">Our Story</h2>
              <p className="mb-6 font-dongle text-3xl text-[#6D3A25]">
                Cozy Bee Games was founded by Éloïse in 2021 in Quebec, Canada. What began as a one-woman venture, fueled by creativity and a desire to share meaningful, calming experiences, has since grown into a vibrant studio. From its humble roots, Cozy Bee Games has evolved into a space where passion for cozy, thoughtful gameplay and innovation come together.
              </p>
              <p className="mb-6 font-dongle text-[#6D3A25] text-3xl">
                Join us on our journey as we continue to evolve, create, and inspire, one cozy game at a time!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-[#4A2B1B]">Our Mission</h2>
              <p className="mb-6 font-dongle text-3xl">
                At Cozy Bee Games, we are passionate about fostering creativity, curiosity, and innovation in every project we undertake. As a women-led company, we’re committed to creating a more inclusive and supportive space for women in the gaming world.
              </p>
              <p className="mb-6 font-dongle text-3xl">
                We focus on innovating within the wholesome and cozy game genres, crafting experiences that offer players a peaceful escape from the stresses of daily life. Our goal is to build a positive, welcoming community that encourages creativity and meaningful conversations, while providing players with a restful experience.
              </p>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}
