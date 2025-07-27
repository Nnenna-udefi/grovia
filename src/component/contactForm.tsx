import React from "react";
import { H5 } from "./ui/heading";
import Link from "next/link";

interface contactProps {
  heading?: string;
  para?: string;
}

export const ContactForm = ({ heading, para }: contactProps) => {
  return (
    <div className="text-body bg-white pb-12 pt-0 md:pt-10 md:pb-20 md:px-20 px-6">
      <div className="flex justify-center gap-4 flex-col items-center">
        <H5 className="text-secondary text-center">{heading}</H5>
        <p className="md:text-[40px] text-[18px] leading-[26px] md:leading-[50px] text-center text-body font-semibold">
          {para}
        </p>
      </div>

      <form className="pt-12 lg:grid grid-cols-2 block gap-20">
        <div className="flex flex-col w-full md:w-[80%] gap-2 font-medium text-[14px] md:text-[24px] leading-[20px] md:leading-[36px]">
          <label htmlFor="name">Full name</label>
          <input
            type="text"
            name="name"
            className="border md:border-2 border-black md:border-[#2D2D2D99] rounded-[10px] p-2"
          />
        </div>

        <div className="flex flex-col gap-2 w-full md:w-[80%] py-10 md:py-0 font-medium text-[14px] md:text-[24px] leading-[20px] md:leading-[36px]">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            className="border md:border-2 border-black md:border-[#2D2D2D99] rounded-[10px] p-2"
          />
        </div>

        <div className="flex flex-col gap-2 w-full md:w-[80%] font-medium text-[14px] md:text-[24px] leading-[20px] md:leading-[36px]">
          <label htmlFor="business">Business name</label>
          <input
            type="text"
            name="business"
            className="border md:border-2 border-black md:border-[#2D2D2D99] rounded-[10px] p-2"
          />
        </div>

        <div className="flex flex-col gap-2 w-full md:w-[80%] py-10 md:py-0 font-medium text-[14px] md:text-[24px] leading-[20px] md:leading-[36px]">
          <label htmlFor="challenge">
            What is your biggest business challenge right now?{" "}
            <span className="font-normal">
              (will you this to tailor your audit)
            </span>
          </label>
          <input
            type="text"
            name="challenge"
            // placeholder="Short answer"
            className="border md:border-2 border-black md:border-[#2D2D2D99] rounded-[10px] p-2"
          />
        </div>

        <div className="flex flex-col gap-2 w-full md:w-[80%] font-medium text-[14px] md:text-[24px] leading-[20px] md:leading-[36px]">
          <label htmlFor="name">
            Website <span className="font-normal">(optional)</span>
          </label>
          <input
            type="text"
            name="website"
            className="border md:border-2 border-black md:border-[#2D2D2D99] rounded-[10px] p-2"
          />
        </div>
      </form>

      <div className="flex justify-center items-center py-20">
        <Link href="/contact/emailConfirmed">
          <button className="bg-[#00CED1] transition duration-300 transform hover:scale-105 cursor-pointer shadow rounded-[10px]  md:w-[400px] w-[240px] h-[45px] md:h-[70px] hover:bg-[#00BFC2] text-white font-semibold md:leading-[32px] text-[14px] leading-normal md:text-[24px]">
            Claim My Free Growth{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};
