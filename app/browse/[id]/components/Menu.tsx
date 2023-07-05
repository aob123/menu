"use client";

import { useState } from "react";
import MenuItem from "./MenuItem";

const Menu = ({ menu }: Menu) => {
  const [selectedMenu, setSelecteMenu] = useState<Item[]>(menu[0].items);

  const menuItem = (name: string) => {
    menu.map((item) => {
      if (name === item.name) {
        // console.log(item);
        setSelecteMenu(item.items);
      }
    });
  };

  return (
    <article className="w-full h-full  bg-green-300 ">
      <div className="flex lg:col-span-12 justify-center items-center w-full h-20 bg-gray-800 text-white">
        <h1 className="text-3xl">Meny</h1>
      </div>
      <div className=" lg:grid  grid-cols-12 grid-rows-1 w-full h-96 p-10  ">
        <div className="col-start-3 col-span-8 bg-red-100">
          <ul className="flex w-full justify-evenly items-center p-4 text-l bg-black text-white">
            {menu.map((item, key) => {
              return (
                <li
                  className="hover:text-yellow-600 cursor-pointer active:text-yellow-600"
                  onClick={() => menuItem(item.name)}
                  key={item.name}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
          <div>
            <div className="w-full ">
              {selectedMenu.map((item) => {
                // console.log("ITEM", item);
                return <MenuItem item={item} key={item.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Menu;
