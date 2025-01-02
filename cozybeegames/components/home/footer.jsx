'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Twitter, Youtube } from 'lucide-react';
import { FaSteam, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="relative z-10 bg-[#FFF3E0] text-[#8D6E63] py-12 border-t border-[#8D6E63]">
      <div className="container mx-auto px-4">
        {/* Logo and Social Links */}
        <div className="flex flex-col items-center mb-8">
          <Image
            src="/assets/images/CozyBeeGames_Logo_ColorEmpty.png"
            alt="Cozy Bee Games Logo"
            width={80}
            height={80}
            className="mb-4 cursor-pointer hover:rotate-12 transition-transform duration-300"
          />
          <div className="flex items-center space-x-6">
            <Link
              href="https://x.com/EloiseGameDev"
              target="_blank"
              className="hover:text-[#6D4C41] transition-colors hover:scale-125 transform"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.youtube.com/@CozyBeeGames"
              className="hover:text-[#6D4C41] transition-colors hover:scale-125 transform"
              aria-label="YouTube"
            >
              <Youtube className="h-6 w-6" />
            </Link>

            <Link
              href="https://www.instagram.com/eloisegamedev/"
              target="_blank"
              className="hover:text-[#6D4C41] transition-colors hover:scale-125 transform"
              aria-label="Instagram"
            >
              <FaInstagram className="h-6 w-6" />
            </Link>

            <Link
              href="https://store.steampowered.com/developer/cozybeegames/"
              target="_blank"
              className="hover:text-[#6D4C41] transition-colors hover:scale-125 transform"
              aria-label="Steam"
            >
              <FaSteam className="h-6 w-6" />
            </Link>
          </div>
        </div>

        {/* Copyright Information */}
        <div className="text-center text-sm text-[#8D6E63]/80 font-serif">
          © {new Date().getFullYear()} Cozy Bee Games. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

