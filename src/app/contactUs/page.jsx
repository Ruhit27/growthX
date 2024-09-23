import { Button } from "@/components/ui/button";
import React from "react";

export default function ContactUs() {
  return (
    <div className="flex justify-center items-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row w-full max-w-[1170px] space-y-10 md:space-y-0 md:space-x-16">
        {/* Contact Information */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl font-semibold">Contact us</h1>
          <div>
            <p className="font-semibold">Phone</p>
            <p className="text-xl text-blue-700">
              +601131616231 <span className="text-green-500">📱</span>
            </p>
          </div>
          <div>
            <p className="font-semibold">Email</p>
            <a
              href="mailto:info@seoprofy.com"
              className="text-xl text-blue-700"
            >
              growthX@seoprofy.com
            </a>
          </div>
          <div>
            <p className="font-semibold">Address</p>
            <p className="text-xl">57000 Kuala Lumpur, Malaysia</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 space-y-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Your website"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            rows="4"
            placeholder="Describe your business needs and goals"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button className="border text-lg sm:text-xl text-black hover:bg-yellow-300 bg-yellow-400 px-10 py-5 lg:px-14 lg:py-7">
            Send Messege
          </Button>
        </div>
      </div>
    </div>
  );
}
