import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/header-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="px-5 py-8 bg-white shadow-md top-0 sticky z-50">
      <nav className="flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="logo" className="h-10" />
        </Link>

        <div className="lg:hidden" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8 text-black cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>

        {/* Dekstop  */}
        <div className="hidden lg:flex items-center gap-5 text-black font-semibold">
          <ul className="flex gap-5">
            <li className="hover:text-custom-primary cursor-pointer hover:shadow-sm">Home</li>
            <li className="hover:text-custom-primary cursor-pointer hover:shadow-sm">About</li>
            <li className="hover:text-custom-primary cursor-pointer hover:shadow-sm">Service</li>
            <li className="hover:text-custom-primary cursor-pointer hover:shadow-sm">Gallery</li>
            <li className="hover:text-custom-primary cursor-pointer hover:shadow-sm">Promotions</li>
            <li className="hover:text-custom-primary cursor-pointer hover:shadow-sm">Blogs</li>
            <li className="hover:text-custom-primary cursor-pointer hover:shadow-sm">Contact Us</li>
          </ul>
          <button className="px-5 py-2 rounded-md bg-custom-primary text-white">Appointment</button>
        </div>
      </nav>

       {/* Mobile */}
      <div
        className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white p-5 shadow-md`}
      >
        <ul className="flex flex-col gap-5 text-black font-semibold">
          <li className="hover:text-custom-primary cursor-pointer hover:shadow-sm">Home</li>
          <li className="hover:text-custom-primary cursor-pointer hover:shadow-sm">About</li>
          <li className="hover:text-custom-primary cursor-pointer hover:shadow-sm">Service</li>
          <li className="hover:text-custom-primary cursor-pointer hover:shadow-sm">Gallery</li>
          <li className="hover:text-custom-primary cursor-pointer hover:shadow-sm">Promotions</li>
          <li className="hover:text-custom-primary cursor-pointer hover:shadow-sm">Blogs</li>
          <li className="hover:text-custom-primary cursor-pointer hover:shadow-sm">Contact Us</li>
        </ul>
        <button className="w-full py-2 mt-5 rounded-md bg-custom-primary text-white">Appointment</button>
      </div>
    </header>
  );
};

export default Header;
