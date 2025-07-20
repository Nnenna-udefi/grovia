type HeadingProps = {
  children: React.ReactNode;
  className?: string;
};

import React from "react";
import { cn } from "../lib/utils";

export const H1 = ({ children, className }: HeadingProps) => {
  return (
    <h1
      className={cn(
        "font-poppins font-bold md:text-[64px] text-[28px] leading-[36px] md:leading-[72px] tracking-normal",
        className
      )}
    >
      {children}
    </h1>
  );
};

export const H2 = ({ children, className }: HeadingProps) => {
  return (
    <h2
      className={cn(
        "font-poppins font-bold text-[18px] md:text-[48px] leading-[26px] md:leading-[66px] tracking-normal",
        className
      )}
    >
      {children}
    </h2>
  );
};

export const H3 = ({ children, className }: HeadingProps) => {
  return (
    <h3
      className={cn(
        "font-poppins font-semibold text-[16px] md:text-[32px] leading-[24px] md:leading-[40px] tracking-normal",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const H4 = ({ children, className }: HeadingProps) => {
  return (
    <h4
      className={cn(
        "font-poppins font-semibold text-[14px] md:text-[28px] leading-[22px] md:leading-[36px] tracking-normal",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const H5 = ({ children, className }: HeadingProps) => {
  return (
    <h5
      className={cn(
        "font-poppins font-medium text-[14px] md:text-[24px] leading-[20px] md:leading-[36px] tracking-normal",
        className
      )}
    >
      {children}
    </h5>
  );
};

export const H6 = ({ children, className }: HeadingProps) => {
  return (
    <h6
      className={cn(
        "font-poppins font-normal text-[12px] md:text-[18px] leading-[20px] md:leading-[26px] tracking-normal",
        className
      )}
    >
      {children}
    </h6>
  );
};
