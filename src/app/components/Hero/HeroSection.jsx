import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = ({ darkMode, data }) => {
  const { headline, subheadline, ctaButtons } = data.hero;
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  // Close lightbox when clicking outside the image
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.id === 'lightbox') {
        setIsLightboxOpen(false);
      }
    };

    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, []);
  useEffect(() => {
    AOS.init({ duration: 3000 });
    AOS.refresh();
  }, []);

  return (
    <div className="flex" data-aos="fade-up">
      <div className="md:justify-start lg:justify-start md:items-start lg:items-start text-center md:text-left lg:text-left w-full md:w-1/2 lg:w-1/2 justify-between items-center">
        <div className="flex flex-col">
          <div className="px-4 md:px-1 lg:px-6 py-3 lg:py-8 mt-8 md:mt-20 lg:mt-40 md:ml-16 lg:ml-28">
            <h1 className={`font-bold text-[30px] md:text-[4vw] lg:text-[4vw] mb-2 leading-none ${darkMode ? 'text-white' : 'text-black'}`}>
              {headline}
            </h1>
            <p className={`text-[17px] text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
              {subheadline}
            </p>
            <div className="flex space-x-4 justify-center md:justify-start lg:justify-start">
              {ctaButtons.map((button, index) => (
                <button
                  key={index}
                  className={`flex items-center justify-center px-4 py-2 border rounded-md ${index === 0 ? (darkMode ? 'bg-white text-black hover:bg-black hover:text-white' : 'bg-black text-white hover:bg-white hover:text-black') : (darkMode ? 'bg-gray-800 text-white' : 'text-black')} md:px-3 md:py-2`}
                >
                  {button.text} --&gt;
                </button>
              ))}
            </div>
          </div>
          <div className="md:hidden lg:block px-10 sm:px-15 md:px-15 lg:px-20 pt-5 md:pt-8 lg:pt-8">
            <img alt="herosectionleft" loading="lazy" width="600" height="400" decoding="async" data-nimg="1" className="mt-6 w-full object-cover" src="/assets/HeroLeft.png" style={{ color: 'transparent' }} />
          </div>
        </div>
      </div>
      <div className="hidden md:block lg:block md:w-1/2 lg:w-1/2 text-white flex flex-col justify-center items-center lg:justify-start lg:items-start">
        <img
          alt="herosectionright"
          loading="lazy"
          width="1600"
          height="800"
          decoding="async"
          data-nimg="1"
          src="/assets/herosectionright.svg"
          style={{ color: 'transparent', cursor: 'pointer' }}
          onClick={openLightbox}
        />
      </div>

      {/* Lightbox Modal */}
      <div id="lightbox" className={`fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 transition-opacity duration-300 ${isLightboxOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="relative">
          <button onClick={closeLightbox} className="absolute top-2 right-2 text-white text-2xl">&times;</button>
          <img
            id="lightbox-image"
            src="/assets/herosectionright.svg"
            alt="herosectionright"
            className="max-w-full max-h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
