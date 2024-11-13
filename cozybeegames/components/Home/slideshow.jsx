'use client'

import { useRef, useEffect } from 'react'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Play, ShoppingCart } from 'lucide-react'
import Image from 'next/image'

export default function Slideshow() {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }, [])

  return (
    <div className="relative w-full h-[calc(100vh-88px)] overflow-hidden">
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
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10 bg-black/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl px-4"
        >
          <div className="mb-8">
            <Image
              src="/assets/images/SteamLogo_Rivershine_Text_1280x720.png"
              alt="The Ranch of Rivershine"
              width={600}
              height={200}
              className="mx-auto"
            />
          </div>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Hop, Skip, Jump!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/50 group"
            >
              <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Watch Trailer
            </Button>
            <Button
              size="lg"
              className="bg-[#F5A524] hover:bg-[#FFB94C] text-black group"
            >
              <ShoppingCart className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Buy Now
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Gradient Overlay for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-[#FFE8B5] via-[#FFE8B5]/70 to-transparent" />
    </div>
  )
}