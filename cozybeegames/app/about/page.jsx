'use client'

import { useState, useEffect } from 'react'
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import ScrollToTopButton from '../components/ScrollToTopButton'
import { FaTwitter, FaInstagram } from 'react-icons/fa'

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-[#FFFAF5] text-[#5D4037] font-serif">
      <Header />
      <main className="pt-[68px]">
        <div className="relative bg-gradient-to-b from-[#F0E6D2] to-[#FFFAF5] py-24">
          <div className="absolute inset-0 opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-[#5D4037] mb-4 drop-shadow-lg">
                Meet the Developer
              </h1>
              <p className="text-xl md:text-2xl text-[#8D6E63] max-w-2xl mx-auto italic">
                The heart and soul behind Cozy Bee Games
              </p>
            </motion.div>
          </div>
          <Image
            src="/assets/images/bee-flying.png"
            alt="Flying bee"
            width={100}
            height={100}
            className="absolute bottom-0 right-0 transform translate-y-1/2"
          />
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
                      src="/assets/images/about/eloise-laroche.jpg"
                      alt="Éloïse Laroche"
                      width={300}
                      height={300}
                      className="rounded-full shadow-lg"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h2 className="text-3xl font-bold mb-4 text-[#8D6E63]">Éloïse Laroche</h2>
                    <p className="text-lg mb-4">
                      Founder &amp; Lead Developer of Cozy Bee Games
                    </p>
                    <p className="mb-4">
                      With a passion for creating warm, inviting digital worlds, Éloïse founded Cozy Bee Games to bring joy and relaxation to players around the globe. Her unique blend of technical expertise and artistic vision breathes life into every project.
                    </p>
                    <div className="flex space-x-4">
                      <a href="https://x.com/EloiseGameDev" target="_blank" rel="noopener noreferrer" className="text-[#5D4037] hover:text-[#8D6E63] transition-colors">
                        <FaTwitter className="text-2xl" />
                      </a>
                      <a href="https://www.instagram.com/eloisegamedev/" target="_blank" rel="noopener noreferrer" className="text-[#5D4037] hover:text-[#8D6E63] transition-colors">
                        <FaInstagram className="text-2xl" />
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
              <h2 className="text-3xl font-bold mb-6 text-[#8D6E63]">Our Story</h2>
              <p className="text-lg mb-6">
                Cozy Bee Games was born from Éloïse&apos;s desire to create games that feel like a warm hug. Inspired by her childhood memories of cozy afternoons spent playing video games, she set out to craft experiences that would bring that same sense of comfort and joy to others.
              </p>
              <p className="text-lg mb-6">
                What started as a solo passion project has grown into a beloved indie game studio, with a community of players who share Éloïse&apos;s love for heartwarming, engaging gameplay. Each game is crafted with care, attention to detail, and a sprinkle of magic that makes Cozy Bee Games&apos; titles truly special.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-[#8D6E63]">Our Mission</h2>
              <p className="text-lg mb-6">
                At Cozy Bee Games, our mission is to create digital sanctuaries where players can find comfort, joy, and a sense of belonging. We believe in the power of games to soothe, inspire, and connect people, and we pour this belief into every pixel of our work.
              </p>
              <p className="text-lg mb-6">
                Through our games, we aim to:
              </p>
              <ul className="list-disc list-inside text-lg mb-6 space-y-2">
                <li>Provide a respite from the stresses of everyday life</li>
                <li>Foster a sense of community among our players</li>
                <li>Encourage creativity and self-expression</li>
                <li>Promote mindfulness and relaxation</li>
                <li>Spread joy, one cozy game at a time</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

