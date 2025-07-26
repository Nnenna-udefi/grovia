import React from "react";
import stratiImg from "@/images/Stratigen-img.png";
import Image from "next/image";
import { H4, H6 } from "../ui/heading";
import avatar from "@/images/Ellipse 8.png";
import { ColouredBtn } from "../ui/colouredBtn";

export const Stratigen = () => {
  return (
    <div className="py-12 md:py-20 md:px-20 px-6">
      <p className="text-[18px] leading-[24px] md:text-[28px] md:leading-[42px]">
        Industry: <span className="font-medium">Consulting</span>
      </p>

      <p className="text-[18px] leading-[24px] pt-4 md:text-[28px] md:leading-[42px]">
        Company: <span className="font-medium">Stratigen</span>
      </p>
      <div className="pt-10">
        <Image src={stratiImg} alt="stratigen" className="max-w-full" />
      </div>

      <div className="pt-14">
        <H4>Brand Overview</H4>
        <p className="text-[16px] pt-4 md:text-[18px] leading-[20px] md:leading-[28px]">
          Stratigen empowers startups and small businesses to move beyond
          survival mode and into scalable success. Through sharp business
          strategy, intentional marketing, and operational clarity, Stratigen
          bridges the gap between ambition and execution helping brands unlock
          their next phase of growth with confidence. Stratigen doesn&apos;t
          offer guesswork it delivers data-driven guidance, strategic insight,
          and execution support tailored to each business’s stage, size, and
          vision.
        </p>
      </div>

      <div className="pt-14">
        <H4>Problem</H4>
        <div className="text-[16px] pt-4 md:text-[18px] leading-[30px] md:leading-[42px]">
          <ul className="list-disc pl-10">
            <li>
              Most early-stage businesses lack the strategic foundation to scale
              they’re reactive, not proactive.
            </li>
            <li>
              Marketing is often inconsistent and misaligned with business
              goals.
            </li>
            <li>
              Operational inefficiencies and poor structure slow down progress
              and profitability.
            </li>
            <li>
              Founders struggle to see the bigger picture while handling
              day-to-day tasks.
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-14">
        <H4>Solution</H4>
        <div className="text-[16px] pt-4 md:text-[18px] leading-[30px] md:leading-[42px]">
          <p className="font-medium">
            As a growth-focused agency, Grovia stepped in to give Stratigen
            clarity, structure, and a brand system that matched the value of its
            services.
          </p>

          <ul className="list-disc pl-10">
            <li>
              Strategic Brand Positioning: We clarified Stratigen’s core value
              guiding businesses from confusion to growth clarity and shaped
              messaging around transformation, not just consultation.
            </li>
            <li>
              Visual Identity + Voice: Developed a confident, clean brand
              identity system that signals credibility, competence, and
              growth-mindset thinking.
            </li>
            <li>
              Landing Page Experience: Built a conversion-optimized landing page
              with clear service pathways and proof of impact.
            </li>
            <li>
              Service Clarity Framework: Helped productize their consulting
              offerings into defined tiers, making value easier to communicate
              and sell.
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-14">
        <H4>Results</H4>
        <div className="text-[16px] pt-4 md:text-[18px] leading-[30px] md:leading-[42px]">
          <ul className="list-disc pl-10">
            <li>
              <span className="text-primary">3x</span> increase in client
              onboarding within the first 60 days of relaunch.
            </li>
            <li>
              <span className="text-primary">+70%</span> improvement in
              consultation-to-sale conversion rate due to clearer service
              communication.
            </li>
            <li>
              Established a strong digital presence that now supports inbound
              lead generation.
            </li>
            <li>
              Stratigen is now positioned as a go-to partner for small business
              growth not just another consultant.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex gap-4 items-center py-16">
        <Image src={avatar} alt="avatar" width={100} height={100} />
        <div>
          <H6 className="font-semibold">Micheal A</H6>
          <p className="text-[16px] pt-4 md:text-[18px] leading-[20px] md:leading-[26px]">
            Founder, Stratigen
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center gap-16 py-10 flex-col">
        <p className="text-[18px] md:text-[32px] font-medium md:font-semibold leading-[32px]">
          Let’s create your success story
        </p>
        <ColouredBtn text={"Get in touch"} />
      </div>
    </div>
  );
};
