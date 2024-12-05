'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed z-30 bottom-4 right-4 bg-[#5C4033] text-[#FFF3E0] p-2 rounded-full shadow-md hover:bg-[#5C4033]/90  transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          <div className="relative w-8 h-8 flex items-center justify-center overflow-hidden">
            <motion.svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              animate={{ y: [0, -2, 0] }}
              transition={{ 
                y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
              }}
            >
              <path 
                d="M12 5L5 12H9V19H15V12H19L12 5Z" 
                fill="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </div>
          <motion.div
            className="absolute inset-0 bg-[#7D5A50] rounded-full z-[-1] opacity-0 group-hover:opacity-100"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  )
}