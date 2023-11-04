import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="px-4 sm:px-6 md:px-10 lg:px-16 w-full z-50 text-blue-600 bg-gray-100 py-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center mb-4 sm:mb-0">
          <Link to="/" className="text-blue-800 text-2xl sm:text-4xl font-bold flex items-center space-x-2">
            {/* <p>WithBloom</p> */}
            <img src="https://cdn-icons-png.flaticon.com/128/7059/7059470.png?ga=GA1.1.1685298518.1695204527&track=ais" alt="" className="w-8 h-8 sm:w-10 sm:h-10" />

            <span className=''>WithBloom</span>
          </Link>
        </div>
        <nav className="flex space-x-4 sm:space-x-5">
          
          <Link to="/coins" className="hover:text-blue-300 transition-colors">Coins</Link>
          <Link to="/exchange" className="hover:text-blue-300 transition-colors">Exchange Rate</Link>
        </nav>
      </div>
    </header>
  );
}
