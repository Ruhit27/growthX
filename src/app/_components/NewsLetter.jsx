import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

export default function NewsLetter() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center px-8 lg:px-20 mt-16 mb-8 py-12 bg-gray-50 rounded-lg shadow-sm">
      <div className="text-center lg:text-left max-w-lg">
        <h1 className="text-3xl font-bold mb-4">Stay Informed</h1>
        <p className="text-lg text-gray-600 mb-6">
          Subscribe to get the latest updates on our courses and special offers.
        </p>
        <div className="flex items-center justify-center lg:justify-start">
          <Input
            className="border border-gray-300 rounded-lg mr-4 px-4 py-3 w-full lg:w-80"
            placeholder="Enter your email"
          />
          <Button className="text-lg px-5 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors duration-300 border-blue-300">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}
