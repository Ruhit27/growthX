import { BookIcon } from "lucide-react";
import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function Marque() {
  return (
    <div className="flex justify-center mt-14">
      <div className=" w-[1160px] ">
        <Marquee className="" speed={140}>
          <Image
            className="mr-20"
            src={"/fb.png"}
            width={110}
            height={130}
            alt="facebooks"
          />
          <Image
            className="mr-20"
            src={"/vercel.svg"}
            width={90}
            height={90}
            alt="facebooks"
          />
          <Image
            className="mr-20"
            src={"/next.svg"}
            width={90}
            height={90}
            alt="facebooks"
          />
          <Image
            className="mr-10"
            src={"/google.png"}
            width={90}
            height={90}
            alt="facebooks"
          />
        </Marquee>
      </div>
    </div>
  );
}
