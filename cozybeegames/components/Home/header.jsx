"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { usePathname} from "next/navigation";
import { Button } from "@/components/ui/button";
import { FaSteam } from "react-icons/fa";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Smooth-scroll helper
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = 68; // Adjust based on your header's height
      const targetPosition =
        section.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  };

  // “Games” link click handler
  const handleGamesLinkClick = (e) => {
    // If we’re already on the homepage, override the default <Link> behavior
    if (pathname === "/") {
      e.preventDefault();
      scrollToSection("featured-games");
      setIsMenuOpen(false);
    } else {
      // Otherwise, let Next.js handle navigation to /#featured-games
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#FFF1E6] shadow-lg z-50">
      <nav className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={() => setIsMenuOpen(false)}>
          <Image
            src="/assets/images/CozyBeeGames_Logo_ColorEmpty.png"
            alt="Cozy Bee Games Logo"
            width={60}
            height={60}
            className="hover:rotate-12 transition-transform duration-300 cursor-pointer"
          />
        </Link>

        {/* Navigation Links */}
        <div
          className={`md:flex md:space-x-6 ${
            isMenuOpen
              ? "flex flex-col absolute top-full left-0 right-0 bg-[#FFF1E6] p-4 shadow-md space-y-4"
              : "hidden"
          }`}
        >
          {/* GAMES link goes to /#featured-games */}
          <Link
            href="/#featured-games"
            onClick={handleGamesLinkClick}
            className="text-[#5D4037] font-serif text-lg relative group"
          >
            <span>Games</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#5D4037] transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link
            href="/about"
            onClick={() => setIsMenuOpen(false)}
            className="text-[#5D4037] font-serif text-lg relative group"
          >
            <span>About</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#5D4037] transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="text-[#5D4037] font-serif text-lg relative group"
          >
            <span>Contact</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#5D4037] transition-all duration-300 group-hover:w-full" />
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <Button
            className="bg-[#8D6E63] text-white font-serif hover:bg-[#6D4C41] transition-all duration-300"
            onClick={() =>
              window.open("https://store.steampowered.com/developer/cozybeegames/", "_blank")
            }
          >
            <FaSteam className="mr-2 h-5 w-5" />
            Steam
          </Button>

          {/* Mobile Menu Button */}
          <Button variant="ghost" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
