"use client";

import MenuAccordion from "./MenuAccordion";

const MenuSection = (restaurant: Restaurant) => {
  console.log(restaurant);

  return (
    <article className="w-full h-full bg-zinc-200 ">
      <MenuAccordion {...restaurant} />
    </article>
  );
};

export default MenuSection;
