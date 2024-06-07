import React from 'react';

const HeroSection = ({ darkMode }) => {
  return (
    <div className="flex">
      <div className="md:justify-start lg:justify-start md:items-start lg:items-start text-center md:text-left lg:text-left w-full md:w-1/2 lg:w-1/2 justify-between items-center">
        <div className="flex flex-col">
          <div className="px-4 md:px-1 lg:px-6 py-3 lg:py-8 mt-8 md:mt-20 lg:mt-40 md:ml-16 lg:ml-28">
            <h1 className={`font-bold text-[30px] md:text-[4vw] lg:text-[4vw] mb-2 leading-none ${darkMode ? 'text-white' : 'text-black'}`}>
              Make The Best Financial Decisions
            </h1>
            <p className={`text-[17px] text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos laborum quisquam vitae in fugiat dio dolorum natus distinctio minus nemo velit.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start lg:justify-start">
              <button className={`flex items-center justify-center px-4 py-2 border rounded-md ${darkMode ? 'bg-gray-800 text-white' : 'bg-black text-white'} md:px-3 md:py-2`}>
                Get Started --&gt;
              </button>
              <button className={`flex items-center justify-center px-4 py-2 border rounded-md ${darkMode ? 'bg-gray-800 text-white' : 'text-black'} md:px-3 md:py-2`}>
                <img src="/assets/watchVideo.svg" alt="Button Icon" className="w-5 h-5 mr-2 md:w-3 md:h-3" />
                Watch Video
              </button>
            </div>
          </div>
          <div className="md:hidden lg:block px-10 sm:px-15 md:px-15 lg:px-20 pt-5 md:pt-8 lg:pt-8">
            <img alt="herosectionleft" loading="lazy" width="600" height="400" decoding="async" data-nimg="1" className="mt-6 w-full object-cover" src="/assets/HeroLeft.png" style={{ color: 'transparent' }} />
          </div>
        </div>
      </div>
      <div className="hidden md:block lg:block md:w-1/2 lg:w-1/2 text-white flex flex-col justify-center items-center lg:justify-start lg:items-start">
        <img alt="herosectionright" loading="lazy" width="1600" height="800" decoding="async" data-nimg="1" src="/assets/herosectionright.svg" style={{ color: 'transparent' }} />
      </div>
    </div>
  );
};

export default HeroSection;
