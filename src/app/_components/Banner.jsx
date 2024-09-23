import { Button } from "@/components/ui/button";
import React from "react";

export default function Banner() {
  return (
    <div className="flex justify-center mt-10 mb-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-[1240px] bg-gradient-to-r from-violet-600 to-indigo-600 p-6 sm:p-10 rounded-2xl">
        <div className="mb-6 lg:mb-0 lg:mr-10">
          <h1 className="text-2xl sm:text-3xl lg:text-[2.5rem] text-white font-semibold text-center lg:text-left">
            What makes our SEO firm different?
          </h1>
          <p className="text-gray-200 font-medium text-center lg:text-left mt-2">
            We only partner with companies if we’re 100% sure we can get them
            results.
          </p>
        </div>

        <div className="text-center lg:text-right space-y-4">
          <p className="text-gray-200 font-medium">
            Schedule a free, no-strings-attached consultation to see if our SEO
            company can get *you* the results you want.
          </p>
          <Button className="border text-lg sm:text-xl text-black hover:bg-yellow-300 bg-yellow-400 px-10 py-5 lg:px-14 lg:py-7">
            Book a consultation
          </Button>
        </div>
      </div>
    </div>
  );
}
