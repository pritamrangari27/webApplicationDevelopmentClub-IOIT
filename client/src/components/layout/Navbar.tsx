'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Globe } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Team', href: '/team' },
  { name: 'Events', href: '/events' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 -ml-24">
            <a 
              href="https://aissmsioit.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <div className="h-12 w-auto rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all overflow-hidden bg-white px-2">
                <Image 
                  src="/images/college-logo.jpeg" 
                  alt="AISSMS IOIT Logo" 
                  width={120} 
                  height={48}
                  className="object-contain h-full w-auto"
                />
              </div>
            </a>
            <a 
              href="https://aissmsioit.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`text-sm font-medium hidden sm:block hover:underline transition-all ${scrolled ? 'text-primary-600' : 'text-white'}`}
            >
              AISSMS Institute of Information Technology, Pune
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  scrolled
                    ? 'text-secondary-700 hover:text-primary-600 hover:bg-primary-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/join" className="ml-4 btn-primary text-sm py-2.5">
              Join Club
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-secondary-900 hover:bg-secondary-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 pb-6' : 'max-h-0'
          }`}
        >
          <div className="bg-white rounded-2xl shadow-xl mt-2 p-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg text-secondary-700 hover:text-primary-600 hover:bg-primary-50 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/join"
                onClick={() => setIsOpen(false)}
                className="block w-full btn-primary text-center"
              >
                Join Club
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
