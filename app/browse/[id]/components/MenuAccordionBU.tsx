import { useState } from "react";
import MenuItem from "./MenuItem";

interface ShowMenu {
  showMenu: boolean;
}

const MenuAccordion = ({ menu }: Menu, showMenu: ShowMenu) => {
  //   console.log("ACCORDION", menu);

  console.log("ACCORD", showMenu);
  // Set state of selectedMenu to the name of the selected menu, to dynamically render the correct menu items. (E.g click pizza, and show items for pizza)

  return (
    <div>
      {/* MENU */}

      <div
        className=" lg:grid grid-cols-12 grid-rows-1 w-full p-10 flex h-full bg-red-500"
        style={showMenu ? { display: "" } : { display: "none" }}
      >
        <div className="lg:col-start-3 lg:col-span-8 w-full  min-h-full flex flex-col">
          <ul className="flex w-full justify-evenly items-center p-4 text-l bg-black/90 text-white rounded-2xl">
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
          {/*  */}
          <div className="w-full h-full mt-10 ">
            {selectedMenu.map((item: Item) => {
              // console.log("ITEM", item);
              return <MenuItem item={item} key={item.id} />;
            })}
          </div>
        </div>
      </div>
      <div></div>

      {/* INFORMATION */}
      {/* REVIEWS */}
    </div>
  );
};

export default MenuAccordion;
