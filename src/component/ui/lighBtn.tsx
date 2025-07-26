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
          "bg-white border-2 transition duration-300 transform hover:scale-105 cursor-pointer border-black shadow rounded-xl py-3 px-6 w-[300px] hover:bg-black hover:text-white text-black font-semibold  text-xl ",
          className
        )}
      >
        {text}
      </button>
    </div>
  );
};
