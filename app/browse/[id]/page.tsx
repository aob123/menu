import React from "react";
import Hero from "./components/Hero";
import Menu from "./components/Menu";

type Params = {
  params: {
    id: number;
  };
};

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
              <Menu {...restaurant} />
            </section>
          );
        }
      })}
    </>
  );
};

export default MenuPage;
