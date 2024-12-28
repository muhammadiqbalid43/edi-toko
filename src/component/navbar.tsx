"use client";
import React from "react";
import Image from "next/image";
const Nav_Item1 = [
  { index: 0, label: "Women" },
  { index: 1, label: "Men" },
  { index: 2, label: "Company" },
  { index: 3, label: "Stores" },
];

const Nav_Item2 = [
  { index: 0, label: "Search" },
  { index: 1, label: "Help" },
];

export const Navbar = () => {
  return (
    <div className="w-full shadow-lg">
      <div className="flex bg-cyan-950 p-2 justify-between">
        <div className="text-white">Toko EDI</div>
        <div className="flex gap-4">
          <button className="text-white">Sign In</button>
          <button className="text-white">Create an account</button>
        </div>
      </div>
      {/* Dekstop */}
      <div className="flex justify-between bg-white p-4">
        <div></div>
        <div className="flex gap-2 md:gap-6">
          {Nav_Item1.map((item) => (
            <button key={item.index} className="">
              {item.label}
            </button>
          ))}
        </div>
        <div className="flex gap-2 md:gap-6">
          {Nav_Item2.map((item) => (
            <button key={item.index}>{item.label}</button>
          ))}
          <div className="flex items-center gap-1">
            <Image src="/bag.png" width={20} height={20} alt="" />
            <p>0</p>
          </div>
        </div>
      </div>
    </div>
  );
};
