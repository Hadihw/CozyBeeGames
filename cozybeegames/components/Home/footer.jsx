'use client'

import Image from "next/image"
import Link from "next/link"
import { Twitter, Youtube } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-textPrimary text-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <Image 
            src="/assets/images/CozyBeeGames_Logo_ColorEmpty.png"
            alt="Cozy Bee Games Logo" 
            width={80} 
            height={80} 
            className="mb-4 hover:rotate-12 transition-transform duration-300" 
          />
          <div className="flex items-center space-x-6 mb-6">
            <Link href="#" className="hover:text-primaryButton transition-colors hover:scale-125 transform">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="hover:text-primaryButton transition-colors hover:scale-125 transform">
              <Youtube className="h-6 w-6" />
            </Link>
            <Button className="bg-primaryButton text-white hover:bg-primaryButtonHover hover:scale-105 transform transition-all duration-300 px-6">
              STEAM
            </Button>
          </div>
        </div>
        <div className="flex justify-center space-x-8 text-sm">
          <Link className="hover:text-primaryButton transition-colors" href="#">Privacy Policy</Link>
          <Link className="hover:text-primaryButton transition-colors" href="#">Terms of Service</Link>
          <Link className="hover:text-primaryButton transition-colors" href="#">Contact Us</Link>
        </div>
        <div className="text-center mt-8 text-sm text-background/60">
          © {new Date().getFullYear()} Cozy Bee Games. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
