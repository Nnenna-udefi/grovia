import React from "react";
import { cn } from "../lib/utils";

interface Button {
  text: string;
  className?: string;
}
export const ColouredBtn = ({ text, className }: Button) => {
  return (
    <div>
      <button
        className={cn(
          "bg-[#00CED1] transition duration-300 transform hover:scale-105 cursor-pointer shadow rounded-[10px]  md:w-[300px] w-[180px] h-[50px] md:h-[70px] hover:bg-[#00BFC2] text-white font-semibold md:leading-[32px] text-[14px] leading-normal md:text-[24px] ",
          className
        )}
      >
        {text}
      </button>
    </div>
  );
};
