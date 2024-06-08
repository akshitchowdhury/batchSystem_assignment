// app/Home.js
"use client";

import React, { useState, useEffect } from "react";
import Nav from "./components/Nav/Nav";
import HeroSection from "./components/Hero/HeroSection";
import Features from "./components/Features/Features";
import Advantages1 from "./components/Advantages/Advantages1";
import Advantages2 from "./components/Advantages/Advantages2";
import Testimonial from "./components/Testomonial/Testimonial";
import FreqAskQstn from "./components/FreqAskdQstn/FreqAskdQstn";
import ReadyToGetStarted from "./components/ReadyToGetStarted/ReadyToGetStarted";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";
import {
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaLightbulb,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (!data) return <Loading />;
  return (
    <>
      <main
        className={`min-h-screen w-full overflow-clip ${
          darkMode
            ? "bg-zinc-800 transition ease-in-out duration-300"
            : "bg-cover bg-center transition ease-out duration-300"
        }`}
        style={{
          transition: "background-image 300ms ease-in-out",
          backgroundImage: `url('${
            darkMode ? "/assets/darkmode.svg" : "/assets/background.svg"
          }')`,
        }}
      >
        <Nav darkMode={darkMode} />
        <HeroSection darkMode={darkMode} data={data} />
        <Features darkMode={darkMode} data={data} />
        <Advantages1 darkMode={darkMode} data={data} />
        <Advantages2 darkMode={darkMode} data={data} />
        <Testimonial darkMode={darkMode} data={data} />
        <FreqAskQstn darkMode={darkMode} data={data} />
        <div className="p-20">
          <ReadyToGetStarted data={data} />
        </div>
        <Footer darkMode={darkMode} data={data} />
      </main>
      <div
        className={`fixed top-1/2 left-2 transform -translate-y-1/2 cursor-pointer ${darkMode ? "bg-white": "bg-black"} text-black px-4 py-2 rounded-full`}
        onClick={toggleDarkMode}
      >
        {darkMode ? (
          <FaLightbulb className="text-black hover:scale-125 transition ease-in-out duration-200" />
        ) : (
          <FaLightbulb className="text-white hover:scale-125 transition ease-in-out duration-200" />
        )}
      </div>
    </>
  );
}
