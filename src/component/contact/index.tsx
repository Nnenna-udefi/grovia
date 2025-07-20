import React from "react";
import { ContactForm } from "../contactForm";
import { H3, H6 } from "../ui/heading";

const get = [
  { id: 1, text: "Honest review of your brand identity" },
  { id: 2, text: "Website or social media feedback" },
  { id: 3, text: "3–5 improvement tips" },
  { id: 4, text: "Personalized next steps" },
  { id: 5, text: "1-on-1 call" },
];

export const ContactIndex = () => {
  return (
    <div className="">
      <div className="text-body bg-white py-12 md:py-20 md:px-20 px-6">
        <div className="flex justify-center gap-4 flex-col items-center">
          <H3>Let’s Take a Look at Your Brand For Free</H3>
          <p className="md:text-2xl text-center">
            We&apos;ll analyze your brand visuals, voice, and positioning to
            find what’s missing and what can grow.
          </p>
        </div>

        <div className="flex justify-center gap-4 py-12 flex-col items-center">
          <H3>What You’ll Get</H3>
          <div>
            <div className="p-6 flex md:flex-row flex-col gap-4 justify-between">
              {get.map((items) => (
                <div
                  key={items.id}
                  className="border-2 border-gray rounded-lg px-6 pt-8 w-[200px] h-[160px] text-center"
                >
                  <H6>{items.text}</H6>
                </div>
              ))}
            </div>
          </div>
          <H6>Delivered within 48 hours. No obligations. Just value.</H6>
        </div>
      </div>
      <ContactForm para="Start Your Free Audit" />
    </div>
  );
};
