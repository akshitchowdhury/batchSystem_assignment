"use client";
import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button
} from "@material-tailwind/react";

const Features = ({ darkMode }) => {
  const [features, setFeatures] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data.json');
      const data = await res.json();
      setFeatures(data.features);
    };

    fetchData();
  }, []);

  const handleAccordionClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex flex-col md:flex-row p-4 md:p-8">
      <div className="w-full md:w-1/2 flex justify-center md:justify-center mb-8 md:mb-0">
        <img src="/assets/features.svg" alt="Uifry Premium" className="w-full" />
      </div>
      <div className="w-full md:w-1/2 text-center justify-center items-center my-auto md:text-left pr-5 md:pr-15 lg:pr-20">
        <h2 className={`text-lg font-bold mb-2 ${darkMode ? 'text-orange-300' : 'text-orange-500'}`}>FEATURES</h2>
        <h1 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-white' : ''}`}>Uifry Premium</h1>
        <div className="space-y-4">
          {features.map((feature, index) => (
            <Accordion key={index} open={openIndex === index}>
              <AccordionHeader onClick={() => handleAccordionClick(index)}>
                <div className="flex items-center">
                  <img src={feature.icon} alt={`Icon ${index + 1}`} className="h-4 w-4 mr-2" />
                  <p className={`text-lg font-semibold ${darkMode ? 'text-gray-400' : ''}`}>
                    {feature.title}
                  </p>
                </div>
              </AccordionHeader>
              <AccordionBody>
                <p className={`text-gray-600 ${darkMode ? 'text-gray-300' : ''}`}>
                  {feature.description}
                </p>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
