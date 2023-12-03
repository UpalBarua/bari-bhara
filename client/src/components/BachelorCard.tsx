import Image from "next/image";
import React from "react";
import { IoMdPricetags } from "react-icons/io";
import { FaLocationPinLock } from "react-icons/fa6";
import { MdEventAvailable } from "react-icons/md";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { MdOutlineAirlineSeatFlat } from "react-icons/md";
import Lottie from "lottie-react";
import working17 from "../../public/Animation - 1701277658902.json";

const BachelorCard = ({ bachelor }) => {
  const { location, id, name, image, available, seat, price } = bachelor;
  return (
    <div>
      <div className="rounded-md shadow-md h-[500px] lg:h-[410px] pb-8 dark:bg-gray-900 dark:text-gray-100">
        {/* <img
          src="https://source.unsplash.com/random/300x300/?2"
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        /> */}
        <Image src={image} alt="" height={400} width={500}></Image>
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className=" text-[20px] font-bold ">{name}</h2>

            <div className="flex gap-2 items-center text-[17px]">
              <IoMdPricetags></IoMdPricetags>
              <p>Price Range: {price}</p>
            </div>
            <div className="flex gap-2 items-center text-[17px]">
              <MdEventAvailable></MdEventAvailable>
              <p>available from {available}</p>
            </div>
            <div className="flex gap-2 items-center text-[17px]">
              <MdOutlineAirlineSeatFlat></MdOutlineAirlineSeatFlat>
              <p>open {seat} seat</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-2 items-center text-[17px]">
                <FaLocationPinLock></FaLocationPinLock>
                <p> {location}</p>
              </div>
              <div className="text-[20px] text-green-600">
                <FaHeartCirclePlus></FaHeartCirclePlus>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-2 lg:ml-4 mb-3">
          <button className="bg-accent-400 py-2 px-4 text-black font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
            Details
          </button>
        </div>
      </div>
      <div className="flex justify-end ">
        <Lottie
          className=" w-24 lg:w-24 -mt-[790px]"
          animationData={working17}
          loop={true}
        ></Lottie>
      </div>
    </div>
  );
};

export default BachelorCard;
