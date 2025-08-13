import React from "react";
import scaleImg from "@/images/SCALELAB-image.png";
import Image from "next/image";
import { H4, H6 } from "../ui/heading";
import avatar from "@/images/Ellipse 5.png";
import { Results } from "../results";

export const ScaleLab = () => {
  return (
    <div className="py-12 md:py-20 md:px-20 px-6">
      <p className="text-[18px] leading-[24px] md:text-[28px] md:leading-[42px]">
        Industry: <span className="font-medium">Consulting</span>
      </p>

      <p className="text-[18px] leading-[24px] pt-4 md:text-[28px] md:leading-[42px]">
        Company: <span className="font-medium">Scale Lab</span>
      </p>
      <div className="pt-10">
        <Image src={scaleImg} alt="scale-img" className="max-w-full" />
      </div>

      <div className="pt-14">
        <H4>Brand Overview</H4>
        <p className="text-[16px] pt-4 md:text-[18px] leading-[28px]">
          At Grovia, we partnered with Scale Lab Consulting to develop a bold,
          intelligent brand that reflects their role as growth architects for
          startups and SMEs. Scale Lab isn’t just a consulting firm it’s a
          strategic partner that transforms business potential into scalable
          systems and sustainable success. Our task was to translate that
          clarity, confidence, and competence into a visual and verbal identity
          that feels sharp, modern, and trustworthy.
        </p>
      </div>

      <div className="pt-14">
        <H4>Problem</H4>
        <p className="text-[16px] pt-4 md:text-[18px] leading-[28px]">
          Despite their expertise, Scale Lab lacked a cohesive brand that
          communicated their value at a glance. Their clients high-potential
          businesses were struggling with fragmented operations, weak
          positioning, and ineffective growth strategies. The consulting space
          is saturated, and standing out requires more than just results it
          requires presence..
        </p>
      </div>

      <div className="pt-14">
        <H4>Solution</H4>
        <div className="text-[16px] pt-4 md:text-[18px] leading-[30px] md:leading-[42px]">
          <p>
            We crafted a brand identity that feels as structured and strategic
            as the work Scale Lab delivers. From a precision-based logo system
            symbolizing growth and balance, to a clean, modern typeface
            (Satoshi) and a confident palette of dark slate and gold, every
            element was designed to build instant trust. The messaging was
            repositioned to reflect their real strength: turning complexity into
            clarity and growth.
          </p>
        </div>
      </div>

      <div className="pt-14">
        <H4>Results</H4>
        <div className="text-[16px] pt-4 md:text-[18px] leading-[30px] md:leading-[42px]">
          <ul className="list-disc pl-10">
            <li>
              Achieved a <span className="text-primary">40%</span> increase in
              qualified leads within 90 days of launch
            </li>
            <li>
              Boosted client engagement by{" "}
              <span className="text-primary">55%</span> through consistent
              branding and sharper messaging
            </li>
            <li>
              Enabled the internal team to pitch with{" "}
              <span className="text-primary">3×</span> more confidence, backed
              by a professional, strategic identity
            </li>
            <li>
              Positioned Scale Lab as a premium growth partner, attracting
              higher-value clients
            </li>
            <li>
              Delivered a fully scalable brand system, adaptable across digital,
              print, and pitch environments
            </li>
          </ul>
          <p>
            Elevano now shows up as they are: structured, strategic, and built
            to elevate.
          </p>
        </div>
      </div>

      <div className="flex gap-4 items-center py-16">
        <Image
          src={avatar}
          alt="avatar"
          width={100}
          height={100}
          className="w-[60px] h-[60px] md:w-[100px] md:h-[100px]"
        />
        <div>
          <H6 className="font-semibold">Patricia, E</H6>
          <p className="text-[16px] pt-4 md:text-[18px] leading-[20px] md:leading-[26px]">
            Brand Manager, Scale Lab
          </p>
        </div>
      </div>
      <Results />
    </div>
  );
};
