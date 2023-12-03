import FamilyCard from "@/components/FamilyCard";
import React from "react";
import { MdOutlineEditLocation } from "react-icons/md";
import { MdOutlineEventAvailable } from "react-icons/md";
import { BsCalendarDateFill } from "react-icons/bs";
import { GiPriceTag } from "react-icons/gi";

const Family = () => {
  const familyCards = [
    {
      id: 1,
      name: "rubi  billah",
      location: "khulsi",
      available: "july",
      price: "21000",
      image:
        "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1457&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "rubi  billah",
      location: "khulsi",
      price: "21000",
      available: "july",

      image:
        "https://images.unsplash.com/photo-1622127922040-13cab637ee78?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "rubi  billah",
      location: "khulsi",
      price: "21000",
      available: "july",
      image:
        "https://images.unsplash.com/photo-1631048501786-4e97f20eac71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "rubi  billah",
      location: "khulsi",
      price: "21000",
      available: "july",
      image:
        "https://images.unsplash.com/photo-1598928334118-f86743750cd8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "rubi  billah",
      location: "khulsi",
      price: "21000",
      available: "july",
      image:
        "https://images.unsplash.com/photo-1631048501851-4aa85ffc3be8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      name: "rubi  billah",
      location: "khulsi",
      price: "21000",
      available: "july",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      name: "rubi  billah",
      location: "khulsi",
      price: "21000",
      available: "july",
      image:
        "https://images.unsplash.com/flagged/photo-1573168710865-2e4c680d921a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      name: "rubi  billah",
      location: "khulsi",
      price: "21000",
      available: "july",
      image:
        "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <section className="mt-8">
      {/* search and filtering */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex justify-center items-center px-10">
          <div className="space-y-10">
            <div className="flex items-center p-2 space-x-6  bg-accent-50 rounded-xl shadow-lg hover:shadow-xl transform  ">
              <div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 opacity-30"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  className="bg-gray-100 outline-none border-accent-50"
                  type="text"
                  placeholder="Article name or keyword..."
                />
              </div>
              <div className="bg-accent-500 py-2 px-4 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
                <span>Search</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-4 mt-8 ">
            <div className="bg-accent-100  flex gap-2 items-center  px-4 py-2  lg:px-6 lg:py-2">
              <MdOutlineEditLocation></MdOutlineEditLocation>
              <h1 className="text-black font-bold">Location</h1>
            </div>
            <div className="bg-accent-100 flex gap-2 items-center px-4 py-2  lg:px-6 lg:py-2">
              <BsCalendarDateFill></BsCalendarDateFill>
              <h1 className="text-black font-bold">Date</h1>
            </div>
            <div className="bg-accent-100 flex gap-2 items-center  px-4 py-2  lg:px-6 lg:py-2">
              <MdOutlineEventAvailable></MdOutlineEventAvailable>
              <h1 className="text-black font-bold">Month</h1>
            </div>
            <div className="bg-accent-100 flex gap-2 items-center  px-4 py-2  lg:px-6 lg:py-2">
              <GiPriceTag></GiPriceTag>
              <h1 className="text-black font-bold">Price</h1>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      {/* show card */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-14">
        {familyCards?.map((family) => (
          <FamilyCard family={family} key={family.id}></FamilyCard>
        ))}
      </div>
    </section>
  );
};

export default Family;
