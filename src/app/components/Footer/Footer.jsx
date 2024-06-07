import React from 'react';

const Footer = ({ darkMode }) => {
  return (
    <>
    <footer className={`py-8 ${darkMode ? 'bg-black' : 'bg-white'}`} 
    style={{
          transition: 'background-image 300ms ease-in-out',
          backgroundImage: `url('${darkMode ? "/assets/darkmode.svg" : "/assets/background.svg"}')`,
        }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pl-7 py-5 lg:py-0 lg:text-left md:text-left sm:text-left text-center 
        w-full sm:w-auto flex flex-wrap justify-between 
        space-y-4 sm:space-y-0 sm:space-x-8 text-${darkMode ? 'white' : 'gray-600'}`}">
          
          <div className="w-full sm:w-auto flex items-center justify-center mb-4 sm:mb-0">
            <div className="ml-4 space-y-3 justify-center items-center">
              <div className='flex items-center'>
                <img src={"/assets/fire.svg"} alt="fire" className="mr-2" />
                <p className={`text-${darkMode ? 'white' : 'black'} text-2xl font-bold`}>uifry</p>
              </div>
              <div className='flex items-center'>
                <img src={"/assets/mail.svg"} alt="mail" className="mr-2" />
                <p className={`text-[15px] ${darkMode ? 'text-white' : 'text-black'}`} >Help@Frybix.Com</p>
              </div>
              <div className='flex items-center'>
                <img src={"/assets/phone.svg"} alt="call" className="mr-2" />
                <p className={`text-[15px] ${darkMode ? 'text-white' : 'text-black'}`}>+1234 456 678 89</p>
              </div>
            </div>
          </div>
          
          {/* Add other footer content here */}

          <div className={`w-full sm:w-auto ${darkMode ? 'text-white' : 'text-black'}`}>
            <h5 className="font-semibold mb-2">Links</h5>
            <ul>
              <li><a href="#" className={`hover:${darkMode ? 'text-white' : 'text-black'}`}>Home</a></li>
              <li><a href="#" className={`hover:${darkMode ? 'text-white' : 'text-black'}`}>About Us</a></li>
              <li><a href="#" className={`hover:${darkMode ? 'text-white' : 'text-black'}`}>Bookings</a></li>
              <li><a href="#" className={`hover:${darkMode ? 'text-white' : 'text-black'}`}>Blog</a></li>
            </ul>
          </div>
          <div className={`w-full sm:w-auto ${darkMode ? 'text-white' : 'text-black'}`}>
            <h5 className="font-semibold mb-2">Legal</h5>
            <ul>
              <li><a href="#" className={`hover:${darkMode ? 'text-white' : 'text-black'}`}>Terms Of Use</a></li>
              <li><a href="#" className={`hover:${darkMode ? 'text-white' : 'text-black'}`}>Privacy Policy</a></li>
              <li><a href="#" className={`hover:${darkMode ? 'text-white' : 'text-black'}`}>Cookie Policy</a></li>
            </ul>
          </div>
          <div className={`w-full sm:w-auto ${darkMode ? 'text-white' : 'text-black'}`}>
            <h5 className="font-semibold mb-2">Product</h5>
            <ul>
              <li><a href="#" className={`hover:${darkMode ? 'text-white' : 'text-black'}`}>Take Tour</a></li>
              <li><a href="#" className={`hover:${darkMode ? 'text-white' : 'text-black'}`}>Live Chat</a></li>
              <li><a href="#" className={`hover:${darkMode ? 'text-white' : 'text-black'}`}>Reviews</a></li>
            </ul>
          </div>
          <div className={`w-full sm:w-auto pt-8 lg:pt-0 md:pt-0 justify-center items-center ${darkMode ? 'text-white' : 'text-black'}`}>
            <h5 className="font-semibold mb-2">Newsletter</h5>
            <h6 className="mb-2">Stay Up To Date</h6>
            <form className="flex flex-col sm:flex-row sm:items-center">
              <input 
                type="email" 
                className={`w-full sm:w-auto py-2 px-4 border border-gray-300 rounded mb-2 sm:mb-0 sm:mr-2 ${darkMode ? 'text-black' : 'text-white'}`} 
                placeholder="Your email" 
              />
              <button 
                type="submit" 
                className={`w-full sm:w-auto bg-black text-white py-2 px-4 rounded ${darkMode ? 'hover:bg-white hover:text-black' : 'hover:bg-gray-900 hover:text-white'}`}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <hr className={`my-8 border-t-2 ${darkMode ? 'border-white' : 'border-gray-300'} w-full mx-auto max-w-7xl`} />
        <div className={`mt-8 text-center ${darkMode ? 'text-white' : 'text-black'}`}>
          <p>Copyright © 2022 Uifry.Com All Rights Reserved</p>
        </div>
      </div>
    </footer>
    </>
  );
}

export default Footer;
