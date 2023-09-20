import Image from "next/image";
import React from "react";
import ig from "../../../public/home.png";
import { FiLayers } from "react-icons/fi";
import Link from "next/link";

const Intro = () => {
  return (
    <div className="pt-5 pb-5 bg-slate-100">
      <div className=" flex justify-center">
        <div className=" w-11/12 md:w-10/12 grid grid-cols-1 gap-5 md:grid-cols-2 place-items-center">
          <div>
            <Image src={ig} alt="bd" className=" rounded-md" />
          </div>
          <div>
            <h1 className=" font-bold text-2xl mb-5">
              Introduction to the FBCCI
            </h1>
            <p className=" text-gray-600 mb-10 mt-10">
              The Federation of Bangladesh Chambers of Commerce and Industry
              (FBCCI) is the apex trade organization of Bangladesh playing a
              pivotal role in consultative and advisory capacity, safeguarding
              the interest of...
            </p>
            <div className=" mb-2 flex items-center p-3 shadow-sm  rounded-lg border-t-2 border-yellow-600">
              <p className=" bg-gradient-to-r from-yellow-600 to-yellow-500 w-16 h-16 p-4 rounded-full  shadow-indigo-500/50 shadow-md">
                <FiLayers color="white" size={30} />
              </p>
              <div className=" ms-5 text-gray-500">
                <p className=" font-bold text-black">Our Mission</p>
                <p className=" text-xs">
                  Chamber 4.0 focused on sustainability and more efficient
                  activities that would be more participative. As fourth
                  generation leaders of umbrella chamber aligned with 4RI, we
                  engage with business communication of...
                </p>
              </div>
            </div>
            <div className=" mb-2 flex items-center p-3 shadow-sm  rounded-lg border-t-2 border-yellow-600">
              <p className=" bg-gradient-to-r from-yellow-600 to-yellow-500 w-16 h-16 p-4 rounded-full  shadow-indigo-500/50 shadow-md">
                <FiLayers color="white" size={30} />
              </p>
              <div className=" ms-5 text-gray-500">
                <p className=" font-bold text-black">Our Vision</p>
                <p className=" text-xs">
                  To be the center of excellence in policy Advocacy and all
                  matter relevant to trade and investment facilitation from
                  CMSME to the largest sector of Bangladesh.
                </p>
              </div>
            </div>
            <Link href='/mission' className="btn bg-yellow-300">Read More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
