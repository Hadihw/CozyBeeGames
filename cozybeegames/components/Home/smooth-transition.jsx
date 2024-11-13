"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Component() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Create multiple opacity transforms for a layered effect
  const baseOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const gradientOpacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [0, 0.8, 1])

  return (
    <div className="relative">
      {/* Your Slideshow component would go here */}
      <div className="h-screen bg-black/20" /> {/* Placeholder for demo */}
      
      {/* Gradient transition layer */}
      <motion.div 
        ref={ref}
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ opacity: baseOpacity }}
      >
        {/* Multiple gradient layers for a richer effect */}
        <motion.div 
          className="h-96 bg-gradient-to-b from-transparent via-[#FFF3E0]/30 to-[#FFF3E0]"
          style={{ opacity: gradientOpacity }}
        />
        <motion.div 
          className="h-32 bg-[#FFF3E0]"
          style={{ opacity: gradientOpacity }}
        />
      </motion.div>

      {/* Your FeaturedGames component would go here */}
      <div className="min-h-screen bg-[#FFF3E0]" /> {/* Placeholder for demo */}
    </div>
  )
}