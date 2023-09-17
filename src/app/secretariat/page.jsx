import React from "react";
import ceo from "../../../public/member/ceo.png";
import dinar from "../../../public/member/dinar.png";
import rafia from "../../../public/member/rafia.png";
import zarin from "../../../public/member/zarin.png";
import Image from "next/image";

const Secretariat = () => {
  return (
    <section>
      <div className=" flex justify-center">
        <div className=" shadow-md rounded-md items-center flex justify-evenly w-11/12 md:w-5/12 p-5 mt-5 border-t-2 border-yellow-600">
          <div>
            <Image
              className=" rounded-full shadow-md border-2 border-yellow-500"
              src={ceo}
              alt="ceo"
            />
          </div>
          <div className="">
            <h1 className=" text-lg font-bold">Dr. Bikarna Kumar Ghosh</h1>
            <p>CEO</p>
            <p>000000000000</p>
          </div>
        </div>
      </div>
      <div className=" flex justify-center">
        <div className=" w-11/12 md:w-10/12 grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
          <div className=" shadow-md border-t-2 border-yellow-600 p-5 flex justify-evenly items-center rounded-md">
            <div>
              <Image
                className=" rounded-full shadow-md border-2 border-yellow-500"
                src={dinar}
                alt="Mr. Md. Entakhab Dinar"
              />
            </div>
            <div className="ms-2">
              <h1 className=" text-lg font-bold ">Mr. Md. Entakhab Dinar</h1>
              <p>Executive</p>
              <p>01755301194</p>
            </div>
          </div>
          <div className=" shadow-md border-t-2 border-yellow-600 p-5 flex justify-evenly items-center rounded-md">
            <div>
              <Image
                className=" rounded-full shadow-md border-2 border-yellow-500"
                src={rafia}
                alt="rafia"
              />
            </div>
            <div className="ms-2">
              <h1 className=" text-lg font-bold">Ms. Rafia Islam</h1>
              <p>Executive</p>
              <p>01679044279</p>
            </div>
          </div>
          <div className=" shadow-md border-t-2 border-yellow-600 p-5 flex justify-evenly items-center rounded-md">
            <div>
              <Image
                className=" rounded-full shadow-md border-2 border-yellow-500 w-36"
                src={zarin}
                alt="zarin"
              />
            </div>
            <div className="ms-2">
              <h1 className=" text-lg font-bold">Ms. Zarin Tasnim</h1>
              <p>Executive</p>
              <p>01785210111</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Secretariat;
