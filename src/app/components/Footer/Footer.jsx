import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pl-7 py-5 lg:py-0 lg:text-left md:text-left sm:text-left text-center w-full sm:w-auto flex flex-wrap justify-between space-y-4 sm:space-y-0 sm:space-x-8 text-gray-600">
          
          <div className="w-full sm:w-auto flex items-center justify-center mb-4 sm:mb-0">
            <div className="ml-4 space-y-3 justify-center items-center">
              <div className='flex items-center'>
                <img src="/assets/fire.svg" alt="fire" className="mr-2" />
                <p className="text-black text-2xl font-bold">uifry</p>
              </div>
              <div className='flex items-center'>
                <img src="/assets/mail.svg" alt="mail" className="mr-2" />
                <p className='text-[15px]' >Help@Frybix.Com</p>
              </div>
              <div className='flex items-center'>
                <img src="/assets/phone.svg" alt="call" className="mr-2" />
                <p className='text-[15px]'>+1234 456 678 89</p>
              </div>
            </div>
          </div>
          
          <div className="w-full sm:w-auto">
            <h5 className="font-semibold mb-2">Links</h5>
            <ul>
              <li><a href="#" className="hover:text-black">Home</a></li>
              <li><a href="#" className="hover:text-black">About Us</a></li>
              <li><a href="#" className="hover:text-black">Bookings</a></li>
              <li><a href="#" className="hover:text-black">Blog</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-auto">
            <h5 className="font-semibold mb-2">Legal</h5>
            <ul>
              <li><a href="#" className="hover:text-black">Terms Of Use</a></li>
              <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-black">Cookie Policy</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-auto">
            <h5 className="font-semibold mb-2">Product</h5>
            <ul>
              <li><a href="#" className="hover:text-black">Take Tour</a></li>
              <li><a href="#" className="hover:text-black">Live Chat</a></li>
              <li><a href="#" className="hover:text-black">Reviews</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-auto pt-8 lg:pt-0 md:pt-0 justify-center items-center">
            <h5 className="font-semibold mb-2">Newsletter</h5>
            <h6 className="mb-2">Stay Up To Date</h6>
            <form className="flex flex-col sm:flex-row sm:items-center">
              <input 
                type="email" 
                className="w-full sm:w-auto py-2 px-4 border border-gray-300 rounded mb-2 sm:mb-0 sm:mr-2" 
                placeholder="Your email" 
              />
              <button 
                type="submit" 
                className="w-full sm:w-auto bg-black text-white py-2 px-4 rounded"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <hr className="my-8 border-t-2 border-gray-300 w-full mx-auto max-w-7xl" />
        <div className="mt-8 text-center text-black">
          <p>Copyright © 2022 Uifry.Com All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
