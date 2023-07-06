import Information from "./Information";
import Menu from "./Menu";
import Reviews from "./Reviews";

const MenuAccordion = (restaurant: Restaurant) => {
  return (
    <article className="w-full h-full bg-zinc-200 ">
      {/* Menu */}
      <div>
        <div className="flex lg:col-span-12 justify-center items-center w-full h-20 bg-gray-800 text-white border-b-2">
          <h1 className="text-3xl">Meny</h1>
          <button>Show</button>
        </div>
        <Menu {...restaurant} />
      </div>
      {/* Information */}
      <div>
        <div className="flex lg:col-span-12 justify-center items-center w-full h-20 bg-gray-800 text-white border-b-2">
          <h1 className="text-3xl">Information</h1>
          <button>Show</button>
        </div>
        <Information {...restaurant} />
      </div>

      {/* Reviews */}
      <div>
        <div className="flex lg:col-span-12 justify-center items-center w-full h-20 bg-gray-800 text-white border-b-2">
          <h1 className="text-3xl">Recensioner</h1>
          <button>Show</button>
        </div>
        <Reviews />
      </div>
    </article>
  );
};

export default MenuAccordion;
