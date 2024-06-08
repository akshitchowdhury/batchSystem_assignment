import React from 'react';

const FreqAskQstn = ({ darkMode }) => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className={`text-3xl font-extrabold ${darkMode ? 'text-white' : 'text-black'} sm:text-4xl`}>Frequently Asked Questions</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-12">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div
              key={index}
              className={`p-6 hover:scale-105
              transition ease-in-out duration-300 rounded-lg shadow-lg ${
                [1, 4, 5].includes(index) ? (darkMode ? 'bg-red-800 text-black hover:bg-red-200' : 'bg-red-300 text-white hover:bg-red-800') : 
                (darkMode ? 'bg-black text-white hover:bg-white hover:text-black' : 'bg-white text-black hover:bg-black hover:text-white')
              }`}
            >
              <h3 className="text-xl font-bold mb-2">
                The Best Financial Accounting App Ever!
              </h3>
              <p>
                “Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Acoumsan, Ultricies. In Ultrices Malesuada Elit Mauris.”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreqAskQstn;
