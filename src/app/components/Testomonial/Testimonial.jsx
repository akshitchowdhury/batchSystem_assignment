import React from 'react';

const Testimonial = ({ darkMode }) => {
  return (
    <div className={`flex flex-col items-center p-8 `}>
      <h3 className={`text-gray-500 uppercase tracking-wider text-center ${darkMode ? 'text-white' : ''}`}>Testimonial</h3>
      <h1 className={`text-3xl md:text-4xl font-bold text-center mt-2 ${darkMode ? 'text-white' : 'text-black'}`}>
        What Our Users <br /> Say About Us?
      </h1>
      <div className="flex flex-col md:flex-row items-center mt-8 w-full">
        <div className="w-full md:w-1/2 flex justify-center md:justify-center mb-8 md:mb-0">
          <img src="/assets/testimonial.svg" alt="User Image" width={600} height={600} className="rounded-full" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-auto md:pr-15 lg:pr-20">
          <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>The Best Financial Accounting App Ever!</h2>
          <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            “Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Acomusan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Leotus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.”
          </p>
          <div className="mt-4 flex justify-center md:justify-start">
            <img src="/assets/testimonials2.svg" alt="User Avatars" width={100} height={30} layout="fixed" />
          </div>
          <p className={`mt-2 font-bold ${darkMode ? 'text-gray-300' : 'text-black'}`}>Nick Jonas</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
