import React from "react";
import { ContactForm } from "../contactForm";
import { H5 } from "../ui/heading";

// const get = [
//   { id: 1, text: "Honest review of your brand identity" },
//   { id: 2, text: "Website or social media feedback" },
//   { id: 3, text: "3–5 improvement tips" },
//   { id: 4, text: "Personalized next steps" },
//   { id: 5, text: "1-on-1 call" },
// ];

export const ContactIndex = () => {
  return (
    <div className="">
      <div className="text-body bg-white pt-12 md:pt-20 pb-0 md:px-20 px-6 ">
        <div className="flex justify-center gap-4 flex-col items-center">
          <H5 className="md:text-secondary text-body text-center">
            Let’s build your business to a market leader
          </H5>
          <p className="text-center text-[32px] hidden md:block leading-[40px]">
            Tell us about your business goals and we’ll send you a free growth
            audit packed with clarity and insight and actionable recommendations
            tailored for you
          </p>

          <p className="text-center text-[16px]  leading-[24px] md:hidden block">
            We&apos;ll analyze your brand visuals, voice, and positioning to
            find what’s missing and what can grow.
          </p>
        </div>

        {/* <div className="flex justify-center gap-4 py-12 flex-col items-center">
          <H3>What You’ll Get</H3>
          <div>
            <div className="p-6 flex lg:flex-row flex-col gap-4 justify-between">
              {get.map((items) => (
                <div
                  key={items.id}
                  className="border-2 border-gray font-medium rounded-lg px-6 pt-8 w-[200px] h-[160px] text-center"
                >
                  <H6>{items.text}</H6>
                </div>
              ))}
            </div>
          </div>
          <H6>Delivered within 48 hours. No obligations. Just value.</H6>
        </div> */}
      </div>
      <ContactForm para="" />
    </div>
  );
};
