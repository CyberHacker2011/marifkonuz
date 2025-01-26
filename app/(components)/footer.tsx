import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className="bg-gray-800 text-gray-300 py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
                <div>
                <h2 className="text-xl font-bold text-white">Marifkonuz</h2>
                <p className="mt-2">Helping you reach your goals and learn.</p>
                </div>

                <div>
                <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                <ul className="mt-4 space-y-2">
                    <li><a href="#" className="hover:text-white">About Us</a></li>
                    <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                </ul>
                </div>

                <div>
                <h3 className="text-lg font-semibold text-white">Follow Us</h3>
                <div className="mt-4 flex space-x-4">
                    <a href="#" className="hover:text-white">Instagram</a>
                    <a href="#" className="hover:text-white">Twitter</a>
                    <a href="#" className="hover:text-white">LinkedIn</a>
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