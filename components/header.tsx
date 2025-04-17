'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import {ThemeToggle} from "@/components/theme-dropdown";
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="flex justify-between items-center p-7 shadow-md bg-white">
        {/* Logo */}
        <Link href="/">
          <p className="text-2xl font-bold select-none">Marifkon<sub>uz</sub></p>
        </Link>
        
        <div className="flex space-x-5 items-center">
          {/* Hamburger Menu for Mobile */}
          <button
            className="block md:hidden text-2xl"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            &#9776; {/* Unicode for hamburger icon */}
          </button>

          {/* Theme toggle */}
          <ThemeToggle />

          {/* Navbar Links */}
          <ul
            className={`items-center z-50 absolute md:static top-20 -left-5 w-full md:w-auto md:flex space-y-4 md:space-y-0 md:space-x-4 bg-white md:bg-transparent drop-shadow-md shadow-md md:shadow-none p-4 md:p-0 transition-all duration-300 bg-opacity-80 ${
              isMenuOpen ? 'flex' : 'hidden'
            }`}
          >
            <li onClick={closeMenu}>
              <Link href="/" className="block hover:text-blue-600" >
                Home
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="/about" className="block hover:text-blue-600" >
                About
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="/posts" className="block hover:text-blue-600" >
                Posts
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="/contact-us" className="block hover:text-blue-600" >
                Contact us
              </Link>
            </li>
            <li onClick={closeMenu} className="flex gap-2">
              <SignedOut>
                <SignInButton>
                  <Button variant="ghost">Sign in</Button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
