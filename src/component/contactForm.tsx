import React from "react";
import { H5 } from "./ui/heading";
import { ColouredBtn } from "./ui/colouredBtn";

interface contactProps {
  heading?: string;
  para?: string;
}

export const ContactForm = ({ heading, para }: contactProps) => {
  return (
    <div className="text-body bg-white py-12 md:py-20 md:px-20 px-6">
      <div className="flex justify-center gap-4 flex-col items-center">
        <H5 className="text-secondary text-center">{heading}</H5>
        <p className="md:text-[40px] md:leading-[50px] text-center text-body font-semibold">
          {para}
        </p>
      </div>

      <form className="pt-12 md:grid grid-cols-2 block gap-20">
        <div className="flex flex-col w-full md:w-[80%] gap-2 font-medium text-[14px] md:text-[24px] leading-[20px] md:leading-[36px]">
          <label htmlFor="name">Full name</label>
          <input
            type="text"
            name="name"
            className="border-2 border-body rounded-[10px] p-2"
          />
        </div>

        <div className="flex flex-col gap-2 w-full md:w-[80%] py-10 md:py-0 font-medium text-[14px] md:text-[24px] leading-[20px] md:leading-[36px]">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="border-2 border-body rounded-[10px] p-2"
          />
        </div>

        <div className="flex flex-col gap-2 w-full md:w-[80%] font-medium text-[14px] md:text-[24px] leading-[20px] md:leading-[36px]">
          <label htmlFor="business">Business name</label>
          <input
            type="text"
            name="business"
            className="border-2 border-body rounded-[10px] p-2"
          />
        </div>

        <div className="flex flex-col gap-2 w-full md:w-[80%] py-10 md:py-0 font-medium text-[14px] md:text-[24px] leading-[20px] md:leading-[36px]">
          <label htmlFor="challenge">
            What&apos;s your biggest challenge right now?
          </label>
          <input
            type="text"
            name="challenge"
            placeholder="Short answer"
            className="border-2 border-body rounded-[10px] p-2"
          />
        </div>

        <div className="flex flex-col gap-2 w-full md:w-[80%] font-medium text-[14px] md:text-[24px] leading-[20px] md:leading-[36px]">
          <label htmlFor="name">Website</label>
          <input
            type="text"
            name="website"
            className="border-2 border-body rounded-[10px] p-2"
          />
        </div>

        <div className="flex justify-center items-center pt-6">
          <ColouredBtn text="Submit Request" />
        </div>
      </form>
    </div>
  );
};
