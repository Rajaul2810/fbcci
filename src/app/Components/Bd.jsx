import Image from "next/image";
import React from "react";
import bd from "../../../public/newbd.png";

const Bd = () => {
  return (
    <div>
      <div className=" flex justify-center">
        <div className=" w-11/12 md:w-3/4 grid grid-cols-1 md:grid-cols-2 place-items-center">
          <div>
            <Image src={bd} alt="bd" />
          </div>
          <div>
            <h1 className=" font-bold text-2xl mb-5">Bangladesh Country Profile</h1>
            <p className=" text-gray-600 mb-10 mt-10">
              Bangladesh is a country in South Asia, located in the delta of the
              Padma (Ganges) and Jamuna (Brahmaputra) rivers in the northeastern
              part of the Indian subcontinent.
            </p>
            <button className="btn bg-yellow-300">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bd;
