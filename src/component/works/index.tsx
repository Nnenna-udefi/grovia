import React from "react";
import { H2 } from "../ui/heading";
import elevano from "@/images/elevano-white.png";
import Image from "next/image";
import { workBlocks } from "../lib/constants";
import Link from "next/link";

export const WorkIndex = () => {
  return (
    <div className="pb-12 pt-8 md:pt-10 md:pb-32 md:px-20 px-6">
      <h3 className="hidden md:block text-secondary md:text-[24px] pb-10 md:pb-20 md:leading-[38px] font-medium text-center">
        Works that speak for itself
      </h3>
      <H2 className="text-center pb-6 hidden md:block w-full">
        A Proven Track Record of Helping Businesses Stand Out, Sell More and
        Grow Smarter
      </H2>

      <h2 className="text-[16px] leading-[24px] text-left w-[90%] md:hidden block font-medium">
        We’ve helped businesses go from invisible to unforgettable. Here are
        some of our favorite transformations
      </h2>

      <Link href="/works/elevano">
        <div className="flex flex-col gap-4 pt-10">
          <div className="relative bg-[#1F3A8B] max-w-[1250px] aspect-[5/5] md:aspect-[16/9] w-full flex flex-col justify-center items-center rounded-[20px] overflow-hidden group">
            <Image
              src={elevano}
              alt="elevano"
              width={350}
              height={350}
              className="w-[200px] h-[175px] md:w-[380px] md:h-[350px] transition-transform duration-500 ease-in-out group-hover:scale-120"
            />
          </div>

          <div className="">
            <p className="text-[14px] py-1 md:py-3 md:text-[32px] leading-[20px] text-[#00000099] md:leading-[40px] ">
              Elevano
            </p>
            <h2 className="text-black text-[16px] md:text-[48px] leading-[20px] md:leading-[48px] font-semibold">
              Elevano Brand Identity
            </h2>
          </div>
        </div>
      </Link>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 -mx-6 md:pt-20 pt-10">
        {workBlocks.map((work) => (
          <div
            key={work.title}
            className="text-[14px] flex flex-col  gap-4 p-6 rounded-md md:text-[24px] leading-[20px] md:leading-[32px] text-[#00000099]"
          >
            <Link href={work.link}>
              <div className="overflow-hidden rounded-[20px] group">
                <Image
                  src={work.img}
                  alt="work image"
                  className="rounded-[20px] transition-transform duration-500 ease-in-out group-hover:scale-120"
                />
              </div>
              <div className="pt-3">
                <p>{work.title}</p>
                <h3 className="py-1 md:py-3 text-black font-semibold text-[16px] md:text-[32px] leading-[20px] md:leading-[40px]">
                  {work.text}
                </h3>
                <p>{work.engagement}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
