import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function HeroSection() {
  return (
    <div className="flex justify-center mt-14 crimson">
      <div className="md:grid grid-cols-[700px_470px] items-center md:w-[1170px] space-x-7 md:pl-0 pl-4">
        <div className="space-y-4">
          <p className="text-xl text-slate-500 mb-10">-ROI-driven SEO Agency</p>
          <div className="space-y-4 ">
            <h1 className="md:text-[3.5rem]  text-3xl font-semibold">
              Finally, a{" "}
              <span className="bg-blue-100 text-[#3572EF] font-semibold p-1">
                SEO
              </span>
            </h1>
            <h1 className="md:text-[2.9rem] text-3xl font-semibold pt-4">
              Agency that
            </h1>
            <h1 className="md:text-[2.9rem] text-3xl font-semibold pt-1">
              provide services that matter
            </h1>
          </div>

          <p className="text-xl font-semibold">
            (From zero to fully optimized websites that generate quality leads)
          </p>
          <ol className="space-y-2 text-gray-600">
            <li>✔️SEO-Driven Web Design & Development</li>
            <li>✔️Responsive, Search Engine Optimized Websites</li>
            <li>✔️Boost Organic Traffic and Increase Conversions</li>
          </ol>

          <Link href={"/contactUs"}>
            <Button className="border text-xl mt-4 px-7 hover:bg-blue-600 bg-blue-700 text-white py-7">
              Schedule a Consultation
            </Button>
          </Link>
        </div>

        <div className="mt-4  md:p-0 p-3">
          <img
            src="https://plus.unsplash.com/premium_photo-1683140798955-cedeb8475454?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Team working together"
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
