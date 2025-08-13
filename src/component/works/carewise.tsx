import React from "react";
import carewiseImg from "@/images/carewise.jpg";
import Image from "next/image";
import { H4, H6 } from "../ui/heading";
import avatar from "@/images/franklin-avatar.png";
import { Results } from "../results";

export const Carewise = () => {
  return (
    <div className="py-12 md:py-20 md:px-20 px-6">
      <p className="text-[18px] leading-[24px] md:text-[28px] md:leading-[42px]">
        Industry: <span className="font-medium">Healthcare</span>
      </p>

      <p className="text-[18px] leading-[24px] pt-4 md:text-[28px] md:leading-[42px]">
        Company: <span className="font-medium">Carewise</span>
      </p>
      <div className="pt-10">
        <Image src={carewiseImg} alt="carewise" className="max-w-full" />
      </div>

      <div className="pt-14">
        <H4>Brand Overview</H4>
        <p className="text-[16px] pt-4 md:text-[18px] leading-[28px]">
          Carewise Health exists to cut through the noise in Medicare. Most
          people are drowning in paperwork, jargon, and endless plan options and
          they end up guessing instead of choosing the right coverage. We
          eliminate the confusion, match you with the plan that fits your needs,
          and help you save money. Our mission: make healthcare decisions
          simple, fast, and cost-effective.
        </p>
      </div>

      <div className="pt-14">
        <H4>Problem</H4>
        <div className="text-[16px] pt-4 md:text-[18px] leading-[30px] md:leading-[42px]">
          <ul className="list-disc pl-10">
            <li>65+ plan options in some regions.</li>
            <li>Every plan has hidden clauses, premiums, and exclusions.</li>
            <li>Most people don’t know how to compare beyond the price.</li>
            <li>
              The average retiree overpays by $800+ per year because they pick
              the wrong plan. This leads to stress, wasted time, and lost of
              money and the worst part? People don’t even realize it until it’s
              too late.
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-14">
        <H4>Solution</H4>
        <div className="text-[16px] pt-4 md:text-[18px] leading-[30px] md:leading-[42px]">
          <p className="font-medium">
            We built Carewise Health to be your shortcut to clarity.
          </p>
          <ul className="list-disc pl-10">
            <li>
              Step 1: Quick assessment → We learn your medical needs and budget
              in minutes.
            </li>
            <li>
              Step 2: Plan matching → We cut through 65+ options and pick the
              top 3 that save you the most money.
            </li>
            <li>
              Step 3: Expert guidance → A real human walks you through every
              step, answering your questions without jargon.
            </li>
            <li>
              Step 4: Ongoing support → If your needs change, we re-match you at
              no extra cost.
            </li>
          </ul>
          <p>
            {" "}
            We don’t just help you choose we do the heavy lifting for you so you
            walk away with confidence, lower costs, and zero stress.
          </p>
        </div>
      </div>

      <div className="pt-14">
        <H4>Results</H4>
        <div className="text-[16px] pt-4 md:text-[18px] leading-[30px] md:leading-[42px]">
          <ul className="list-disc pl-10">
            <li>
              92% of users choose a plan within 48 hours vs. weeks of research
              alone
            </li>
            <li>Average annual premium savings: $1,200 per customer.</li>
            <li>4.9/5 average rating from verified users.</li>
            <li>
              3X faster decision-making process compared to self-research.
            </li>
            <li>80%+ referral rate from satisfied clients.</li>
          </ul>
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
          <H6 className="font-semibold">Franklin A</H6>
          <p className="text-[16px] pt-4 md:text-[18px] leading-[20px] md:leading-[26px]">
            Founder, Carewise
          </p>
        </div>
      </div>

      <Results />
    </div>
  );
};
