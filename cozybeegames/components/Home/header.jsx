'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FaSteam } from 'react-icons/fa';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = 68; // Adjust based on the header's height
      const targetPosition = section.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#FFF1E6] shadow-lg z-50">
      <nav className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/assets/images/CozyBeeGames_Logo_ColorEmpty.png"
            alt="Cozy Bee Games Logo"
            width={60}
            height={60}
            className="hover:rotate-12 transition-transform duration-300 cursor-pointer"
          />
        </div>

        {/* Navigation Links */}
        <div
          className={`md:flex md:space-x-6 ${
            isMenuOpen
              ? 'flex flex-col absolute top-full left-0 right-0 bg-[#FFF1E6] p-4 shadow-md space-y-4'
              : 'hidden'
          }`}
        >
          <Link
            href="#featured-games"
            onClick={(e) => scrollToSection(e, 'featured-games')}
            className="text-[#5D4037] font-serif text-lg relative group"
          >
            <span>Games</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#5D4037] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/about" className="text-[#5D4037] font-serif text-lg relative group">
            <span>About</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#5D4037] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/contact" className="text-[#5D4037] font-serif text-lg relative group">
            <span>Contact</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#5D4037] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <Button
            className="bg-[#8D6E63] text-white font-serif hover:bg-[#6D4C41] transition-all duration-300"
            onClick={() =>
              window.open('https://store.steampowered.com/developer/cozybeegames/', '_blank')
            }
          >
            <FaSteam className="mr-2 h-5 w-5" />
            Steam
          </Button>
          <Button variant="ghost" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default Header;

