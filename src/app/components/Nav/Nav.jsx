import React, { useRef, useState } from 'react';
import Link from 'next/link';

const Navbar = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const heroRef = useRef(null);
    const advantageRef = useRef(null);
    const featuresRef = useRef(null);
    const pricingRef = useRef(null);
    
    const contactRef = useRef(null);
    const handleClick = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
      };

  return (
    <nav className={`${darkMode ? 'bg-black' : 'bg-white'} pt-10 shadow-md`} style={{
      transition: 'background-image 300ms ease-in-out',
      backgroundImage: `url('${darkMode ? "/assets/darkmode.svg" : "/assets/background.svg"}')`,
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
        <div className='flex items-center'>
                <img src={"/assets/fire.svg"} alt="fire" className="mr-2" />
                <p className={`text-${darkMode ? 'white' : 'black'} text-2xl font-bold`}>uifry</p>
              </div>
              <div className={`hidden md:flex ml-10 space-x-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
  <Link href="/" legacyBehavior onClick={() => handleClick(heroRef)}>
    <a className="relative group">
      Home
      <span className={`absolute left-0 bottom-0 
      w-full h-[2px] transition-transform duration-300 ${darkMode ? 'bg-white' : 'bg-black'}
       transform scale-x-0 group-hover:scale-x-100`}></span>
    </a>
  </Link>
  <Link href="/advantages" legacyBehavior onClick={() => handleClick(advantageRef)}>
    <a className="relative group">
      About Us
      <span className={`absolute left-0 bottom-0 w-full h-[2px] transition-transform duration-300 ${darkMode ? 'bg-white' : 'bg-black'} transform scale-x-0 group-hover:scale-x-100`}></span>
    </a>
  </Link>
  <Link href="/pricing" legacyBehavior onClick={() => handleClick(pricingRef)}>
    <a className="relative group">
      Pricing
      <span className={`absolute left-0 bottom-0 w-full h-[2px] transition-transform duration-300 ${darkMode ? 'bg-white' : 'bg-black'} transform scale-x-0 group-hover:scale-x-100`}></span>
    </a>
  </Link>
  <Link href="/features" legacyBehavior onClick={() => handleClick(featuresRef)}>
    <a className="relative group">
      Features
      <span className={`absolute left-0 bottom-0 w-full h-[2px] transition-transform duration-300 ${darkMode ? 'bg-white' : 'bg-black'} transform scale-x-0 group-hover:scale-x-100`}></span>
    </a>
  </Link>
</div>
        </div>
        <div className="hidden md:flex">
          <button className={`${darkMode ? 'bg-white text-black' : 'bg-black text-white'} py-2 px-4 rounded`}>
            Download
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className={`${darkMode ? 'text-white' : 'text-black'} focus:outline-none`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden -mx-6">
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center ${darkMode ? 'text-white' : 'text-black'}`}>
            <Link href="/" legacyBehavior>
              <a className="block px-3 py-2 rounded-md text-base font-medium">{darkMode ? 'Home' : 'Home'}</a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a className="block px-3 py-2 rounded-md text-base font-medium">{darkMode ? 'About Us' : 'About Us'}</a>
            </Link>
            <Link href="/pricing" legacyBehavior>
              <a className="block px-3 py-2 rounded-md text-base font-medium">{darkMode ? 'Pricing' : 'Pricing'}</a>
            </Link>
            <Link href="/features" legacyBehavior>
              <a className="block px-3 py-2 rounded-md text-base font-medium">{darkMode ? 'Features' : 'Features'}</a>
            </Link>
          </div>
          <div className="px-2 pb-3">
            <button className={`${darkMode ? 'bg-white text-black' : 'bg-black text-white'} w-full py-2 px-4 rounded`}>
              Download
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
