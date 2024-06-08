import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Advantages1 = ({ darkMode }) => {
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

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-1/2 flex flex-col justify-center py-8 px-7 lg:pl-32 lg:pr-24">
        <h3 className={`text-2xl ${darkMode ? 'text-white' : 'text-orange-500'}`}>ADVANTAGES</h3>
        <h1 className={`text-2xl md:text-4xl lg:text-5xl font-bold ${darkMode ? 'text-white' : ''}`}>Why Choose Uifry?</h1>
        <div className="flex flex-col mt-4">
          <div className="flex items-center">
            <Image src="/assets/advantageslogo1.svg" alt="Notification Icon" width={40} height={40} />
            <h2 className={`ml-2 text-xl font-semibold ${darkMode ? 'text-white' : ''}`}>Clever Notifications</h2>
          </div>
          <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Acomusan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Leotus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.
          </p>
        </div>
      </div>
      <div className="lg:w-1/2">
        <Image 
          src="/assets/advantages1.svg" 
          alt="App Screenshot" 
          layout="responsive" 
          width={600} 
          height={600} 
          className="cursor-pointer"
          onClick={() => openLightbox('/assets/advantages1.svg')}
        />
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

export default Advantages1;
