'use client'

import { useState, useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Gamepad2, Menu } from 'lucide-react'

export default function Header() {
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

  return (
    <header className="fixed top-0 left-0 right-0 bg-background shadow-md z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/assets/images/CozyBeeGames_Logo_ColorEmpty.png"
            alt="Cozy Bee Games Logo" 
            width={80} 
            height={80} 
            className="hover:rotate-12 transition-transform duration-300 cursor-pointer"
          />
        </div>
        <div className={`md:flex space-x-6 ${isMenuOpen ? 'flex flex-col absolute top-full left-0 right-0 bg-background p-4 shadow-md' : 'hidden'}`}>
          <Link className="hover:text-primary transition-colors text-lg hover:scale-110 transform" href="#">Games</Link>
          <Link className="hover:text-primary transition-colors text-lg hover:scale-110 transform" href="#">About</Link>
          <Link className="hover:text-primary transition-colors text-lg hover:scale-110 transform" href="#">Contact</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Button className="bg-primaryButton text-white hover:bg-primaryButtonHover text-lg hover:scale-105 transform transition-all duration-300">
            <Gamepad2 className="mr-2 h-5 w-5" />
            Play Now
          </Button>
          <Button variant="ghost" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </nav>
    </header>
  )
}