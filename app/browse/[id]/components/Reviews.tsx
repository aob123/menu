import React from "react";

const Reviews = () => {
  return (
    <div
      className=" lg:grid grid-cols-12 grid-rows-1 w-full p-10 flex h-full bg-red-500"
      // style={showMenu ? { display: "" } : { display: "none" }}
    >
      <div className="lg:col-start-3 lg:col-span-8 w-full  min-h-full flex flex-col">
        <div className="w-full h-full mt-10 ">
          <h1>Recensioner</h1>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
