"use client";

import { useState } from "react";

const Information = (restaurant: Restaurant) => {
  const { category, delivery, deliveryTime, score, website, tele, updated } =
    restaurant.information[0];
  console.log(restaurant.information[0].category);

  if (!restaurant.information[0]) {
    return <h1>Not available</h1>;
  }

  return (
    <div
      className=" lg:grid grid-cols-12 grid-rows-1 w-full p-10 flex h-full bg-red-500"
      // style={showMenu ? { display: "" } : { display: "none" }}
    >
      <div className="lg:col-start-3 lg:col-span-8 w-full  min-h-full flex flex-col">
        <div className="w-full h-full mt-10 ">
          <h1>Information</h1>
          <div>
            <p>Kategori: {category}</p>
            <p>Utkörning: {delivery ? "Ja" : "Nej"}</p>
            <p>Utkörningstid: {deliveryTime} minuter</p>
            <p>Betyg: {score}</p>
            <p>Webbsida: {website}</p>
            <p>Tele: {tele}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
