"use client";

import { table } from "console";
import { ReactEventHandler, useState } from "react";

type Restaurant = {
  name: string;
  id: number;
  image: string;
  address: string;
  tele: string;
  menu: [
    {
      name: string;
      items: [
        {
          id: string;
          name: string;
          ingredients: string[];
          price: string;
          size: string[];
          url: string;
        }
      ];
    }
  ];
};

const Menu = ({ menu }: Restaurant) => {
  const [selectedMenu, setSelecteMenu] = useState<any[]>(menu[0].items);

  const menuItem = (name: string) => {
    menu.map((item) => {
      if (name === item.name) {
        console.log(item);
        setSelecteMenu(item.items);
      }
    });
  };

  console.log("SELECTED", selectedMenu);
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
              {selectedMenu.map((item: any, key: any) => {
                return (
                  <div
                    className="flex flex-row  even:bg-gray-400 odd:bg-gray-200"
                    key={item.id}
                  >
                    <p>{item.name}</p>
                    <p>{item.price} kr</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Menu;
