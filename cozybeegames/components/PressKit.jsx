"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { X, Download } from "lucide-react"
import Header from "@/components/home/Header"
import Footer from "@/components/home/Footer"
import ScrollToTopButton from "@/components/ScrollToTopButton"

// Icons used for universal social media links
import { FaDiscord, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"

// Add this at the top of your file with the other imports
// to support the subtle bounce animation for the download button
import { keyframes } from "@emotion/react"

/**
 * UNIVERSAL DATA
 * ---------------------------------------------------
 * Developer, publisher, and press contact are the same for all press kits.
 * Social media is also defined universally for all pages.
 */
const DEVELOPER = ["Éloïse Laroche"]
const PUBLISHER = ["Cozy Bee Games"]
const PRESS_CONTACT = "cozybeegames@gmail.com"
const UNIVERSAL_SOCIAL_MEDIA = [
  { icon: <FaTwitter />, label: "Twitter", link: "https://x.com/EloiseGameDev" },
  { icon: <FaInstagram />, label: "Instagram", link: "https://www.instagram.com/eloisegamedev/" },
  { icon: <FaYoutube />, label: "YouTube", link: "https://www.youtube.com/@CozyBeeGames" },
  { icon: <FaDiscord />, label: "Discord", link: "https://discord.gg/xkvfprt" },
]

// Add this CSS at the top of your file after the imports
const bounceSlow = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`

/**
 * The main PressKit component. Pass in a "game" object as a prop.
 */
export default function PressKit({ game }) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-[#FFFAF5] text-[#5D4037] font-serif">
      <Header />
      <main className="pt-[68px]">
        {/* Banner */}
        <div className="relative h-48 sm:h-64 overflow-hidden">
          <Image
            src={game.bannerImage || "/placeholder.svg"}
            alt={`${game.title} Banner`}
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-30" />
        </div>

        {/* Content */}
        <motion.div
          className="container mx-auto px-4 py-8 md:py-12 max-w-6xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col sm:flex-row sm:gap-12">
            {/* Left column: Cover image & factsheet */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -50 }}
              transition={{ duration: 0.8 }}
              className="w-full sm:w-1/3 space-y-6 mb-8 sm:mb-0"
            >
              {/* Cover image with drop-shadow */}
              <div className="relative flex flex-col justify-center items-center w-full max-w-xs mx-auto sm:mx-0 -mt-24 sm:-mt-40 mb-6">
                <div className="aspect-[2/3] relative z-10 w-full border-2 border-[#5C4033] rounded-lg overflow-hidden">
                  <Image
                    src={game.coverImage || "/placeholder.svg"}
                    alt={`${game.title} Game Art`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-xl"
                  />
                </div>
                <div className="absolute inset-0 bg-[#FFF3E0] blur-xl opacity-75 -z-10 scale-105" />
                <div className="w-full text-center flex flex-col justify-center mt-4">
                  <h1 className="text-2xl font-bold text-[#5D4037] mb-2">{game.title}</h1>
                  {/* If a tagline exists, display it; otherwise omit */}
                  {game.tagline && <p className="text-sm text-[#6D3A25] italic">{game.tagline}</p>}
                </div>
              </div>

              {/* Factsheet card */}
              <Card className="bg-white shadow-md w-full sm:max-w-xs">
                <CardContent className="p-6 space-y-6">
                  {/* Developer, Publisher, Press Contact are universal now */}
                  <FactsheetItem title="Developer" content={DEVELOPER} />
                  <FactsheetItem title="Publisher" content={PUBLISHER} />
                  <FactsheetItem title="Release Date" content={game.releaseDate} />
                  <FactsheetItem title="Platforms">
                    {game.platforms.map((platform, index) => (
                      <SocialButton key={index} icon={platform.icon} label={platform.label} link={platform.link} />
                    ))}
                  </FactsheetItem>
                  <FactsheetItem title="Price" content={[game.price]} />
                  <FactsheetItem title="Press Contact">
                    <a href={`mailto:${PRESS_CONTACT}`} className="text-[#8D6E63] hover:underline">
                      {PRESS_CONTACT}
                    </a>
                  </FactsheetItem>

                  {/* Universal Social Media (shared for all PressKit pages) */}
                  <FactsheetItem title="Social Media">
                    <div className="grid grid-cols-2 gap-2">
                      {UNIVERSAL_SOCIAL_MEDIA.map((social, index) => (
                        <SocialButton key={index} icon={social.icon} label={social.label} link={social.link} />
                      ))}
                    </div>
                  </FactsheetItem>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right column: About, key features, media */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 50 }}
              transition={{ duration: 0.8 }}
              className="w-full sm:w-2/3 space-y-8"
            >
              {/* About section */}
              <section>
                <h2 className="text-3xl font-bold mb-4 border-b-2 border-[#8D6E63] pb-2">About The Game</h2>
                <p className="text-lg text-[#5D4037] leading-relaxed mb-4">{game.about}</p>
              </section>

              {/* Key Features */}
              <section>
                <h2 className="text-3xl font-bold mb-4 border-b-2 border-[#8D6E63] pb-2">Key Features</h2>
                <ul className="list-none space-y-2 text-lg text-[#5D4037]">
                  {game.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-start"
                    >
                      <span className="text-[#8D6E63] mr-2 text-2xl">•</span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </section>

              {/* Media (screenshots) */}
              <section>
                <h2 className="text-3xl font-bold mb-4 border-b-2 border-[#8D6E63] pb-2">Media</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {game.media.map((media, index) => (
                    <ImageWithZoom key={index} src={media.src || "/placeholder.svg"} alt={media.alt} />
                  ))}
                </div>
              </section>
            </motion.div>
          </div>
        </motion.div>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

/**
 * FactsheetItem displays a title and either an array of string content
 * or additional children (e.g., social buttons).
 */
function FactsheetItem({ title, content, children }) {
  return (
    <div>
      <h3 className="text-[#8D6E63] text-lg font-semibold mb-2">{title}</h3>
      {content &&
        content.map((item, index) => (
          <p key={index} className="text-base text-[#5D4037]">
            {item}
          </p>
        ))}
      {children}
    </div>
  )
}

/**
 * SocialButton is a small button that can display an icon and a label,
 * with an optional external link.
 */
function SocialButton({ icon, label, link }) {
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank")
    }
  }

  return (
    <Button
      variant="outline"
      size="sm"
      className="bg-white text-[#8D6E63] border-[#8D6E63] hover:bg-[#8D6E63] hover:text-white transition-all duration-300 w-full"
      onClick={handleClick}
    >
      <div className="flex items-center justify-center w-full">
        {icon}
        <span className="ml-1 truncate">{label}</span>
      </div>
    </Button>
  )
}

function ImageWithZoom({ src, alt }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isModalOpen])

  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  return (
    <>
      {/* UNZOOMED THUMBNAIL */}
      <div
        className="relative aspect-video overflow-hidden rounded-lg shadow-md cursor-pointer group"
        onClick={handleOpenModal}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* The screenshot itself */}
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          className="
            object-cover object-top
            transition-transform duration-300
            group-hover:scale-105
          "
        />

        {/* "Click to Enlarge" overlay appears on hover (centered) */}
        <div
          className="
            absolute inset-0
            flex items-center justify-center
            bg-black/60 text-white
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
          "
        >
          <span className="text-lg font-semibold">Click to Enlarge</span>
        </div>

        {/* Highly visible download button */}
        <div
          className={`
            absolute bottom-3 right-3
            transition-all duration-300 transform
            ${isHovering ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
          onClick={(e) => e.stopPropagation()}
        >
          <a href={src} download>
            <Button
              size="default"
              className="
                bg-[#8D6E63] hover:bg-[#5D4037]
                text-white font-medium
                shadow-lg hover:shadow-xl
                transition-all duration-300
                flex items-center gap-2
                px-4 py-2 rounded-full
                border-2 border-white
              "
            >
              <Download className="h-4 w-4" />
              <span>Download</span>
            </Button>
          </a>
        </div>
      </div>

      {/* ZOOMED MODAL */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
          onClick={handleCloseModal} // Click on overlay closes
        >
          {/* "X" close button top-right */}
          <button
            onClick={handleCloseModal}
            className="absolute top-4 right-4 text-white hover:scale-110 transition-transform"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Image container with download button below */}
          <div
            className="relative z-10 max-w-4xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()} // Don't close if user clicks the image or button
          >
            {/* Enlarged image */}
            <div className="max-h-[70vh] overflow-auto">
              <Image
                src={src || "/placeholder.svg"}
                alt={alt}
                width={1920}
                height={1080}
                className="rounded-t-lg shadow-2xl"
              />
            </div>

            {/* Download button directly under the image */}
            <div
              className="
                w-full  py-4 px-6 rounded-b-lg
                flex justify-center
              "
            >
              <a href={src} download>
                <Button
                  size="lg"
                  className="
                    bg-[#8D6E63] hover:bg-[#5D4037]
                    text-white font-medium
                    shadow-lg hover:shadow-xl
                    transition-all duration-300
                    flex items-center gap-2
                    px-6 py-3 rounded-full
                    border-2 border-white
                  "
                >
                  <Download className="h-5 w-5 mr-1" />
                  <span className="text-base">Download</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

