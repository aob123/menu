import React from "react";
import RestaurantCard from "./RestaurantCard";

type Restaurant = {
  name: string;
  id: number;
  image?: string;
};

const BrowseRestaurants = async () => {
  const res = await fetch("http://localhost:3000/data.json", {
    cache: "no-store",
  });
  const data: Restaurant[] = await res.json();

  return (
    <article className="min-h-[30vh] w-full md:rounded-2xl flex flex-col lg:flex-row justify-center bg-white lg:grid lg:grid-cols-5 gap-5 p-4">
      {data.map((restaurant: Restaurant) => {
        return <RestaurantCard {...restaurant} />;
      })}
    </article>
  );
};

export default BrowseRestaurants;
