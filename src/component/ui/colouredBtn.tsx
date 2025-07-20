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
          "bg-[#00CED1] shadow rounded-xl py-5 px-6 w-[300px] hover:bg-[#00BFC2] text-white font-semibold  text-xl ",
          className
        )}
      >
        {text}
      </button>
    </div>
  );
};
