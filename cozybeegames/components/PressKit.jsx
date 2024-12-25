'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';

export default function PressKit({ game }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFAF5] text-[#5D4037] font-serif">
      <Header />
      <main className="pt-[68px]">
        <div className="relative h-48 sm:h-64 overflow-hidden">
          <Image
            src={game.bannerImage}
            alt={`${game.title} Banner`}
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-30" />
        </div>

        <motion.div className="container mx-auto px-4 py-8 md:py-12 max-w-6xl">
          <div className="flex flex-col sm:flex-row sm:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -50 }}
              transition={{ duration: 0.8 }}
              className="w-full sm:w-1/3 space-y-6 mb-8 sm:mb-0"
            >
              <div className="relative flex flex-col justify-center items-center w-full max-w-xs mx-auto sm:mx-0 -mt-24 sm:-mt-40 mb-6">
                <div className="aspect-[2/3] relative z-10 w-full border-2 border-[#5C4033] rounded-lg overflow-hidden">
                  <Image
                    src={game.coverImage}
                    alt={`${game.title} Game Art`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-xl"
                  />
                </div>
                <div className="absolute inset-0 bg-[#FFF3E0] blur-xl opacity-75 -z-10 scale-105" />
                <div className="w-full text-center flex flex-col justify-center mt-4">
                  <h1 className="text-2xl font-bold text-[#5D4037] mb-2">{game.title}</h1>
                  <p className="text-sm text-[#6D3A25] italic">{game.tagline}</p>
                </div>
              </div>

              <Card className="bg-white shadow-md w-full sm:max-w-xs">
                <CardContent className="p-6 space-y-6">
                  <FactsheetItem title="Developer" content={game.developer} />
                  <FactsheetItem title="Publisher" content={game.publisher} />
                  <FactsheetItem title="Release Date" content={game.releaseDate} />
                  <FactsheetItem title="Platforms">
                    {game.platforms.map((platform, index) => (
                      <SocialButton key={index} icon={platform.icon} label={platform.label} />
                    ))}
                  </FactsheetItem>
                  <FactsheetItem title="Price" content={[game.price]} />
                  <FactsheetItem title="Press Contact">
                    <a href={`mailto:${game.pressContact}`} className="text-[#8D6E63] hover:underline">
                      {game.pressContact}
                    </a>
                  </FactsheetItem>
                  <FactsheetItem title="Social Media">
                    <div className="grid grid-cols-2 gap-2">
                      {game.socialMedia.map((social, index) => (
                        <SocialButton key={index} icon={social.icon} label={social.label} />
                      ))}
                    </div>
                  </FactsheetItem>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 50 }}
              transition={{ duration: 0.8 }}
              className="w-full sm:w-2/3 space-y-8"
            >
              <section>
                <h2 className="text-3xl font-bold mb-4 border-b-2 border-[#8D6E63] pb-2">About The Game</h2>
                <p className="text-lg text-[#5D4037] leading-relaxed mb-4">
                  {game.about}
                </p>
              </section>

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

              <section>
                <h2 className="text-3xl font-bold mb-4 border-b-2 border-[#8D6E63] pb-2">Media</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {game.media.map((media, index) => (
                    <ImageWithZoom key={index} src={media.src} alt={media.alt} />
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
  );
}

function FactsheetItem({ title, content, children }) {
  return (
    <div>
      <h3 className="text-[#8D6E63] text-lg font-semibold mb-2">{title}</h3>
      {content &&
        content.map((item, index) => (
          <p key={index} className="text-base text-[#5D4037]">{item}</p>
        ))}
      {children}
    </div>
  );
}

function SocialButton({ icon, label }) {
  return (
    <Button
      variant="outline"
      size="sm"
      className="bg-white text-[#8D6E63] border-[#8D6E63] hover:bg-[#8D6E63] hover:text-white transition-all duration-300 w-full"
    >
      <div className="flex items-center justify-center w-full">
        {icon}
        <span className="ml-1 truncate">{label}</span>
      </div>
    </Button>
  );
}

function ImageWithZoom({ src, alt }) {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-md cursor-pointer"
      onMouseEnter={() => setIsZoomed(true)}
      onMouseLeave={() => setIsZoomed(false)}
    >
      <Image
        src={src}
        alt={alt}
        width={350}
        height={200}
        className="w-full transition-transform duration-300 transform hover:scale-105"
      />
      <div
        className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
          isZoomed ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="text-white text-lg font-semibold">Click to enlarge</span>
      </div>
    </div>
  );
}
