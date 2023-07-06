import React from "react";

interface Props {
  item: Item;
}

const MenuItem = ({ item }: Props) => {
  return (
    <div
      className="flex flex-row items-center justify-evenly  border-zinc-700 border-2 bg-white my-4 p-6 rounded-2xl"
      key={item.id}
    >
      <p>{item.name}</p>
      <p>{item.price} kr</p>
    </div>
  );
};

export default MenuItem;
