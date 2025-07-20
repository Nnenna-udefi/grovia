import React from "react";
import { H1 } from "../ui/heading";
import { LightBtn } from "../ui/lighBtn";
import { ColouredBtn } from "../ui/colouredBtn";

export const HomeComponent = () => {
  return (
    <div className="py-12 px-12">
      <div className="flex justify-center flex-col items-center">
        <H1 className="text-center text-primary">
          Accelerate Business Growth Through Smarter Branding
        </H1>
        <p className="text-black md:text-2xl text-lg font-medium text-center py-8 w-[80%] ">
          From ambitious SMEs to scaling enterprises, we create brand systems
          that convert trust into traction with design, strategy and artificial
          intelligence
        </p>
        <div className="flex md:flex-row flex-col gap-6">
          <LightBtn text="View Our Work" className=" py-4" />
          <ColouredBtn text="Get Free Brand Audit" className="" />
        </div>
      </div>
    </div>
  );
};
