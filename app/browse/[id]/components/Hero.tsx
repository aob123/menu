import React from "react";

type Restaurant = {
  name: string;
  id: number;
  image: string;
  address: string;
  tele: string;
};

const Hero = ({ name, id, image, address, tele }: Restaurant) => {
  return (
    <div
      className=" h-[70vh] w-[100vw] bg-center bg-cover flex justify-center items-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="w-full h-full flex flex-col text-white justify-center items-center bg-black/80">
        <h1 className=" text-5xl p-4">{name}</h1>
        <h2 className="text-xl p-2">{address}</h2>
        <h3 className="text-xl p-2">{tele}</h3>
      </div>
    </div>
  );
};

export default Hero;
