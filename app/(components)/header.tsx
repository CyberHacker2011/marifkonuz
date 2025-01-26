'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <header className="flex justify-between items-center p-7 shadow-md bg-white">
        {/* Logo */}
        <p className="text-2xl font-bold select-none">Marifkon<sub>uz</sub></p>
        
        <div className='flex space-x-5 items-center'>
          {/* Hamburger Menu for Mobile */}
          <button
            className="block md:hidden text-2xl"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            &#9776; {/* Unicode for hamburger icon */}
          </button>
          
          {/* Navbar Links */}
          <ul
            className={`z-50 absolute md:static top-20 -left-5 w-full md:w-auto md:flex space-y-4 md:space-y-0 md:space-x-4 bg-white md:bg-transparent drop-shadow-md shadow-md md:shadow-none p-4 md:p-0 transition-all duration-300 bg-opacity-80 ${
              isMenuOpen ? 'block' : 'hidden'
            }`}
          >
            <li>
              <Link href="/" className="block hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="block hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/posts" className="block hover:text-blue-600">
                Posts
              </Link>
            </li>
            <li>
              <Link href="/courses" className="block hover:text-blue-600">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/resources" className="block hover:text-blue-600">
                Resources
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="block hover:text-blue-600">
                Contact us
              </Link>
            </li>
          </ul>
          <select className='absolute right-16 inline-block md:static bg-transparent outline-none'>
            <option>uz</option>
            <option>en</option>
            <option>ru</option>
          </select>
        </div>
      </header>
    </>
  );
};

export default Header;
