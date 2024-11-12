// File: src/components/Product.js
"use client";
import React, { useState } from "react";
import { CiClock1 } from "react-icons/ci";
import { MdLocationOn, MdPersonOutline } from "react-icons/md";

// Sample image imports
import FreeImage from "../../assets/Product/Free.png";
import PaidImage from "../../assets/Product/paid.png";

const Product = () => {
  const [filter, setFilter] = useState("free");

  // Sample class data
  const classes = [
    {
      title: "Mastering Cyber Security: Zero To Hero",
      instructor: "Ibnu Faisal",
      location: "Zoom and Discord",
      time: "Every Monday, 7 PM - 9 PM",
      duration: "8 weeks",
      price: "5.000.000",
      originalPrice: "10.000.000",
      discount: "50%",
      slots: "0/20 Slots Remaining",
      rating: 4.8,
      isFree: false,
    },
    {
      img: PaidImage,
      title: "Introduction to ISO 27001",
      instructor: "Efraim Julian",
      location: "Zoom and Discord",
      time: "30 November - 1 December",
      duration: "8 weeks",
      price: "150.000",
      originalPrice: "500.000",
      discount: "70%",
      isFree: false,
    },
    {
      img: PaidImage,
      title: "Red, Blue, or Purple Team? Get to Know More About Team Classification",
      instructor: "Efraim Julian",
      location: "Zoom and Discord",
      time: "7 December, 9 AM - 11 AM",
      price: "150.000",
      originalPrice: "500.000",
      discount: "70%",
      isFree: false,
    },
  ];

  // Filter classes based on the selected button (free or paid)
  const filteredClasses = classes.filter(
    (classItem) => classItem.isFree === (filter === "free")
  );

  return (
    <section
      id="Product"
      className="bg-[#F9FCFF] flex justify-center items-center p-[80px]"
    >
      <div className="bg-white w-full max-w-[1300px] p-[40px] rounded-[16px] shadow-md">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-[36px] text-[#1A2434] font-bold">
            Our Masterclasses
          </h1>

          {/* Free and Paid Buttons */}
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={() => setFilter("free")}
              className={`py-2 px-6 rounded-full font-bold ${
                filter === "free" ? "bg-black text-white" : "bg-gray-200 text-black"
              }`}
            >
              Free Classes
            </button>
            <button
              onClick={() => setFilter("paid")}
              className={`py-2 px-6 rounded-full font-bold ${
                filter === "paid" ? "bg-black text-white" : "bg-gray-200 text-black"
              }`}
            >
              Paid Classes
            </button>
          </div>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredClasses.map((classItem, index) => (
            <div
              key={index}
              className={`bg-white border rounded-lg shadow-md ${
                classItem.title === "Mastering Cyber Security: Zero To Hero"
                  ? "flex flex-col md:flex-row items-center p-6"
                  : "p-6"
              }`}
            >
              {/* Class Details Section */}
              <div className={`flex flex-col ${classItem.title === "Mastering Cyber Security: Zero To Hero" ? "w-full" : ""}`}>
                {/* Class Title */}
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-[20px] font-bold text-[#1A2434]">
                    {classItem.title}
                  </h2>
                </div>

                {/* Conditionally Render Content Based on Class Title */}
                {classItem.title !== "Mastering Cyber Security: Zero To Hero" && (
                  <>
                    {/* Class Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-yellow-100 text-black text-sm px-3 py-1 rounded-full">
                        Practice & Quiz
                      </span>
                      <span className="bg-yellow-100 text-black text-sm px-3 py-1 rounded-full">
                        LIVE interaktif di ZOOM
                      </span>
                    </div>

                    {/* Time, Location, and Instructor */}
                    <div className="text-[14px] text-gray-700 mb-4">
                      <p className="flex items-center mb-1">
                        <CiClock1 className="mr-2" />
                        {classItem.time}
                      </p>
                      <p className="flex items-center mb-1">
                        <MdLocationOn className="mr-2" />
                        {classItem.location}
                      </p>
                      <p className="flex items-center mb-1">
                        <MdPersonOutline className="mr-2" />
                        Hosted by: {classItem.instructor}
                      </p>
                    </div>
                  </>
                )}

                {/* Discounted Price Section */}
                <div className="flex items-center justify-between mt-4">
                  <div>
                    {classItem.discount && (
                      <div className="bg-red-100 text-red-600 font-semibold text-sm px-3 py-1 rounded-full mb-1 inline-flex items-center">
                        <span>{classItem.discount} Off</span>
                      </div>
                    )}
                    {classItem.originalPrice !== "0" && (
                      <div className="text-gray-500 line-through text-sm">
                        Rp{classItem.originalPrice}
                      </div>
                    )}
                    <div className="text-[#1A2434] font-bold text-[24px]">
                      Rp{classItem.price}
                    </div>
                  </div>
                  <div className="flex justify-start">
                    {classItem.title === "Mastering Cyber Security: Zero To Hero" ? (
                      <button className="bg-gray-400 text-white px-6 py-2 rounded-md font-bold text-[16px]">
                        Coming Soon
                      </button>
                    ) : (
                      <a
                        href="https://forms.gle/u4zMWJH7U5KrXTwz6"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="bg-[#FF4D4F] text-white px-6 py-2 rounded-md font-bold text-[16px]">
                          DAFTAR SEKARANG
                        </button>
                      </a>
                    )}
                  </div>
                </div>

                {/* Slots Remaining - Only shown for "Mastering Cyber Security: Zero To Hero" */}
                {classItem.title === "Mastering Cyber Security: Zero To Hero" && (
                  <div className="text-[14px] text-gray-600 mt-2 flex items-center justify-end">
                    <MdPersonOutline className="mr-1" />
                    {classItem.slots}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
