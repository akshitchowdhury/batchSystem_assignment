import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = ({ darkMode }) => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data.json');
      const data = await res.json();
      setTestimonials(data.testimonials);
    };

    fetchData();
  }, []);

  const settings = {
 dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768, // Breakpoint for tablets
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={`flex flex-col items-center p-8`}>
      <h3 className={`text-gray-500 uppercase tracking-wider text-center ${darkMode ? 'text-white' : ''}`}>Testimonial</h3>
      <h1 className={`text-3xl md:text-4xl font-bold text-center mt-2 ${darkMode ? 'text-white' : 'text-black'}`}>
        What Our Users <br /> Say About Us?
      </h1>
      <Slider {...settings} className="w-full mt-8 mx-2 md:mx-12">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 flex justify-center md:justify-center mb-8 md:mb-0">
              <img src={testimonial.avatar} alt={testimonial.name} width={150} height={150} className="rounded-full" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-auto md:pr-15 lg:pr-20">
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>{testimonial.name}</h2>
              <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {testimonial.feedback}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
