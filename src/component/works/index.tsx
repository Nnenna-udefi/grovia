import React from "react";
import { H2 } from "../ui/heading";
import elevano from "@/images/elevano-(1).png";
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

      <div className="flex flex-col gap-4 pt-10">
        <Image
          src={elevano}
          alt="elevano"
          width={500}
          height={500}
          className="lg:max-[1250px] rounded-[20px] lg:max-h-[700px] md:w-full lg:h-[700px] md:h-[500px] w-[360px] h-[280px]"
        />
        <p className="text-[14px] md:text-[32px] leading-[20px] text-[#00000099] md:leading-[40px] ">
          Business Consulting
        </p>
        <h2 className="text-black text-[16px] md:text-[48px] leading-[20px] md:leading-[48px] font-semibold">
          <Link href="/works/elevano">Elevano Brand Identify</Link>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 -mx-6 md:pt-20 pt-10">
        {workBlocks.map((work) => (
          <div
            key={work.title}
            className="text-[14px] flex flex-col  gap-4 p-6 rounded-md md:text-[24px] leading-[20px] md:leading-[32px] text-[#00000099]"
          >
            <Image src={work.img} alt="work ige" className="rounded-[20px]" />
            <Link href={work.link}>
              <div>
                <p>{work.title}</p>
                <h3 className="py-3 text-black font-semibold text-[16px] md:text-[32px] leading-[20px] md:leading-[40px]">
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
