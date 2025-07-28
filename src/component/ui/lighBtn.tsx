import React from "react";
import { cn } from "../lib/utils";

interface Button {
  text: string;
  className?: string;
}
export const LightBtn = ({ text, className }: Button) => {
  return (
    <div>
      <button
        className={cn(
          "bg-white border-[1.5px] transition duration-300 transform hover:scale-105 cursor-pointer border-black shadow rounded-[10px] md:w-[300px] w-[180px] h-[50px] md:h-[70px] hover:bg-black hover:text-white text-black font-semibold md:leading-[32px] text-[14px] leading-normal md:text-[22px] ",
          className
        )}
      >
        {text}
      </button>
    </div>
  );
};
