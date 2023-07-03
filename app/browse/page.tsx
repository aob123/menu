import React from "react";
import BrowseHero from "../components/BrowseHero";
import BrowseRestaurants from "../components/BrowseRestaurants";

const page = () => {
  return (
    <main className="h-full w-full flex flex-col justify-evenly lg:grid grid-cols-12 lg:pt-10">
      <section className=" lg:col-start-3 lg:col-span-8">
        <h1 className="text-2xl p-3 lg:p-0 lg:py-4">Populära menyer</h1>
        <BrowseHero />
      </section>
      <section className="lg:col-start-3 lg:col-span-8 mb-4 lg:pt-10">
        <h1 className="text-2xl p-3 lg:p-0 lg:py-4">Alla menyer</h1>
        <BrowseRestaurants />
      </section>
    </main>
  );
};

export default page;
