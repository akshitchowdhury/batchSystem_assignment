"use client"
import React, { useState } from "react";
import Image from "next/image";
import Nav from "./components/Nav/Nav";
import HeroSection from "./components/Hero/HeroSection";
import Features from "./components/Features/Features";
import Advantages1 from "./components/Advantages/Advantages1";
import Advantages2 from "./components/Advantages/Advantages2";
import Testimonial from "./components/Testomonial/Testimonial";
import FreqAskQstn from "./components/FreqAskdQstn/FreqAskdQstn";
import ReadyToGetStarted from "./components/ReadyToGetStarted/ReadyToGetStarted";
import Footer from "./components/Footer/Footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <main
        className={`min-h-screen w-full ${
          darkMode ? "bg-zinc-800 transition ease-in-out duration-300" : "bg-cover bg-center transition ease-out duration-300"
        }`}
        style={{
          backgroundImage: `url('${darkMode ? "/assets/darkmode.svg" : "/assets/background.svg"}')`,
        }}
      >
        <Nav />
        <HeroSection />
        <Features />
        <Advantages1 />
        <Advantages2 />
        <Testimonial />
        <FreqAskQstn />
        <div className="p-20">
          <ReadyToGetStarted />
        </div>
        <Footer />
      </main>
      <button
        className="fixed bottom-4 right-4 bg-white text-black px-4 py-2 rounded-full"
        onClick={toggleDarkMode}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </>
  );
}
