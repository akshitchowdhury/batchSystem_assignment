import React from 'react';

const Features = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 md:p-8">
      <div className="w-full md:w-1/2 flex justify-center md:justify-center mb-8 md:mb-0">
        <img src="/assets/features.svg" alt="Uifry Premium" width={1600} height={800} />
        {/* <img src="/assets/images/features.svg" alt="Uifry Premium" className="w-full max-w-xs md:max-w-md h-80 md:h-96" /> */}
      </div>
      <div className="w-full md:w-1/2 text-center justify-center items-center my-auto md:text-left pr-5 md:pr-15 lg:pr-20">
        <h2 className="text-orange-500 text-lg font-bold mb-2">FEATURES</h2>
        <h1 className="text-3xl font-bold mb-6">Uifry Premium</h1>
        <div className="space-y-4">
          <div className="flex items-start space-x-1">
            <div>
              <div className='flex flex-row justify-center md:justify-start lg:justify-start'>
                <img src="/assets/star.svg" alt="Icon 1" className="h-4 w-4 mt-1 mr-1" />
                <p className="text-lg font-semibold">Budgeting Intervals</p>
              </div>
              <p className="text-gray-600">Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
            </div>
          </div>
          <div className="flex items-start space-x-1">
            <div>
              <div className='flex flex-row justify-center md:justify-start lg:justify-start'>
                <img src="/assets/wheel.svg" alt="Icon 1" className="h-4 w-4 mt-1 mr-1" />
                <p className="text-lg font-semibold">Budgeting Intervals</p>
              </div>
              <p className="text-gray-600">Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
            </div>
          </div>
          <div className="flex items-start space-x-1">
            <div>
              <div className='flex flex-row justify-center md:justify-start lg:justify-start'>
                <img src="/assets/cube.svg" alt="Icon 1" className="h-4 w-4 mt-1 mr-1" />
                <p className="text-lg font-semibold">Budgeting Intervals</p>
              </div>
              <p className="text-gray-600">Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
