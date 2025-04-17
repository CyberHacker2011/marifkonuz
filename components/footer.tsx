import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className=" bg-gray-800 text-gray-300 py-8 px-5">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
                <div>
                <h2 className="text-xl font-bold text-white">Marifkonuz</h2>
                <p className="mt-2">Helping you reach your goals and learn.</p>
                </div>

                <div>
                <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                <ul className="mt-4 space-y-2">
                    <li><Link href={"/about"} className="hover:text-white">About Us</Link></li>
                    <li><Link href={"/about"} className="hover:text-white">Privacy Policy</Link></li>
                    <li><Link href={"/about"} className="hover:text-white">Terms of Service</Link></li>
                </ul>
                </div>

                <div>
                <h3 className="text-lg font-semibold text-white">Follow Us</h3>
                <div className="mt-4 flex space-x-4">
                    <Link href={"https://t.me/marfikonuz"} className="hover:text-white">Telegram</Link>
                    <Link href={"https://t.me/marfikonuz"} className="hover:text-white">Twitter</Link>
                    <Link href={"https://t.me/marfikonuz"} className="hover:text-white">LinkedIn</Link>
                </div>
                </div>
            </div>

            <div className="mt-8 text-center text-sm border-t border-gray-700 pt-4">
                © 2025 Marifkonuz. All Rights Reserved.
            </div>
            </footer>

    </>
    )
}

export default Footer