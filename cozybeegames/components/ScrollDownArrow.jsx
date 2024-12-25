'use client'

import { motion } from "framer-motion"
import { ChevronDown } from 'lucide-react'
import { useEffect, useState } from "react"

export function ScrollToFeaturedGames() {
  const featuredGamesSection = document.getElementById('featured-games')
  if (featuredGamesSection) {
    const headerHeight = 68
    const targetPosition = featuredGamesSection.getBoundingClientRect().top + window.pageYOffset - headerHeight
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })
  }
}

export default function ScrollDownArrow() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsVisible(scrollPosition < 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.3 }}
      onClick={scrollToFeaturedGames}
    >
      <ChevronDown className="w-10 h-10 text-[#5C4033] animate-bounce" />
    </motion.div>
  )
}

