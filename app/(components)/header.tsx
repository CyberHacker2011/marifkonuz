import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <>
        <header className='flex justify-between px-7 py-3 shadow-md'>
            <p className='text-xl'>Marifkon<sub>uz</sub></p>
            <ul className='flex space-x-4'>
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/about'}>About</Link>
                </li>
                <li>
                    <Link href={'/posts'}>Posts</Link>
                </li>
                <li>
                    <Link href={'/courses'}>Courses</Link>
                </li>
                <li>
                    <Link href={'/resources'}>Resources</Link>
                </li>
                <li>
                    <Link href={'/contact-us'}>Contact us</Link>
                </li>
            </ul>
        </header>
    </>
  )
}

export default Header