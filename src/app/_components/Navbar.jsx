import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center p-4 md:p-6 bg-white ">
      <div className="mb-4 md:mb-0">
        <Link href={"/"}>
          <h1 className="text-2xl md:text-3xl font-serif font-medium">
            growth<span className="text-blue-600 text-3xl md:text-4xl">X</span>
          </h1>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-6">
        {infos.map((info) => (
          <div key={info.path} className="mb-2 md:mb-0">
            <Link
              href={info.path}
              className="text-lg md:text-base hover:text-blue-600"
            >
              {info.name}
            </Link>
          </div>
        ))}
      </div>

      <div>
        <Button className="border md:py-7 border-blue-700 bg-white text-blue-700 hover:bg-blue-700 hover:text-white py-5 text-sm md:text-xl  px-4  md:px-6">
          Book a consultation
        </Button>
      </div>
    </nav>
  );
}

const infos = [
  {
    name: "About us",
    path: "/about",
  },
  {
    name: "Contact us",
    path: "contactUs",
  },
  {
    name: "Review",
    path: "/review",
  },

  {
    name: "Pricing",
    path: "/pricing",
  },
];
