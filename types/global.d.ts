export {};

declare global {
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
    information: [
      {
        category: string;
        delivery: boolean;
        deliveryTime: string;
        score: number;
        website: string;
        tele: string;
        updated: Date;
      }
    ];
  };

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
