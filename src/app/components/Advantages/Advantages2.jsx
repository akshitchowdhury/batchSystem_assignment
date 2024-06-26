import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Advantages2 = ({ darkMode }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');

  const openLightbox = (image) => {
    setLightboxImage(image);
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
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row" data-aos="fade-up">
      <div className="lg:w-1/2 order-2 lg:order-1">
        <Image 
          src="/assets/advantages2.svg" 
          alt="App Screenshot" 
          layout="responsive" 
          width={600} 
          height={600} 
          className="cursor-pointer"
          onClick={() => openLightbox('/assets/advantages2.svg')}
        />
      </div>
      <div className="lg:w-1/2 flex flex-col justify-center py-8 px-7 lg:pl-32 lg:pr-24 order-1 lg:order-2">
        <div className="flex flex-col mt-4">
          <div className="flex items-center">
            <Image src="/assets/advantageslogo2.svg" alt="Notification Icon" width={40} height={40} />
            <h2 className={`ml-2 text-xl font-semibold ${darkMode ? 'text-white' : ''}`}>Fully Customizable</h2>
          </div>
          <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Acomusan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Leotus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      <div id="lightbox" className={`fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 transition-opacity duration-300 ${isLightboxOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="relative">
          <button onClick={closeLightbox} className="absolute top-2 right-2 text-white text-2xl">&times;</button>
          <Image
            id="lightbox-image"
            src={lightboxImage}
            alt="Lightbox"
            layout="intrinsic"
            width={600}
            height={600}
            className="max-w-full max-h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Advantages2;
