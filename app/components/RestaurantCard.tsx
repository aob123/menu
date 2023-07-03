import React from "react";
import Link from "next/link";

type Restaurant = {
  name: string;
  id: number;
  image?: string;
};

const RestaurantCard = ({ name, id, image }: Restaurant) => {
  return (
    <div
      className="flex justify-center items-center min-w-72 h-40 bg-center bg-cover bg-red-300"
      style={{ backgroundImage: `url(${image})` }}
    >
      <Link
        className="h-full w-full text-white text-xl flex flex-col justify-center items-center bg-black/60 hover:bg-red-500/40  active:bg-black/90"
        href={`/browse/${id}`}
      >
        <h1>{name}</h1>
      </Link>
    </div>
  );
};

export default RestaurantCard;
