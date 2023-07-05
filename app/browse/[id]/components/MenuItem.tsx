import React from "react";

// type Item = {
//   id: string;
//   name: string;
//   ingredients: string[];
//   price: string;
//   size: string[];
//   url: string;
// };

interface Props {
  item: Item;
}

const MenuItem: React.FC<Props> = ({ item }) => {
  return (
    <div
      className="flex flex-row  even:bg-gray-400 odd:bg-gray-200"
      key={item.id}
    >
      <p>{item.name}</p>
      <p>{item.price} kr</p>
    </div>
  );
};

export default MenuItem;
