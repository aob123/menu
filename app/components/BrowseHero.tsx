"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const BrowseHero = () => {
  let slides = [
    {
      url: "https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
      logo: "https://usercontent.one/wp/www.engstromsfooddeli.com/wp-content/uploads/2021/05/Logga-utan-ring.png",
    },

    {
      url: "https://images.unsplash.com/photo-1581954548218-415cd6ee5f4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
      logo: "https://uploads-ssl.webflow.com/5c0f858af554ac51a4007341/5c0f859e4a4585f226a72104_topploggo.svg",
    },
    {
      url: "https://images.unsplash.com/photo-1593504049359-74330189a345?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80",
      logo: "https://www.matverkstan.se/images/cdn/logo_60.png",
    },
    {
      url: "https://images.ohmyhosting.se/D1tAxkbndjfIbxlwzCG6v-Dp5Ak=/1200x1200/smart/filters:quality(85)/https%3A%2F%2Fbigboy.se%2Fwp-content%2Fuploads%2F2019%2F10%2Fburgare.jpg",
      logo: "https://bigboy.se/wp-content/themes/bigboynew/img/logo-orange.svg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  console.log(slides);

  return (
    <article
      className="w-full bg-center bg-cover rounded-2xl flex justify-center items-center duration-500 group"
      style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
    >
      <div className="bg-black/90 w-full h-full lg:rounded-2xl grid grid-cols-6 ">
        {/* Left arrow  */}
        <div className="col-span-1 col-start-1 flex justify-center items-center">
          <button
            onClick={prevSlide}
            className="  text-2xl lg:rounded p-2  text-white/20 group-hover:text-white cursor-pointer  "
          >
            <BsChevronCompactLeft size={30} />
          </button>
        </div>
        <div className="w-full min-h-[50vh] lg:h-full col-start-3 col-span-2 flex justify-center items-center">
          <img src={slides[currentIndex].logo} alt="" width={450} />
        </div>
        {/* Right arrow  */}
        <div className="col-span-1 col-start-6 flex justify-center items-center">
          <button
            onClick={nextSlide}
            className="  text-2xl lg:rounded p-2  text-white/20 group-hover:text-white cursor-pointer "
          >
            <BsChevronCompactRight size={30} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default BrowseHero;
