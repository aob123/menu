"use client";

import { useState } from "react";
import MenuItem from "./MenuItem";

const Menu = (restaurant: Restaurant) => {
  const [showMenu, setShowMenu] = useState<Boolean>(false);
  const [selectedMenu, setSelecteMenu] = useState<Item[]>(
    restaurant.menu[0].items
  );

  //Set state to show / hide menu.
  const showMenuFunction = () => {
    setShowMenu((prevState) => !prevState);
  };

  const menuItem = (name: string) => {
    restaurant.menu.map((item) => {
      if (name === item.name) {
        setSelecteMenu(item.items);
      }
    });
  };

  console.log(selectedMenu);

  return (
    <div className=" lg:grid grid-cols-12 grid-rows-1 w-full p-10 flex h-full bg-red-500">
      <div className="lg:col-start-3 lg:col-span-8 w-full  min-h-full flex flex-col">
        <ul className="flex w-full justify-evenly items-center p-4 text-l bg-black/90 text-white rounded-2xl">
          {restaurant.menu.map((item, key) => {
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
        {/*  */}
        <div className="w-full h-full mt-10 ">
          {selectedMenu.map((item: Item) => {
            // console.log("ITEM", item);
            return <MenuItem item={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
