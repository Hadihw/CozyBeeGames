'use client'

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, ChevronRight } from 'lucide-react';
import { motion } from "framer-motion";
import games from '../../lib/games';
import { FaSteam } from 'react-icons/fa';

export default function FeaturedGames() {
  const [hoveredGame, setHoveredGame] = useState(null);

  return (
    <section className="py-12 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {games.map((game) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <Card 
                className="bg-white overflow-hidden rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col"
                onMouseEnter={() => setHoveredGame(game.id)}
                onMouseLeave={() => setHoveredGame(null)}
              >
                <div className="relative w-full h-0 pb-[46.7%] overflow-hidden">
                  <Image
                    src={game.image}
                    alt={game.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-4 sm:p-6 flex flex-col flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-[#6D3A25]">{game.title}</h3>
                  <p className="mb-4 text-[#8B4B2E] line-clamp-2 flex-grow">{game.description}</p>
                  <div className="flex gap-3 mt-auto">
                    <motion.div
                      className="flex-1"
                      initial={false}
                      animate={{ width: hoveredGame === game.id ? "50%" : "auto" }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <Button variant="outline" className="w-full h-10 border-[#6D3A25] text-[#6D3A25] hover:bg-[#6D3A25] hover:text-[#FFE8B5] transition-all duration-300 group">
                        <Download className="mr-2 h-4 w-4" />
                        <span className="hidden sm:inline">Press Kit</span>
                        <span className="sm:hidden">Kit</span>
                        <ChevronRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </Button>
                    </motion.div>
                    <motion.div
                      className="flex-1"
                      initial={false}
                      animate={{ width: hoveredGame === game.id ? "50%" : "auto" }}
                      transition={{ duration: 0.3 }}
                    >
                      <Button className="w-full h-10 bg-[#188857] text-white hover:bg-primaryButtonHover transition-all duration-300 group">
                        <FaSteam className="mr-2 h-4 w-4" />
                        <span className="hidden font-bold sm:inline">Steam</span>
                        <span className="sm:hidden">Play</span>
                        <ChevronRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
