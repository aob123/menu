export {};

declare global {
  interface Restaurant {
    name: string;
    id: number;
  }

  interface Menu {
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
  }

  interface Item {
    id: string;
    name: string;
    ingredients: string[];
    price: string;
    size: string[];
    url: string;
  }
}
