import React from "react";
import { H2, H3 } from "../ui/heading";
import elevano from "@/images/elevano-(1).png";
import Image from "next/image";
import { workBlocks } from "../lib/constants";
import Link from "next/link";

export const WorkIndex = () => {
  return (
    <div className="py-12 md:py-20 md:px-20 px-6">
      <H2 className="text-center pb-6">
        We’ve helped businesses go from invisible to unforgettable. Here are
        some of our favorite transformations.
      </H2>

      <div className="flex flex-col gap-4">
        <Image src={elevano} alt="elevano" />
        <p className="text-[16px] md:text-[32px] leading-[24px] md:leading-[40px] ">
          Elevano
        </p>
        <H2 className="text-black">Elevano Brand Identify</H2>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 pt-8">
        {workBlocks.map((work) => (
          <div
            key={work.title}
            className="text-[14px] flex flex-col  gap-4 p-6 rounded-md md:text-[24px] leading-[20px] md:leading-[32px] text-[#00000099]"
          >
            <Image src={work.img} alt="work ige" />
            <Link href={work.link}>
              <div>
                <p>{work.title}</p>
                <H3 className="py-3 text-black">{work.text}</H3>
                <p>{work.engagement}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
