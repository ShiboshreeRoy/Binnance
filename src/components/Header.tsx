import React, { useState } from 'react';
import { LogIn, Menu, Search, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#0C0C0C] text-white border-b border-gray-800">
      <div className="px-3 py-3 sm:px-6 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-xl sm:text-2xl font-bold text-yellow-500">Binance</div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-yellow-500">Buy Crypto</a>
              <a href="#" className="hover:text-yellow-500">Markets</a>
              <a href="#" className="hover:text-yellow-500">Trade</a>
              <a href="#" className="hover:text-yellow-500">Derivatives</a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-gray-800 rounded-lg px-3 py-1.5">
              <Search className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent border-none focus:outline-none text-sm ml-2 w-48"
              />
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <button className="px-4 py-1.5 text-sm rounded-lg hover:bg-gray-800">
                Log In
              </button>
              <button className="px-4 py-1.5 text-sm bg-yellow-500 text-black rounded-lg hover:bg-yellow-400">
                Register
              </button>
            </div>
            <button 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-800">
          <div className="px-4 py-2">
            <div className="flex items-center bg-gray-800 rounded-lg px-3 py-1.5 mb-4">
              <Search className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent border-none focus:outline-none text-sm ml-2 w-full"
              />
            </div>
            <nav className="flex flex-col space-y-4 mb-4">
              <a href="#" className="hover:text-yellow-500">Buy Crypto</a>
              <a href="#" className="hover:text-yellow-500">Markets</a>
              <a href="#" className="hover:text-yellow-500">Trade</a>
              <a href="#" className="hover:text-yellow-500">Derivatives</a>
            </nav>
            <div className="flex flex-col space-y-2">
              <button className="w-full py-2 text-sm rounded-lg hover:bg-gray-800">
                Log In
              </button>
              <button className="w-full py-2 text-sm bg-yellow-500 text-black rounded-lg hover:bg-yellow-400">
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}