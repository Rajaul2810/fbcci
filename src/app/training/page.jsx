import Image from "next/image";
import React from "react";
import web from "../../../public/web.jpg";
import cy from "../../../public/cy.jpg";
import data from "../../../public/data.jpg";

const courses = [
  {
    id: 1,
    title: "web development",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, quas!",
    price: "3000",
    img: web,
  },
  {
    id: 2,
    title: "Database Administration",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, quas!",
    price: "5000",
    img: data,
  },
  {
    id: 3,
    title: "Cyber Security",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, quas!",
    price: "4500",
    img: cy,
  },
];

const Training = () => {
  return (
    <div className="mt-5 mb-5">
      <div className=" p-5">
        <h1 className=" text-xl font-bold">Professional Training</h1>
        <div className=" h-2 bg-yellow-300 w-16"></div>
      </div>
      <div className=" flex justify-center mt-5 mb-5">
        <div className=" w-11/12 md:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-3">
          {courses.map((data) => (
            <div
              className="card bg-base-100 shadow-xl border-t-2 border-yellow-600"
              key={data.id}
            >
              <figure>
                <Image className=" w-full h-48" src={data.img} alt="logo" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{data.title}</h2>
                <p>{data.description}</p>
                <div className="card-actions flex justify-between items-center">
                  <p className=" font-bold text-gray-600">${data.price}</p>
                  <button className="btn bg-yellow-500">Join Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Training;
