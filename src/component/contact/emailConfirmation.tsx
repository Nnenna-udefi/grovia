import React from "react";
import { H3 } from "../ui/heading";

export const EmailConfirmation = () => {
  return (
    <div className="text-body bg-white py-12 md:pt-20 md:pb-0 md:px-20 px-6 ">
      <H3 className="text-center">
        Thank you for requesting your Free Brand Audit
      </H3>
      <div className="flex py-12 md:pt-12 md:py-36 justify-center text-[16px]  leading-[24px] md:text-[20px]  md:leading-[40px] gap-3 flex-col items-center">
        <p className="">
          We’ve received your submission and our team at Grovia Creative Agency
          is already reviewing your brand.
        </p>
        <p>
          You’ll receive your personalized audit report within 48 hours,
          including insights and actionable recommendations tailored to your
          business.
        </p>

        <p>
          Keep an eye on your email (and check your spam folder just in case).
          In the meantime, feel free to connect with us on Instagram or LinkedIn
          @<span className="text-primary">groviacreativeagency</span> and
          explore some of our recent work.
        </p>
      </div>
    </div>
  );
};
