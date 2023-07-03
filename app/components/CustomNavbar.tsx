import React from "react";
import Link from "next/link";

const CustomNavbar = () => {
  return (
    <nav className="sticky top-0 w-full h-24 shadow-xl bg-white text-white ">
      <div className="lg:grid grid-cols-12 flex bg-black h-full items-center justify-between p-4 lg:p-0">
        <div className="col-start-3 col-span-2">
          <div>
            <Link href="/">
              <p className="text-3xl ">
                me<span className=" text-yellow-300">nü</span>{" "}
              </p>
            </Link>
          </div>
        </div>
        <div className=" col-start-9 col-span-2  text-center">
          <div className="w-full">
            Stad: <b>Härnösand</b>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
