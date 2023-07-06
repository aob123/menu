import React from "react";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";

type Params = {
  params: {
    id: number;
  };
};

const MenuPage = async ({ params }: Params) => {
  console.log(params.id);

  const res = await fetch("http://localhost:3000/data.json", {
    cache: "no-store",
  });
  const data: Restaurant[] = await res.json();

  return (
    <>
      {data.map((restaurant: Restaurant) => {
        if (restaurant.id == params.id) {
          return (
            <section>
              <Hero {...restaurant} />
              <MenuSection {...restaurant} />
            </section>
          );
        }
      })}
    </>
  );
};

export default MenuPage;
