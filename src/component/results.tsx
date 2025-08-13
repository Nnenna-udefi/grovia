import React from "react";
import { ColouredBtn } from "./ui/colouredBtn";
import Link from "next/link";

export const Results = () => {
  return (
    <div>
      <div className="flex justify-center text-center items-center gap-6 py-10 flex-col">
        <p className="text-[18px] md:text-[32px] font-medium md:font-semibold leading-[32px]">
          Want Similar Results for your Business
        </p>
        <p className="md:text-[22px] text-[16px] leading-[24px] md:leading-[40px]">
          We’ll show you what’s possible based on your goals and how we would
          help you get there
        </p>
        <Link href="/contact" className="pt-10">
          <ColouredBtn text={"Start Your Project"} />
        </Link>
      </div>
    </div>
  );
};
