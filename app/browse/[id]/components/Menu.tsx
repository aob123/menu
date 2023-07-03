import React from "react";

const Menu = () => {
  return (
    <article className="w-full h-[70vh] ">
      <div className="flex lg:col-span-12 justify-center items-center w-full h-20 bg-gray-800 text-white">
        <h1 className="text-3xl">Meny</h1>
      </div>
      <div className=" lg:grid  grid-cols-12 grid-rows-1 w-full h-full  ">
        <div className="col-start-3 col-span-8 bg-red-100">
          <ul className="flex w-full justify-evenly pt-4 text-l">
            <li>Pizza</li>
            <li>Kebab</li>
            <li>Rullar</li>
            <li>Sallader</li>
            <li>Tillbehör</li>
            <li>Drycker</li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default Menu;
